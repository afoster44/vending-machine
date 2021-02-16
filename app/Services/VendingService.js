import { ProxyState } from "../AppState.js";


class VendingService {
    constructor() {
        console.log('Hello from the Vending Service')
    }

    quarter() {
        console.log('Quarter from the Vending Service');
        //this is where we allow our ProxyState.on() to work in our VendingController to _draw() whenever someone adds a quarter
        let tempQuarters = ProxyState.totalQuarters
        tempQuarters += .25
        ProxyState.totalQuarters = tempQuarters
        console.log(tempQuarters)
    }
    buyMountainDew() {
        if (ProxyState.totalQuarters >= ProxyState.mountainDew.price) {
            ProxyState.itemSelected = ProxyState.mountainDew.name + ' $' + ProxyState.mountainDew.price
            ProxyState.totalQuarters -= ProxyState.mountainDew.price
            console.log(ProxyState.totalQuarters, ProxyState.itemSelected);
        }
    }

    buyCoke() {
        if (ProxyState.totalQuarters >= ProxyState.coke.price) {
            ProxyState.itemSelected = ProxyState.coke.name + ' $' + ProxyState.coke.price
            ProxyState.totalQuarters -= ProxyState.coke.price
            console.log(ProxyState.totalQuarters, ProxyState.itemSelected);
        }
    }

    buyPepsi() {
        if (ProxyState.totalQuarters >= ProxyState.pepsi.price) {
            ProxyState.itemSelected = ProxyState.pepsi.name + ' $' + ProxyState.pepsi.price
            ProxyState.totalQuarters -= ProxyState.pepsi.price
            console.log(ProxyState.totalQuarters, ProxyState.itemSelected);
        }
    }

    refund() {
        ProxyState.totalQuarters = 0
        console.log("Refund giving from the vending service");
    }
}


export const vendingService = new VendingService()