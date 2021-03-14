<div align="center">
    <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png"/>
</div>

<h1 align="center">📦 Webpack Builder Config for web frameworks</h1>

⚠️ This module in development mode (if you have bug you can post a issue)
## Supporting frameworks 
- <h4>React</h4>
- <h4>Vue</h4>


## What can do this module?
Webpack Builder Config can create webpack configuration for modern web frameworks like React, Vue (soon: other). 
## Create an application
```bash 
    # nodejs basic setup
    npm init -y 
    # install this module
    npm install webpack-builder-config
    # run a module
    npx build-config
    # install dependencies
    npm install
```

<div style="display: flex; align-items: center;">
    <h3>React</h3>
</div>

<pre>
/my-app
    /node_modules
    /public
        index.html
        /assets
            favicon.png
    /src
        index.jsx
        index.css
        App.jsx
    webpack.config.js
</pre>

#### Run an application
```bash
    npm start # browse a http://localhost:3000
    npm run build # build a production
```

<div style="display: flex; align-items: center;">
  <h2 style="margin-left: 10px;">Vue</h2>
</div>
<pre>
/my-app
    /node_modules
    /public
        index.html
        /assets
            favicon.png
    /src
        index.js
        App.vue
    webpack.config.js
</pre>

#### Run an application
```bash
    npm run serve # browse a http://localhost:8080
    npm run build # build a production
```

<div style="display: flex; align-items: center;">
  <h2 style="margin-left: 10px;">Svelte (soon)</h2>
</div>


## Contributors

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/63682036?s=460&u=65b19ba0b3c73fc67bb440c7f0198f61b85268b7&v=4" width="100px;" height="100px;"/><br /><sub><b>Vitaliy Irtlach</b></sub>
      <br />💻
    </td>
    <td align="center">
      <img src="https://sun9-48.userapi.com/impf/F3M2uK8mZbXYP2LiJYuofhMY4Dc_eFfbeQgV0A/-AQH1-OdFH4.jpg?size=377x436&quality=96&proxy=1&sign=75488ae3b1ce2bda4c4c51cbe9eb21f5&c_uniq_tag=F7XcZe8j4Q1uGF4vBqTtziNM4cRJe7ysXrGh66xUPl0&type=album" width="100px;" height="100px;"/><br /><sub><b>Kirill Irtlach</b></sub>
      <br />📖 	
    </td>
    
    
  </tr>
</table>
