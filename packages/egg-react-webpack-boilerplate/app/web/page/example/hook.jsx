import React, { useState } from 'react';

import request from '../../framework/request';
import Layout from 'component/layout';

function HookAsyncDataMode(props) {
  const [data] = useState({
    title: props.title,
    article: props.article
  });
  return (<Layout>
    <h2 className="easy-article-detail-title">{data.article.title}</h2>
    <div className="easy-article-info">
      <iframe src={data.article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
    </div>
  </Layout>);
}

HookAsyncDataMode.asyncData = async function(locals) {
  return request.get('/example/data/api/article', locals);
}

export default  HookAsyncDataMode;