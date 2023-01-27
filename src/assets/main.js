'use strict'
const API = 'https://free-epic-games.p.rapidapi.com/free';
const content = document.querySelector("#content");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32f2bc4065msh1a16e58d2ad9bcbp1ac435jsn5e3caaab9408',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async()=>{ 
    try {
        const Games= await fetchData(API);
        const view = 
        `${Games.freeGames.current.map(game=>`
        <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${game.keyImages[0].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${game.title}</br>
            ${game.effectiveDate}</br>
            <a href="https://store.epicgames.com/es-MX/p/${game.offerMappings[0].pageSlug}">
              Go to offer xD
            </a>
          </h3>
        </div>
      </div>
        `).slice(1,3).join('')}
        `;
        content.innerHTML=view;
    } catch (error) {
        console.log(error);
    }
})();