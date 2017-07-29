'use strict';
const path = require('path');
const fs = require('fs');
const serialize = require('serialize-javascript');

class Resource {
  constructor(app) {
    this.app = app;
    this.config = app.config.reactssr;
    this.headRegExp = /(<\/head>)/i;
    this.bodyRegExp = /(<\/body>)/i;
    this.init();
  }

  init() {
    this.initConfig();
    // local dev mode, webpack build finish update buildConfig and manifest
    if (process.env.NODE_ENV !== 'production') {
      this.app.messenger.on('webpack_manifest_save_success', () => {
        delete require.cache[this.config.buildConfig];
        delete require.cache[this.config.manifest];
        this.initConfig();
        this.app.logger.debug('Resource#update buildConfig and manifest', this.buildConfig.publicPath);
      });
    }
  }

  initConfig() {
    if (this.isValidJSONConfig(this.config.buildConfig)) {
      this.buildConfig = require(this.config.buildConfig);
    }
    if (this.isValidJSONConfig(this.config.manifest)) {
      this.manifest = require(this.config.manifest);
      this.resourceDeps = this.getResourceDeps(this.manifest, this.buildConfig);
    }
    this.initInline();
  }

  initInline() {
    if (Array.isArray(this.config.injectRes)) {
      this.config.injectRes.forEach(item => {
        const url = this.getRes(item);
        this.app.logger.debug('Resource#initInline', url, item);
        if (item.inline && this.isExist(url)) {
          const content = this.readFile(url);
          if (/\.js$/.test(url)) {
            item.content = `<script>${content}</script>`;
          } else if (/\.css$/.test(url)) {
            item.content = `<style>${content}</style>`;
          }
        } else {
          if (/\.js$/.test(url)) {
            item.content = this.createScriptSrcTag(url);
          } else if (/\.css$/.test(url)) {
            item.content = this.createCssLinkTag(url);
          }
        }
      });
      this.app.logger.debug('Resource#this.config.injectRes', this.config.injectRes);
    }
  }

  getRes(res) {
    const url = res.url;
    if (/^(https?|\/\/)/.test(url) || path.isAbsolute(url)) {
      return url;
    }
    if (res.inline) {
      const filepath = path.join(this.app.baseDir, url);
      if (this.isExist(filepath)) {
        return filepath;
      }
    }
    if (this.buildConfig && this.manifest) {
      const buildPath = this.buildConfig.buildPath;
      const publicPath = this.buildConfig.publicPath;
      const mappingUrl = this.manifest[url];
      if (res.inline && buildPath && mappingUrl) {
        const filepath = path.join(this.app.baseDir, buildPath, mappingUrl);
        this.app.logger.debug('Resource#getRes', filepath, res);
        if (this.isExist(filepath)) {
          return filepath;
        }
      }
      if (res.manifest && publicPath && mappingUrl) {
        return publicPath + mappingUrl;
      }
    }
    return url;
  }

  isExist(filepath) {
    return fs.existsSync(filepath);
  }

  readFile(filepath) {
    return fs.readFileSync(filepath, 'utf8');
  }

  isValidJSONConfig(filepath) {
    if (!filepath) return false;
    if (this.isExist(filepath)) {
      try {
        return require(filepath);
      } catch (err) {
        return false;
      }
    }
    return false;
  }

  createCssLinkTag(url) {
    return `<link rel="stylesheet" href="${url}">`;
  }

  createScriptSrcTag(url) {
    // support cdn js error catch
    if (this.config.crossorigin) {
      const crossorigin = typeof this.config.crossorigin === 'string' ? this.config.crossorigin : 'anonymous';
      return `<script type="text/javascript" crossorigin="${crossorigin}" src="${url}"></script>`;
    }
    return `<script type="text/javascript" src="${url}"></script>`;
  }

  injectHead(resArr) {
    this.config.injectRes.forEach(item => {
      if (item.content) {
        if (item.location === 'headBefore' || (item.location === undefined && /\.(css|js)$/.test(item.url))) {
          resArr.unshift(item.content);
        } else if (item.location === 'headAfter') {
          resArr.push(item.content);
        }
      }
    });
  }

  injectBody(resArr) {
    this.config.injectRes.forEach(item => {
      if (item.content) {
        if (item.location === 'bodyBefore') {
          resArr.unshift(item.content);
        } else if (item.location === 'bodyAfter') {
          resArr.push(item.content);
        }
      }
    });
  }


  inject(html, config, name, locals, options) {
    const fileKey = name;
    const fileManifest = this.resourceDeps[fileKey];
    if (fileManifest) {
      const headInject = [];
      const bodyInject = [];
      const publicPath = this.buildConfig.publicPath;
      if (config.injectCss && (options.injectCss === undefined || options.injectCss)) {
        fileManifest.css.forEach(item => {
          headInject.push(this.createCssLinkTag(publicPath + item));
        });
      } else if (locals.styles) {
        headInject.push(locals.styles);
      }
      if (config.injectJs) {
        fileManifest.script.forEach(item => {
          bodyInject.push(this.createScriptSrcTag(publicPath + item));
        });
        if (!/window.__INITIAL_STATE__/.test(html)) {
          bodyInject.unshift(`<script> window.__INITIAL_STATE__= ${serialize(locals.state || locals, { isJSON: true })};</script>`);
        }
      }
      this.injectHead(headInject);
      html = html.replace(this.headRegExp, match => {
        return headInject.join('') + match;
      });

      this.injectBody(bodyInject);
      html = html.replace(this.bodyRegExp, match => {
        return bodyInject.join('') + match;
      });
    }
    return config.afterRender(html, locals);
  }

  getResourceDeps(manifest, buildConfig) {
    const commonScriptPaths = [];
    const commonCSSPaths = [];
    const formatManifest = {};
    buildConfig.commonsChunk.forEach(item => {
      const jsKey = `${item}.js`;
      const cssKey = `${item}.css`;
      manifest[jsKey] && commonScriptPaths.push(manifest[jsKey]);
      manifest[cssKey] && commonCSSPaths.push(manifest[cssKey]);
    });

    Object.keys(manifest).forEach(item => {
      if (/\.js$/.test(item)) {
        formatManifest[item] = {
          script: commonScriptPaths.concat(manifest[item]),
          css: commonCSSPaths.concat(manifest[item.replace(/\.js$/, '.css')] || []),
        };
      }
    });
    return formatManifest;
  }
}

module.exports = Resource;
