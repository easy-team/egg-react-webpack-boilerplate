/* eslint-disable func-style */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { matchRoutes } from 'react-router-config';


async function asyncData(locals, router) {
  const url = locals.url;
  const matchRouteList = matchRoutes(router, url);
  const promises = matchRouteList.map(matchRoute=> {
    const componentAsyncData = matchRoute.route.component.asyncData;
    return componentAsyncData instanceof Function ? componentAsyncData(locals, matchRoute) : null;
  });
  const list = await Promise.all(promises);
  return list.reduce((item, result) => {
    return { ...result, ...item}
  }, {});
}

function bootstrap(Entry) {
  if (EASY_ENV_IS_BROWSER) {
    const root = document.getElementById('app');
    const renderMethod = root.childNodes.length > 0 ? 'hydrate' : 'render';
    ReactDOM[renderMethod](<Entry />, root);
    if (EASY_ENV_IS_DEV) {
      module.hot.accept(() => {
        ReactDOM[renderMethod](<Entry />, root);
      });
    }
    return;
  }
  return Entry;
}

export {
  asyncData,
  bootstrap
}
