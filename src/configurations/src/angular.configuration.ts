import { PackageJSONOptions } from "../../shared/interfaces/PackageJSON.options"
import { getLanguage } from "./utils/getLanguage"

export const angularConfiguration = async ({appName, appDescription}: PackageJSONOptions): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        const language = await getLanguage("Angular")
    })
}