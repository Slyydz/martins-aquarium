/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Fish = (fishObj) => {
	return `<article class="fish-card">
				<div><img class="fish-image" src="images/${fishObj.image}" /></div>
				<h3 class="fish-name">${fishObj.name}</h3>
				<ul>
					<li class="fish-details">${fishObj.species}</li>
					<li class="fish-details">Length: ${fishObj.length} inches</li>
					<li class="fish-details">Found: ${fishObj.harvestLocation}</li>
					<li class="fish-details">Diet: ${fishObj.food}</li>
                    <li class="fish-details">Water Type: ${fishObj.waterType}</li>
				</ul>
        	</article>`
}