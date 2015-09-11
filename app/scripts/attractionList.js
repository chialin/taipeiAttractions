'use strict';

import React from 'react';

module.exports = React.createClass({
  render: function() {
    var attractions = this.props.data.map(function(attraction, index) {
      var imgs = /(http:.*?.jpg)/.exec(attraction.file) || [];
      var firstImg = imgs[0] || '';
      var content = {
        image: firstImg,
        title: attraction.stitle,
        des: attraction.xbody
      };
      return (
        <div className={'media'}>
          <div className={"media-left"}>
            <a>
              <img className={"media-object"} src={firstImg} 
                alt={attraction.title} style={{width: '200px', height: '200px'}}/>
            </a>
          </div>
          <div className={"media-body"}>
            <h4 className={"media-heading"}>{attraction.stitle}</h4>
            {attraction.xbody}
          </div>
        </div>
      );
    });
    return (
      <div>
        {attractions}
      </div>
    );
  }
});
