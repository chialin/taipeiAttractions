'use strict';

import React from 'react';

module.exports = React.createClass({
  render: function(){
    return (
      <nav className={'navbar navbar-inverse navbar-fixed-top'}>
        <div className={'container'}>
          <a className={'navbar-brand'}>Taipei Attractions</a>
          <form className={'navbar-form navbar-right'} role="search">
            <div className={'form-group'}>
              <input type="text" className={'form-control'} placeholder="Search" />
            </div>
            <button type="submit" className={'btn btn-link glyphicon glyphicon-search'}></button>
          </form>
        </div>
      </nav>
    );
  }
});
