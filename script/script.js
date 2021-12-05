let getAPI = async () => {
    // Eerst bouwen we onze url op
    let key = '09973560d06744a0afca860418a70227';
    url = `https://api.spoonacular.com/recipes/random?number=7&query=vegan&type=main course&diet=vegan&apiKey=${key}`;
   
    console.log(url);
  
    //   Met de fetch API proberen we de data op te halen.
    const request = await fetch(`${url}`);
    const reusult = await request.json();
    console.log(reusult);
    console.log(reusult.recipes.image)
    showresults(reusult);
    
}
let showresults = (queryResponse) =>{

    const grid = document.querySelector('.grids')
    
    const griddetails = document.querySelector('.grid__description')
    const grid2 = document.querySelector('.griddetails')
   
    let lengte = queryResponse.recipes.length;
    console.log(lengte)
    for(let i = 0; i < lengte;i++){
        grid.innerHTML += ` <a href="#" Value="${i}" id="a" class="grid">
        <div class="grid__overlay">
          <span>Read More</span>
        </div>
        <div class="grid__image" style="background-image:url('${queryResponse.recipes[i].image}')"></div>
        <div class="grid__content" id="z" value="${i}">
          <div class="grid__title">${queryResponse.recipes[i].title}</div>
          <div class="grid__description">
           ${queryResponse.recipes[1].extendedIngredients[i].originalString}
          </div>
        </div>    
        
        <div class="grid__readtime">${queryResponse.recipes[i].readyInMinutes} min</div>
        </a>`
        
        //console.log(queryResponse.recipes[1].extendedIngredients[i].name);
    }

    let lengteingredienten = queryResponse.recipes[1].extendedIngredients.length;
    console.log(lengteingredienten)
    for(let i = 0; i < lengteingredienten;i++){
      
      console.log(queryResponse.recipes[1].extendedIngredients[i].name);
      griddetails.innerHTML += ` ${queryResponse.recipes[i].extendedIngredients[i].originalString}  <br>`
          

    }
    grid2.innerHTML +=` <a href="#" Value="${i}" id="a" class="grid">
    <div class="grid__overlay">
      <span>Read More</span>
    </div>
    <div class="grid__image" style="background-image:url('${queryResponse.recipes[i].image}')"></div>
    <div class="grid__content" id="z" value="${i}">
      <div class="grid__title">${queryResponse.recipes[i].title}</div>
      <div class="grid__description">
       ${queryResponse.recipes[1].extendedIngredients[i].originalString}
      </div>
    </div>    
    
    <div class="grid__readtime">${queryResponse.recipes[i].readyInMinutes} min</div>
    </a>`
    
    grid.addEventListener("click",function(){
      console.log()
      getvalue();
    })
    //details dan recept
  //   grid.innerHTML += ` <a href="${queryResponse.recipes[i].spoonacularSourceUrl}" class="grid">
  //   <div class="grid__overlay">
  //     <span>Read More</span>
  //   </div>
  //   <div class="grid__image" style="background-image:url('${queryResponse.recipes[i].image}')"></div>
  //   <div class="grid__content">
  //     <div class="grid__title">${queryResponse.recipes[i].title}</div>
  //     <div class="grid__description">
  //       ${queryResponse.recipes[i].spoonacularSourceUrl}
  //     </div>
  //   </div>    
    
  //   <div class="grid__readtime">${queryResponse.recipes[i].readyInMinutes} min</div>
  // </a>`
    
      new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
  }

  let getvalue = function(){
    // grid.value
    // var v
    // v =g.value;
    // console.log(grid)
  }
  document.addEventListener('DOMContentLoaded', function () {
    console.log('**** Loaded ****');
    // 1 We will query the API with longitude and latitude.
    getAPI();
    
});
  