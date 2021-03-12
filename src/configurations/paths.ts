import { join } from "path"
import { Paths } from "../shared/interfaces/Paths"

const pathToTheProjectsFolder = join(__dirname, "..", "..", "projects")

export const paths: Paths = {
    react: join(pathToTheProjectsFolder, "react")
}