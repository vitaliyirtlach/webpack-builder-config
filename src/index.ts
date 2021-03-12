#!/usr/bin/env node
import inquirer from "inquirer"
import { join } from "path"
import { configurations } from "./configurations"

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
        name: "language",
        choices: ["JavaScript", "TypeScript"]
    }
])
.then((answers: any) => {
    const framework: string = answers["framework-config"].toLowerCase()
    const appName: string = answers["app-name"]
    const appDescription: string = answers["app-description"]
    const language: string = answers["language"].toLowerCase()
    const configJSON = {
        appName,
        appDescription
    }
    if (framework in configurations) {
        configurations[framework](language, ["css"], configJSON)
    }
    console.log("Install a dependencies!")
})

export {root}