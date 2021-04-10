import { join } from "path"
import { Paths } from "../types/Paths"

const pathToTheProjectsFolder = join(__dirname, "..", "..", "..", "projects")

export const paths: Paths = {
    React: join(pathToTheProjectsFolder, "react"),
    Svelte: join(pathToTheProjectsFolder, "svelte"),
    Vue: join(pathToTheProjectsFolder, "vue"),
    Basic: join(pathToTheProjectsFolder, "basic"),
    InfernoJS: join(pathToTheProjectsFolder, "infernojs"),
    RiotJS: join(pathToTheProjectsFolder, "riotjs"),
    PolymerJS: join(pathToTheProjectsFolder, "polymerjs")
}

