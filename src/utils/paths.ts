import { join } from "path"

const pathToTheProjectsFolder = join(__dirname, "..", "..", "projects")

export const paths = {
    React: join(pathToTheProjectsFolder, "react"),
    Angular: join(pathToTheProjectsFolder, "angular"),
    Vue: join(pathToTheProjectsFolder, "vue")
}

