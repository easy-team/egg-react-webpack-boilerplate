import React, { Component } from 'react';
import Logo from '../../../../asset/images/react.png';
export default class AsyncImage extends React.Component {
    render() {
        return <div><img src={Logo} /><div>这是异步加载的内容</div></div>
    }
}