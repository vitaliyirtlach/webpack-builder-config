import { PackageJSONOptions } from "../../shared/interfaces/PackageJSON.options"
import {root} from "../../index"
import { join } from "path"
import fs from 'fs'
import {copySync} from "fs-extra"
import { paths } from "../paths"
import { getLanguage } from "./utils/getLanguage"

export const reactConfiguration = async ({appName, appDescription}: PackageJSONOptions): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const language = await getLanguage("React")
            
            const webpackFileName = `webpack.${language}.config.js`
            const packageJSON = JSON.parse(fs.readFileSync(join(paths.react, `${language}.package.json`),"utf-8"))
            const webpackConfig = fs.readFileSync(join(paths.react, webpackFileName), "utf-8")
    
            packageJSON.name = appName
            packageJSON.description = appDescription
            
            copySync(join(paths.react, language), root)
            copySync(join(paths.react, `public`), `${root}/public`)
            fs.writeFileSync(`${root}/webpack.config.js`, webpackConfig)
            fs.writeFileSync(join(root, "package.json"), JSON.stringify(packageJSON, null, "   "))
            resolve()
        } catch(e) {
            reject(e)
        }
    })
}