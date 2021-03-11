#!/usr/bin/env node
import fs from "fs"
import inquirer from "inquirer"
import { join } from "path"
import { echo, exec } from "shelljs"
import {copySync} from "fs-extra"
import { configurations } from "./configurations"
const version = exec('node --version', {silent:true})
let root = join(__dirname, "..")
if (root.includes("node_modules")) {
    root = root.slice(0, root.indexOf("\\node_modules"))
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
    },
    {
        message: "What language do you prefer to use?",
        type: "list",
        choices: ["JavaScript", "TypeScript"]
    }
])
.then(answers => {
    const framework: string = answers["framework-config"].toLowerCase()
    const appName: string = answers["app-name"]
    const appDescription: string = answers["app-description"]
    // const packageJSON = JSON.parse(fs.readFileSync(join(__dirname, "..", `projects/${framework}/package.json`), 'utf8'))
    if (framework in configurations) {
        configurations[framework]()
    }
    copySync(join(__dirname, "..", "projects", framework), root)
    echo('Installing a dependencies')
    echo(`Node version: ${version}`)
    exec(`cd "${root}" && npm install`)
})

export {root}