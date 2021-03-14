import { join } from "path"

const pathToTheProjectsFolder = join(__dirname, "..", "..", "projects")

export const paths = {
    React: join(pathToTheProjectsFolder, "react"),
    Svelte: join(pathToTheProjectsFolder, "svelte"),
    Vue: join(pathToTheProjectsFolder, "vue"),
    Angular: join(pathToTheProjectsFolder, "angular")
}

