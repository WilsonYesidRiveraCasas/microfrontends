import { registerApplication, start } from "single-spa";
/*
 registerApplication({
   name: "@bbta/childapp",
   app: () => System.import("@bbta/childapp"),
   activeWhen: ["/"]
 });
*/
 registerApplication({
  name: "angular",
  app: () => System.import("angular"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
