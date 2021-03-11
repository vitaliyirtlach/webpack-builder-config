import { Language, Styles } from "../types/Params";
import { PackageJSONOptions } from "./PackageJSON.options";

export interface Configurations {
    [key: string]: (language: Language, styles: Styles, packageJSONOptions: PackageJSONOptions) => void
}