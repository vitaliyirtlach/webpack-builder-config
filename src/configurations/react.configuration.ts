import { PackageJSONOptions } from "../shared/interfaces/PackageJSON.options"
import { Language, Styles } from "../shared/types/Params"
import {root} from "../index"

export const reactConfiguration = (language: Language, styles: Styles, packageJSONOptions: PackageJSONOptions) => {
    let packageJSON = null
    let webpackConfig = null
    switch(language) {
        case "javascript":

    }
    // packageJSON.name = appName
    // packageJSON.description = appDescription
}