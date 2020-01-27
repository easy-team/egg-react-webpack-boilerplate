/* eslint-disable func-style */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { matchRoutes } from 'react-router-config';

async function asyncData(context, router) {
  const url = context.url;
  const matchRoute = matchRoutes(router, url);
  const promises = matchRoute.map(({ route }) => {
    const componentAsyncData = route.component.asyncData;
    return componentAsyncData instanceof Function ? componentAsyncData(context, route) : null;
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
        ReactDOM[renderMethod](<RootEntry />, root);
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
