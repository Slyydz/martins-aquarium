/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { Fish } from "./fish.js";
import { getFish } from "./FishData.js"

export const FishList = () => {

    /** Define the steps that need to be taken
     1. Get the array of Fish
    2. Get a reference to the location on the DOM where you want to display the list of fish
    3. Declare a variable to hold on to generated fish HTML representations
    4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
    5. Finally set the dom equal to the variable containing the fish html representations
    **/

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")

    const fishes = getFish()

    let fishHTMLRep = "";

    for(const onefromSea of fishes){
        fishHTMLRep += Fish(onefromSea)
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRep}
    `
}