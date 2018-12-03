# Webpack4 Example

> - 使用 ESLint 檢查程式  
> - 使用 React.js 框架
> - 使用 DevExtreme 控制元件
> - 使用 ES6 語法
> - 使用 Sass, PostCSS 編譯與補全樣式  
> - 使用 Webpack4 開發與打包  

## Build Setup
```
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build
```

## Packages introduction
#### Babel 
根據自己需求將必要的資源安裝載入
* [babel-preset-env](https://www.babeljs.cn/docs/plugins/preset-env/)：轉譯語法為當前設定的瀏覽器可用。
* [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)：轉譯 react、JSX（設定 .babelrc）。
* [babel-loader](https://github.com/babel/babel-loader)：webpack  模組化用。
* [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core)：在程式中透過 API 進行轉譯（babel-loader 需要）。

#### Webpack 
* [webpack](https://www.npmjs.com/package/webpack)：前端資源打包模組。
* [webpack-cli ](https://www.npmjs.com/package/webpack-cli)：webpack 需要。
* [webpack-dev-server ](https://www.npmjs.com/package/webpack-dev-server)：node server。
	* hot 功能記得在 plugins 加入 webpack.HotModuleReplacementPlugin。
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)：生成頁面，以及控制頁面注入的資源。
* [plugin-proposal-class-properties ](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)：透過箭頭函數將 this 綁定，需要babel-core 7.0.0 才能用。
（前身為 [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)）

#### React
* [react ](https://www.npmjs.com/package/react)：這不用解釋了。
* [react-dom ](https://www.npmjs.com/package/react-dom)：負責把 DOM render 到畫面上。

#### Style
* [style-loader ](https://www.npmjs.com/package/style-loader)：將樣式注入至頁面上<style></style>中。
* [css-loader ](https://www.npmjs.com/package/css-loader)：轉譯 CSS 至 JS
* [postcss-loader ](https://www.npmjs.com/package/postcss-loader)：透過 JS 轉換 CSS，可以安裝自己想轉換的套件。
* [autoprefixer ](https://www.npmjs.com/package/autoprefixer)：postcss 套件，將樣式補上跨瀏覽器語法。
* [sass-loader ](https://www.npmjs.com/package/sass-loader)：透過 node-sass 轉譯 SASS 至 CSS。
* [node-sass ](https://www.npmjs.com/package/node-sass)：sass-loader 需要。
* [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)：抽離 style 檔案（當前不支援 webpack4，但是安裝 @next 版本可解決）。
* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)：取代 extract-text-webpack-plugin 但是他和 style-loader 衝突，要放棄使用 style-loader。

#### Static Resource
* [url-loader ](https://www.npmjs.com/package/url-loader)：將靜態資源載入，視檔案大小可以轉為 Base64。
* [file-loader](https://www.npmjs.com/package/file-loader)：將靜態資源載入，導出為檔案。

#### ESLint
* [eslint](https://www.npmjs.com/package/eslint)：(>=6.14), npm version 3+，JS 檢查工具。
* [eslint-loader](https://github.com/webpack-contrib/eslint-loader)：webpack loader。
* [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)：babel 檢查工具。
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)：react 檢查工具。