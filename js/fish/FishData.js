/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

//Export the fishCollection array 
export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = [];

    for (const holyFishCount of fishCollection) {
        if (holyFishCount.length % 3 == 0){
            holyFishArray.push(holyFishCount);
        }
    }

    return holyFishArray;
}

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiersArray = [];

    for (const soldierFishCount of fishCollection){
        if (soldierFishCount.length % 5 == 0){
            soldiersArray.push(soldierFishCount)
        }
    }

    return soldiersArray
}

export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyArray = [];

    for( const unworthyFishCount of fishCollection) {
        if(unworthyFishCount.length % 3 != 0 && unworthyFishCount.length % 5 != 0){
            unworthyArray.push(unworthyFishCount);
            
        }
    }

    return unworthyArray
}

//declare fishCollection array and populate with fish objects
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        image: "yellowbluefish.jpeg",
        species: "Trigger",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Mr Freeze",
        food: "Meal Worms",
        image: "orangefish.jpeg",
        species: "Tang",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Florida"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "dopeyfish.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "pinkfish.jpeg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },
    {
        name: "Marlin",
        food: "Mealworms",
        image: "crazy-fish.jpeg",
        species: "clownfish",
        length: 4,
        waterType: "Salt",
        harvestLocation: "Bahamas"
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "cat.jpg",
        species: "Cat",
        length: 20,
        waterType: "Milk",
        harvestLocation: "Sydney"
    },
    {
        name: "doctor fish",
        food: "biofilm ",
        image: "purplefish.jpeg",
        species: "Tinca tinca",
        length: 3.9,
        waterType: "Fresh",
        harvestLocation: "Massachusetts"
        
    },
    {
        name: "Three-Eyed Fish",
        food: "worms",
        image: "Gold.jpg",
        species: "Fictional",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Ohio"

    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "orangefish.jpeg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Don Julio",
        food: "snails",
        image: "blobfish.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"

    },
    {
        name: "Blob Marley",
        food: "mollusks",
        image: "bluefish.jpg",
        species: "Blobfish",
        length: 8,
        waterType: "Salt",
        harvestLocation: "Australia"
    },
    {
        name: "Jeff",
        food: "Forage Fish",
        image: "dopeyfish.jpg",
        species: "Bluefish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Australia"
    }

]