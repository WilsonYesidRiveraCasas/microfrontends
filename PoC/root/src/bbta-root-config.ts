import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@bbta/nav", //nombre con el que será montado el microfrontend
  app: () => System.import("@bbta/nav"), //aplicación a importar desde el objecto imports que definimos en el index.ejs
  activeWhen: ["/"], //path a través del cual se activará el microfrontend.
  customProps: {
    domElement: document.getElementById('nav-container') //elemento del DOM donde se monstará
  }
});

registerApplication({
  name: "@bbta/registrar",
  app: () => System.import("@bbta/registrar"),
  activeWhen: ["/registrar"],
  customProps: {
    domElement: document.getElementById('registrar-page') //elemento del DOM donde se monstará
  }
});

registerApplication({
  name: "@bbta/consultar",
  app: () => System.import("@bbta/consultar"),
  activeWhen: ["/consultar"],
  customProps: {
    domElement: document.getElementById('consultar-page') //elemento del DOM donde se monstará
  }
});

start();
