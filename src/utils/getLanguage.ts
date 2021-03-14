import inquirer from "inquirer"

const choisesForFramework = {
    "React": ["JavaScript", "TypeScript"],
    "Angular": ["TypeScript"],
    "Vue": ["JavaScript", "TypeScript"]
}
export const getLanguage = async (framework: "React" | "Vue" | "Angular"): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            const {language} = await inquirer.prompt([{
                message: "What language do you prefer to use?",
                type: "list",
                name: "language",
                choices: choisesForFramework[framework]
            }])
            resolve(language.toLowerCase())
        } catch(e) {
            reject("Error")
        }
    })
}