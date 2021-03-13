import { join } from "path"
import { Paths } from "../shared/interfaces/Paths"

const pathToTheProjectsFolder = join(__dirname, "..", "..", "projects")

export const paths: Paths = {
    react: join(pathToTheProjectsFolder, "react"),
    angular: join(pathToTheProjectsFolder, "angular"),
    vue: join(pathToTheProjectsFolder, "vue")
}