'use strict';
import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
export default {
  async post(url, json, locals = {}) {
    const headers = {};
    if (EASY_ENV_IS_NODE) {
      headers['x-csrf-token'] = locals.csrf;
      headers.Cookie = `csrfToken=${locals.csrf}`;
    }
    const res = await axios.post(`${locals.origin}${url}`, json, { headers });
    return res.data;
  },
  async get(url, locals = {}) {
    const res = await axios.get(`${locals.origin}${url}`);
    return res.data;
  }
};