import ValuesController from "./Controllers/ValuesController.js";
import VenderController from "./Controllers/VendingController.js";

class App {
  valuesController = new ValuesController();
  venderController = new VenderController()

}

window["app"] = new App();
