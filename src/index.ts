#!/usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"
import { join } from "path"
import fs from "fs"
import { getLanguage } from "./shared/utils/getLanguage"
import { copySync } from "fs-extra"
import { paths } from "./shared/utils/paths"
import { exec, cd } from "shelljs"
import { Configuration } from "./shared/types/Configuration"

let root = join(__dirname, "..")
if (root.includes("node_modules")) {
    root = root.slice(0, root.indexOf("\\node_modules"))
}

inquirer.prompt([
    {
        type: "list",
        name: "framework-config",
        message: "What framework's configuration would you like to get?",
        choices: [
            chalk.white("Basic"),
            chalk.blue("React"), 
            chalk.green("Vue"), 
            chalk.red("Svelte"),
            // chalk.magenta("MoonJS"),
            // chalk.redBright("InfernoJS"),
            // chalk.cyan("PolymerJS"),
            // chalk.redBright("RiotJS"),
        ]
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
.then(async (answers: any) => {
    const framework: Configuration = answers["framework-config"]
    const appName: string = answers["app-name"]
    const appDescription: string = answers["app-description"]
    try {
        const language = await getLanguage(framework)
        if (language === "typescript") {
            const tsconfig = fs.readFileSync(join(paths[framework], "tsconfig.json"), "utf-8")
            fs.writeFileSync(`${root}/tsconfig.json`, tsconfig)
        }
        const packageJSON = JSON.parse(fs.readFileSync(join(paths[framework], `${language}.package.json`), "utf-8"))
        const webpackConfig = fs.readFileSync(join(paths[framework], `webpack.${language}.config.js`), "utf-8")
        packageJSON.name = appName
        packageJSON.description = appDescription
        
        fs.writeFileSync(`${root}/webpack.config.js`, webpackConfig)
        fs.writeFileSync(join(root, "package.json"), JSON.stringify(packageJSON, null, "   "))
        copySync(join(paths[framework], language), root)
        copySync(join(paths[framework], `public`), `${root}/public`)
        console.log(chalk.green("Installing a dependencies!"))
    } catch(e) {
        console.log(chalk.red("Sorry we have an error :(! Post an issue!: " + e))
    }
})