import * as components from "./components/index";
import { App } from "vue";

const plugin = {
  install(app: App<Element>) {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

export default plugin;
export * from "./components/index";
