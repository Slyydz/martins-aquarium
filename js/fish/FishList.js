/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { Fish } from "./Fish.js";
import { getFish } from "./FishData.js"
import { locationList } from "../location/locationList.js";
import { getTips } from "../tips/tips.js";
import { tipsList } from "../tips/tipsList.js";

import { getMostHolyFish } from "./FishData.js";
import { getSoldierFish } from "./FishData.js";
import { getUnworthy } from "./FishData.js";

export const FishList = () => {

    /** Define the steps that need to be taken
     1. Get the array of Fish
    2. Get a reference to the location on the DOM where you want to display the list of fish
    3. Declare a variable to hold on to generated fish HTML representations
    4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
    5. Finally set the dom equal to the variable containing the fish html representations
    **/

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList");
    const contentElementLoc = document.querySelector(".locationList");
    const contentElementTips = document.querySelector(".tips-ul");

    const fishes = getFish();
    const tips = getTips();
    const holyFish = getMostHolyFish();
    const soldierFish = getSoldierFish();
    const unworthyFish = getUnworthy();

    let holyFishRep = "";
    let soldierFishRep = "";
    let unworthyFishRep = "";
    let locationRep = "";
    let tipsRep = "";

    
    holyFish.forEach(onefromHoly => {
        holyFishRep += Fish(onefromHoly);
    })

    soldierFish.forEach(onefromSoldier => {
        soldierFishRep += Fish(onefromSoldier);
    })
    
    unworthyFish.forEach(onefromUnworthy => {
        unworthyFishRep += Fish(onefromUnworthy);
    })

    fishes.forEach(oneFromSeaLoc => {
        locationRep += locationList(oneFromSeaLoc);
    })

    tips.forEach(oneTips => {
        tipsRep += tipsList(oneTips);
    })

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `${holyFishRep}`

    contentElement.innerHTML += `${soldierFishRep}`

    contentElement.innerHTML += `${unworthyFishRep}`

    contentElementLoc.innerHTML += `${locationRep}`;

    contentElementTips.innerHTML = `${tipsRep}`


}