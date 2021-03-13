import { PackageJSONOptions } from "./PackageJSON.options";

export interface Configurations {
    [key: string]: (packageJSONOptions: PackageJSONOptions) => Promise<void>
}