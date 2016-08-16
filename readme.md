# DustDevil
Experimental Webpack version of superCell used for standalone SPA.  Development using webpack-dev-server.

<a href="https://david-dm.org/joellongie/dustDevil">
  <img src="https://david-dm.org/joellongie/dustDevil/status.svg" alt="deps status"/>
</a>&nbsp;
<a href="https://david-dm.org/joellongie/dustDevil#info=devDependencies">
  <img src="https://david-dm.org/joellongie/dustDevil/dev-status.svg" alt="dev deps status"/>
</a>

## Run DustDevil
- <code>npm install</code> to install dependencies.
- <code>npm start</code> to start in development mode, sourcemaps enabled.
- <code>npm run build</code> creates minified bundle.js and styles.css in /public folder for deployment.

## Todo
- create production pipeline to huroki / digital ocean
- cross env package for windows
- add striploader to remove console.logs?
- refactor enviormental conditionals
- inline images?

## Further research
- [Webpack Dev Server API (config)](https://webpack.github.io/docs/webpack-dev-server.html#api)
- [CSS Source maps](https://github.com/jtangelder/sass-loader#source-maps)
- [SASS-loader](https://github.com/jtangelder/sass-loader#source-maps)
- [Webpack UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
- [Webpack Built in Modules](http://webpack.github.io/docs/list-of-plugins.html)
- [Webpack Built in Modules 2](https://github.com/webpack/docs/wiki/list-of-plugins)
- [Passing environment-dependent variables in webpack](http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack)
- [cross env package for windows](https://www.npmjs.com/package/cross-env) and [stack overflow](http://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-in-windows)
- [webpack-dev-server historyApiFallback: true](https://github.com/reactjs/react-router/issues/676)
- [webpack cli options](https://webpack.github.io/docs/cli.html)
- [custom bash color for console.log](https://help.ubuntu.com/community/CustomizingBashPrompt)
- [Webpack optimization](https://github.com/webpack/docs/wiki/optimization)
