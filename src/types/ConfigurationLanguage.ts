import { Configuration } from "./Configuration";

export type ConfigurationLanguage = {
    [Property in Configuration]: Array<string>
} 