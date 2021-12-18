let categorie;

let categoriekeuze = () => {
	const radio = document.querySelectorAll(".js-radio");
	const grid = document.querySelector(".grids");
	radio.forEach((element) => {
		element.addEventListener("change", function () {
			console.log(this.getAttribute("data-type"));
			categorie = this.getAttribute("data-type");
			grid.innerHTML = ``;
			getAPI();
		});
	});
};
let getAPI = async () => {
	// Eerst bouwen we onze url op
	let key = "09973560d06744a0afca860418a70227";
	url = `https://api.spoonacular.com/recipes/random?number=7&tags=${categorie},main course&apiKey=${key}`;

	console.log(url);

	//   Met de fetch API proberen we de data op te halen.
	const request = await fetch(`${url}`);
	const reusult = await request.json();
	console.log(reusult);
	//console.log(reusult.recipes.image);
	showresults(reusult);
	barhcart(reusult);
	let id1,id2,id3,id4,id5,id6,id7;
	
	id1 = reusult.recipes[0].id;
	id2 = reusult.recipes[1].id;
	id3 = reusult.recipes[2].id;
	id4 = reusult.recipes[3].id;
	id5 = reusult.recipes[4].id;
	id6 = reusult.recipes[5].id;
	id7 = reusult.recipes[6].id;

	url2 = `https://api.spoonacular.com/recipes/informationBulk?ids=${id1},${id2},${id3},${id4},${id5},${id6},${id6}&includeNutrition=true&apiKey=${key}`
	const request2 = await fetch(`${url2}`);
	const reusult2 = await request2.json();
	console.log(reusult2);
	barhcart(reusult2)

	console.log(reusult2[0].nutrition.nutrients[0].amount)
	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: [reusult2[0].title, reusult2[1].title,reusult2[2].title,reusult2[3].title,reusult2[4].title,reusult2[5].title,reusult2[6].title],
			datasets: [{
				label: 'Calories',
				data: [reusult2[0].nutrition.nutrients[0].amount,reusult2[1].nutrition.nutrients[0].amount,reusult2[2].nutrition.nutrients[0].amount,reusult2[3].nutrition.nutrients[0].amount,reusult2[4].nutrition.nutrients[0].amount,reusult2[5].nutrition.nutrients[0].amount,reusult2[6].nutrition.nutrients[0].amount],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

};
let showresults = (queryResponse) => {
	const grid = document.querySelector(".grids");
	
	let lengte = queryResponse.recipes.length;
	//console.log(lengte);
	for (let i = 0; i < lengte; i++) {
		//${queryResponse.recipes[i].spoonacularSourceUrl}
		grid.innerHTML += ` <a href="#" id="a" class="grid js-grid">
        <div class="grid__overlay">
		<span>Read More</span>
        </div>
        <div class="grid__image" style="background-image:url('${queryResponse.recipes[i].image}')"></div>
        <div class="grid__content" id="z" value="${i}">
		<div class="grid__title">${queryResponse.recipes[i].title}</div>
		<div class="grid__description">
		
		</div>
        </div>    
        
        <div class="grid__readtime">${queryResponse.recipes[i].readyInMinutes} min</div>
        </a>`;
		
		//console.log(queryResponse.recipes[1].extendedIngredients[i].name);
	}
	

};
let barhcart = (queryResponse)=>{
	
	
}



let getvalue = function () {
	// grid.value
	// var v
	// v =g.value;
	// console.log(grid)
};
document.addEventListener("DOMContentLoaded", function () {
	console.log("**** Loaded ****");
	// 1 We will query the API with longitude and latitude.
	getAPI();
	categoriekeuze();
	barhcart();
});
