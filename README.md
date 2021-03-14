# 📦 Webpack Builder Config for web frameworks

⚠️ This module in development mode (if you have bug you can post a issue)
## Supporting frameworks 
- <h4>React</h4>


## What can do this module?
    Webpack Builder Config can create webpack configuration for modern web frameworks like React (soon: Vue, Angular, Svelte and other). 
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

<div style="display: flex; align-items: center;">
  <h3 style="margin-left: 10px;">TypeScript support</h3>
</div>

```bash
    # create a tsconfig.json file
    tsc --init
```
Add following code to your tsconfig.json
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
<div style="display: flex; align-items: center;">
  <h2 style="margin-left: 10px;">Vue (soon)</h2>
</div>


<div style="display: flex; align-items: center;">
  <h2 style="margin-left: 10px;">Svelte (soon)</h2>
</div>


## Our team 
- vitaliyirtlach <https://github.com/vitaliyirtlach>
- kirillirtlach   

🔎 You can join our team. Contact with me:
    
- Instagram: https://www.instagram.com/w13vitaliy/
- Discord:-vitaliyirtlach#8948 