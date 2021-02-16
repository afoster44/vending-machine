import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  itemSelected = ["Nothing Yet!"]
  totalQuarters = 0
  coke = {
    name: "Coke",
    price: 1.50
  }
  pepsi = {
    name: "Pepsi",
    price: 1.50
  }
  mountainDew = {
    name: "Mountain Dew",
    price: 1.50,
    picture: "https://static.onecms.io/wp-content/uploads/sites/43/2019/12/mountain-dew-cans-2000.png"
  }
  chips = {
    name: "Potato Chips",
    price: 2.00
  }
  cookies = {
    name: "Chips Ahoy Cookies",
    price: 2.00
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
