import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@bbta/nav",
  app: () => System.import("@bbta/nav"),
  activeWhen: ["/"],
  customProps: {
    domElement: document.getElementById('nav-container')
  }
});

registerApplication({
  name: "@bbta/page1",
  app: () => System.import("@bbta/page1"),
  activeWhen: ["/page1"],
  customProps: { domElement: document.getElementById('page-1-container') }
});

registerApplication({
  name: "@bbta/page2",
  app: () => System.import("@bbta/page2"),
  activeWhen: ["/page2"],
  customProps: { domElement: document.getElementById('page-2-container') }
});

start();
