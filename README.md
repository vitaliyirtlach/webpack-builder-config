<div align="center">
    <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png"/>
</div>

<h1 align="center">📦 Webpack Builder Config </h1>

##### Post an issue if you have a problem with package
## Supporting frameworks
- <h4>Basic setup</h4> 
- <h4>React</h4>
- <h4>Vue</h4>
- <h4>Svelte</h4>

## What can do this module?
Webpack Builder Config can create webpack configuration for modern web technologies


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

<div align="center">
  <img width="300px" style="margin: 10px;" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" />
</div>


<h4> The module will create for you the following structure of your project</h4>
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


<div style="display: flex; align-items: center;">
  <h3 style="margin-left: 10px;">TypeScript support</h3>
</div>

#### Your tsconfig.json should has following configuration
<pre>
{
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react",
    "allowJs": true,
    "strict": true,
    "rootDir": "./",
    "outDir": "build",
    "declaration": true,
    "experimentalDecorators": true,
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "module": "commonjs",
    "target": "ES5"
  }
}
</pre>
#### Run an application
```bash
    npm start # browse a http://localhost:3000
    npm run build # build a production
```

<div align="center">
  <img width="300px" style="margin: 10px;" src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" />
</div>
<h4> The module will create for you the following structure of your project</h4>

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

<div style="display: flex; align-items: center;">
  <h3 style="margin-left: 10px;">TypeScript support</h3>
</div>

#### Your tsconfig.json should has following configuration
<pre>
{
    "compilerOptions": {
      "lib": [
        "dom",
        "es5",
        "es2015",
        "es2015.promise"
      ],
      "module": "esnext",
      "moduleResolution": "node",
      "target": "es5",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "allowSyntheticDefaultImports": true
    }
}
</pre>

#### Run an application
```bash
    npm run serve # browse a http://localhost:8080
    npm run build # build a production
```

<div align="center">
  <img width="400px" style="margin: 10px;" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*aPt-RYrtxhICvNCaBl37kw.png" />
</div>

<h4> The module will create for you the following structure of your project</h4>
<pre>
  /root
    /public
      /assets
      favicon.png
    /src
      main.js
      App.svelte
      global.css
  webpack.config.js
</pre>

#### Your tsconfig.json should has following configuration
<pre>
{
    "extends": "@tsconfig/svelte/tsconfig.json",
    "include": ["src/**/*"],
    "exclude": ["node_modules/*", "build/*"]
}
</pre>

#### Run an application
```bash
    npm run dev # browse a http://localhost:5000
    npm run build # build a production
```

<!-- <h3>⚠️No support at this time! Wait a little more</h3> -->
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
