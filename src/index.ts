#!/usr/bin/env node
import chalk from "chalk"
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
        choices: ["React", "Vue", "Angular"]
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
.then((answers: any) => {
    const framework: string = answers["framework-config"].toLowerCase()
    const appName: string = answers["app-name"]
    const appDescription: string = answers["app-description"]
    const configJSON = {
        appName,
        appDescription
    }
    if (framework in configurations) {
        configurations[framework](configJSON)
        .then(() => console.log(chalk.green("Install a dependencies!")))
        .catch(() => console.log(chalk.red("Sorry we have an error :(! Post an issue!")))
    }
})

export {root}