'use strict';

import '../styles/main.css';
import React from 'react';
import Nav from './nav';
import AttractionList from './attractionList';

var TaipeiAttrations = React.createClass({
  getInitialState: function() {
    return {
      proxyUrl: 'http://proxy-req-datataipei.herokuapp.com/req?url=',
      taipeiDataset: '/opendata/datalist/apiAccess?scope=resourceAquire&rid=36847f3f-deff-4183-a5bb-800737591de5',
      initAttractionNumber: 10,
      attractions: [],
      categories: [
        '全部', '養生溫泉', '藍色公路', '博物館', '歷史建築',
        '展演會館', '圖書館', '單車遊蹤', '城市公園', '親山健行',
        '寺廟', '其他', '親子共遊', '公共藝術', '教堂'
      ]
    };
  },
  componentDidMount: function() {
    var that = this;
    var url = this.state.proxyUrl +
      encodeURIComponent(this.state.taipeiDataset) +
      encodeURIComponent('&limit='+ this.state.initAttractionNumber);
    var xmlHttpReq = new XMLHttpRequest();

    if (xmlHttpReq) {
      xmlHttpReq.onload = function() {
        that.setState({attractions: JSON.parse(this.responseText).result.results});
      };
      xmlHttpReq.open('GET', url, true);
      xmlHttpReq.send();
    } else {
      // browser does not support
    }
  },
  render: function() {
    return (
      <div>
        <Nav />
        <header className={'header'}>
          <div className={'container'}>
          </div>
        </header>
        <div className={'container'}>
          <div className={'page-header'}>
            <h1>全部景點資訊</h1>
          </div>
          <div className={'row'}>
            <div className={'col-sm-3 col-md-2'}>
              <CategoryList data={this.state.categories} />
            </div>
            <div className={'main col-sm-9 col-md-10'}>
              <AttractionList data={this.state.attractions} />
            </div>
          </div>
        </div>
        <footer className={'footer navbar-inverse'}></footer>
      </div>
    );
  }
});

var CategoryList = React.createClass({
  render: function() {
    var list = this.props.data.map(function(category) {
      return (
        <li>
          <a>{category}</a>
        </li>
      );
    });
    return (
      <div>
      <div className={'panel-heading'}>
        <h3 className={'panel-title'}>
          <span className={'glyphicon glyphicon-th-list'}></span>
          景點類別
        </h3>
      </div>
      <div className={'panel-body'}>
        <ul className={'nav nav-sidebar'}>
          {list}
        </ul>
      </div>
      </div>
    );
  }
});

React.render(<TaipeiAttrations />,
  document.getElementById('contentBox'));
