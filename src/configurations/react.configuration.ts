import { PackageJSONOptions } from "../shared/interfaces/PackageJSON.options"
import { Language, Styles } from "../shared/types/Params"
import {root} from "../index"
import { join } from "path"
import fs from 'fs'
import {copySync} from "fs-extra"
import { paths } from "./paths"

export const reactConfiguration = (language: Language, styles: Array<Styles>, {appName, appDescription}: PackageJSONOptions) => {
    const webpackFileName = `webpack.config.${language === "javascript" ? "js" : "ts"}`
    const packageJSON = JSON.parse(fs.readFileSync(join(paths.react, `${language}.package.json`),"utf-8"))
    const webpackConfig = fs.readFileSync(join(paths.react, webpackFileName), "utf-8")
    packageJSON.name = appName
    packageJSON.description = appDescription

    copySync(join(paths.react, language), root)
    copySync(join(paths.react, `public`), `${root}/public`)
    fs.writeFileSync(`${root}/${webpackFileName}`, webpackConfig)
    fs.writeFileSync(join(root, "package.json"), JSON.stringify(packageJSON, null, "   "))
}