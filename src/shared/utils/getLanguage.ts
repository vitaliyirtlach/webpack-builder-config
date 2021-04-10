import inquirer from "inquirer"
import { Configuration } from "../types/Configuration"
import { configurationLanguage } from "./ConfigurationLanguage"


export const getLanguage = async (configuration: Configuration): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const {language} = await inquirer.prompt([{
                message: "What language do you prefer to use?",
                type: "list",
                name: "language",
                choices: configurationLanguage[configuration]
            }])
            resolve(language.toLowerCase())
        } catch(e) {
            reject(e)
        }
    })
}