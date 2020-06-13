set up webpack to compile application:
 create package.json file by installing npm from https://docs.npmjs.com/cli/init:
 npm init --yes

 install web pack from https://www.npmjs.com/package/webpack
 npm install --save-dev webpack

 add file ".gitignore" and add npm_modules as content to this file so that npm_modules is grayed out and npm_modules will not be pushed to github and will not index it.
 
 install web pack cli from https://www.npmjs.com/package/webpack-cli
 npm install --save-dev webpack-cli
 
 install web pack dev server from https://www.npmjs.com/package/webpack-dev-server
 npm install webpack-dev-server --save-dev

 install babel core to compile jsx and es6 to js from https://www.npmjs.com/package/@babel/core
 npm install --save-dev @babel/core
 
 install babel node from https://www.npmjs.com/package/@babel/node
 npm install --save-dev @babel/node
 
 install babel preset-env from https://www.npmjs.com/package/@babel/preset-env
 npm install --save-dev @babel/preset-env

 install babel preset-react from https://www.npmjs.com/package/@babel/preset-react
 npm install --save-dev @babel/preset-react

 install babel register from https://www.npmjs.com/package/@babel/register
 npm install --save-dev @babel/register
 
 install babel loader from https://www.npmjs.com/package/babel-loader
 npm install -D babel-loader @babel/core @babel/preset-env webpack


 add .babelrc file to define how webpack will be handle.
 
 add webpack.config.js file to define how webpack will bundle.


