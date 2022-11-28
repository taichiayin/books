# Unnotech Frontend Engineer - Books

## Environment version
node v14.15.0 <br>
npm 6.14.8

### Project setup
```
npm install
```
### Development
```
npm run serve
```

## File structure
```
|--src
  |--api             // api request
  |--assets          // svgs, imgs
  |--components      
    |--header         // 共用Header
    |--Button         // 共用Button
    |--EnsureImage    // 處理圖片不存在，採用預設圖
    |--SvgIcon        // Svg元件，傳入svg檔名即可
  |--route           // 路由
  |--utils           
    |--http           // axios實例、攔截器等
  |--views
    |--books          // 書本列表
    |--bookDetail     // 書本詳情、編輯、新增共用，透過變數optMode來控制
|--vue.config.js      // svg處理使用svg-sprite-loader套件
|--package.json
|--jsconfig.json
|--babel.config.js
```
## Third Party Lib

* Axios <br>
  處理Http請求，並回傳Promise物件，可以搭配ES7的async、await，輕鬆達到非同步的效果．
* svg-sprite-loader <br>
  處理svg，會將style、fill、class移除，不管是html還是css有更好操控
  需要在vue.config.js重新定義對svg的處理

## 心得
本次專案使用電腦手機UI相同，之前的專案都是AWD，如使用UI套件會增開發、學習成本，所以改採用手刻來盡力滿足UI上的需求