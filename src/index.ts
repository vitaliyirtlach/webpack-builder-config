#!/usr/bin/env node
import fs from "fs"
import inquirer from "inquirer"
import { join } from "path"
import { echo, exec } from "shelljs"

const runningPath = join(__dirname, "..")
const version = exec('node --version', {silent:true})

let root = __dirname // join(__dirname, "..")
if (runningPath.includes("node_modules")) {
    root = runningPath.slice(0, runningPath.indexOf("\\node_modules"))
}
inquirer.prompt([
    {
        type: "list",
        name: "framework-config",
        message: "What framework's configuration would you like to get?",
        choices: ["React"]
    }, 
    {
        type: "input",
        message: "Application name",
        name: "app-name"
    },
    {
        message: "Application description",
        name: "app-description"
    }
])
.then(answers => {
    const framework = answers["framework-config"].toLowerCase()
    const appName = answers["app-name"]
    const appDescription = answers["app-description"]
    const packageJSON = JSON.parse(fs.readFileSync(join(__dirname, `packages/${framework}.package.json`), 'utf8'))
    const webpackConfig = fs.readFileSync(join(__dirname, `configs/${framework}.webpack.config.js`), 'utf8')
    packageJSON.name = appName
    packageJSON.description = appDescription
    
    fs.writeFileSync(join(root, "package.json"), JSON.stringify(packageJSON, null, "  "))
    fs.writeFileSync(join(root, "webpack.config.js"), webpackConfig)
    
    echo('Installing a dependencies')
    echo(`Node version: ${version}`)
})