import { Configurations } from "../shared/interfaces/Configurations";
import { angularConfiguration } from "./src/angular.configuration";
import { reactConfiguration } from "./src/react.configuration";
import { vueConfiguration } from "./src/vue.configuration";

export const configurations: Configurations = {
    react: reactConfiguration,
    angular: angularConfiguration,
    vue: vueConfiguration
}