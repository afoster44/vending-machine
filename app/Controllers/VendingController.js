import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function _draw() {
    let quartersElem = document.getElementById("total-quarters");
    quartersElem.innerText = ProxyState.totalQuarters.toString()

    let mtdElem = document.getElementById('mountain-dew')
    mtdElem.innerHTML = `<p>${ProxyState.mountainDew.name} ${ProxyState.mountainDew.price}</p>`

    let purchasedElem = document.getElementById('items-purchased')
    purchasedElem.innerHTML = `
    <p>${ProxyState.itemSelected}</p>`

    let cokeElem = document.getElementById('coke')
    cokeElem.innerHTML = `<p>${ProxyState.coke.name} ${ProxyState.coke.price}</p>`

    let pepsiElem = document.getElementById('pepsi')
    pepsiElem.innerHTML = `<p>${ProxyState.pepsi.name} ${ProxyState.pepsi.price}</p>`
}

export default class VenderController {
    constructor() {
        console.log('Hello from the Vending Controller');
        //this only works because of how we have our quarter function set up in our VendingService.js file
        ProxyState.on("totalQuarters", _draw)
        _draw()
    }
    quarter() {
        vendingService.quarter()
        console.log('Quarter from the Vending Controller')
    }

    buyMountainDew() {
        vendingService.buyMountainDew()
        console.log("Mountain Dew bought from vending controller");
        _draw();
    }

    buyCoke() {
        vendingService.buyCoke()
        console.log("Coke bought from vending controller")
        _draw();
    }

    buyPepsi() {
        vendingService.buyPepsi()
        console.log("Pepsi bought from vending controller")
        _draw()
    }

    refund() {
        vendingService.refund()
        console.log("Refund from vending controller")
    }

}