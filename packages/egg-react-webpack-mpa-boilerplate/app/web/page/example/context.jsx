import React, { Component } from 'react';

import Layout from 'component/layout';

const { Provider, Consumer } = React.createContext({ name: 'React Context' });

function Content(props) {
  return (
    <Consumer>
      {( { title, article } ) =>
        <div>
          <h1 className="easy-article-detail-title">{title}</h1>
          <h2 className="easy-article-detail-title">{article.title}</h2>
          <div className="easy-article-info">
            <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
          </div>
        </div>
      }
    </Consumer>
  );
}
class ContextMode extends Component {
  render() {
    const { title, article } = this.props;
    return <Layout>
      <Provider value={ { title, article } }>
        <Content />
      </Provider>
    </Layout>;
  }
}

export default ContextMode;