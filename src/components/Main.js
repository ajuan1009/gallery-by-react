require('normalize.css/normalize.css');
require('styles/App.css');
// 引入数据使用require
var dataImages = require('../data/data.json');
import React from 'react';
// 使用自执行函数的形式生成图片的url
dataImages = (function genImageUrl(dataImagesArr){
	for(var i=0;i<dataImagesArr.length;i++){
		var singleImageData = dataImagesArr[i];
		singleImageData.imageUrl =  require('../images/'+singleImageData.fileName);
		dataImagesArr[i] = singleImageData;
	}
	return dataImagesArr;
})(dataImages);


class AppComponent extends React.Component {
  render() {
    return (
      <section  className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
