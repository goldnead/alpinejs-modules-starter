import Alpine from "alpinejs";

import App from "./App";

import * as ExampleComponent from "../components/ExampleComponent";

import "../scss/index.scss";

window.App = App;

Alpine.magic("trans", () => (string, args) => {
  return App.translate(string, args);
});

// Bind Alpine to App
App.mount(Alpine)
  // Register Plugins
  // .usePlugins([persist, intersect, Parent, collapse, Clipboard])
  // Register Components
  .register([
    
  ])
  .ready(() => {
    // do stuff when DOM is ready
  })
  // Start App
  .start();
