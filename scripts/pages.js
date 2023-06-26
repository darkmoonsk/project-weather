const worldCities = [
    { city: "São Paulo", location: "Brasil", worldCity: true },
    { city: "Rio de Janeiro", location: "Brasil", worldCity: true },
    { city: "Belo Horizonte", location: "Brasil" },
    { city: "Brasília", location: "Brasil" },
    { city: "Fortaleza", location: "Brasil" },
    { city: "Curitiba", location: "Brasil" },
    { city: "Recife", location: "Brasil" },
    { city: "Florianópolis", location: "Brasil" },
    { city: "Natal", location: "Brasil" },
    { city: "Rio Branco", location: "Brasil" },
    { city: "Maceió", location: "Brasil" },
    { city: "Macapá", location: "Brasil" },
    { city: "Manaus", location: "Brasil" },
    { city: "Salvador, BR", location: "Brasil" },
    { city: "Vitória", location: "Brasil" },
    { city: "Goiânia", location: "Brasil" },
    { city: "São Luís", location: "Brasil" },
    { city: "Cuiabá", location: "Brasil" },
    { city: "Campo Grande", location: "Brasil" },
    { city: "Belém", location: "Brasil" },
    { city: "João Pessoa", location: "Brasil" },
    { city: "Teresina", location: "Brasil" },
    { city: "Porto Alegre", location: "Brasil" },
    { city: "Porto Velho", location: "Brasil" },
    { city: "Boa Vista", location: "Brasil" },
    { city: "Aracaju", location: "Brasil" },
    { city: "Palmas", location: "Brasil" },
    { city: "Cidade do México", location: "América" },
    { city: "Nova York", location: "América", worldCity: true},
    { city: "Los Angeles", location: "América", worldCity: true },
    { city: "Chicago", location: "América" },
    { city: "Toronto", location: "América", worldCity: true },
    { city: "São Francisco", location: "América" },
    { city: "Lima", location: "América" },
    { city: "Buenos Aires", location: "América" },
    { city: "Bogotá", location: "América" },
    { city: "Santiago", location: "América" },
    { city: "Londres", location: "Europa", worldCity: true },
    { city: "Paris", location: "Europa", worldCity: true },
    { city: "Madrid", location: "Europa", worldCity: true },
    { city: "Roma", location: "Europa" },
    { city: "Berlim", location: "Europa" },
    { city: "Atenas", location: "Europa", worldCity: true },
    { city: "Amsterdam", location: "Europa" },
    { city: "Lisboa", location: "Europa" },
    { city: "Viena", location: "Europa" },
    { city: "Budapeste", location: "Europa" },
    { city: "Praga", location: "Europa" },
    { city: "Estocolmo", location: "Europa" },
    { city: "Moscou", location: "Europa", worldCity: true },
    { city: "Dublin", location: "Europa", worldCity: true },
    { city: "Copenhague", location: "Europa" },
    { city: "Varsóvia", location: "Europa" },
    { city: "Helsinki", location: "Europa" },
    { city: "Oslo", location: "Europa" },
    { city: "Zurique", location: "Europa" },
    { city: "Bruxelas", location: "Europa" },
    { city: "Cairo", location: "África", worldCity: true },
    { city: "Joanesburgo", location: "África" },
    { city: "Casablanca", location: "África" },
    { city: "Lagos", location: "África" },
    { city: "Nairóbi", location: "África", worldCity: true },
    { city: "Cidade do Cabo", location: "África", worldCity: true },
    { city: "Abidjan", location: "África" },
    { city: "Argel", location: "África" },
    { city: "Daca", location: "África" },
    { city: "Dar es Salaam", location: "África" },
    { city: "Cartum", location: "África" },
    { city: "Luanda", location: "África" },
    { city: "Acra", location: "África" },
    { city: "Djibuti", location: "África" },
    { city: "Tunes, TN", location: "África" },
    { city: "Mombaça", location: "África" },
    { city: "Harare", location: "África" },
    { city: "Addis Ababa", location: "África" },
    { city: "Windhoek", location: "África" },
    { city: "Sydney", location: "Oceania", worldCity: true },
    { city: "Melbourne", location: "Oceania" },
    { city: "Brisbane", location: "Oceania" },
    { city: "Perth", location: "Oceania" },
    { city: "Auckland", location: "Oceania" },
    { city: "Wellington", location: "Oceania" },
    { city: "Christchurch", location: "Oceania" },
    { city: "Adelaide", location: "Oceania" },
    { city: "Gold Coast", location: "Oceania" },
    { city: "Canberra", location: "Oceania" },
    { city: "Honolulu", location: "Oceania" },
    { city: "Noumea", location: "Oceania" },
    { city: "Suva", location: "Oceania" },
    { city: "Port Moresby", location: "Oceania" },
    { city: "Dunedin", location: "Oceania" },
    { city: "Hobart", location: "Oceania" },
    { city: "Darwin", location: "Oceania" },
    { city: "Queenstown", location: "Oceania" },
    { city: "Cairns", location: "Oceania" },
    { city: "Rotorua", location: "Oceania" },
    { city: "Tóquio", location: "Ásia", worldCity: true },
    { city: "Pequim", location: "Ásia", worldCity: true },
    { city: "Xangai", location: "Ásia" },
    { city: "Delhi", location: "Ásia", worldCity: true },
    { city: "Mumbai", location: "Ásia" },
    { city: "Bangkok", location: "Ásia" },
    { city: "Jakarta", location: "Ásia" },
    { city: "Dhaka", location: "Ásia" },
    { city: "Istambul", location: "Ásia", worldCity: true },
    { city: "Tehran", location: "Ásia" },
    { city: "Dubai", location: "Ásia" },
    { city: "Seul", location: "Ásia" },
    { city: "Cingapura", location: "Ásia" },
    { city: "Hong Kong", location: "Ásia" },
    { city: "Kuala Lumpur", location: "Ásia" },
    { city: "Manila", location: "Ásia" },
    { city: "Ho Chi Minh", location: "Ásia" },
    { city: "Damasco", location: "Ásia" },
    { city: "Jerusalém", location: "Ásia", worldCity: true },
    { city: "Moscovo", location: "Ásia" },
];

const menuItems = document.querySelectorAll(".menu li");
let currentPage = "Brasil";

window.addEventListener("load", () => {
    makeCardList("Brasil");
});

menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (event.target.textContent === currentPage) return;

        const targetItem = document.querySelector(".target");
        targetItem.classList.remove("target");
        event.target.classList.add("target");
        currentPage = event.target.textContent;
        makeCardList(event.target.textContent);
    });
});



async function makeCard(city) {
    const cityData = await obterDadosClima(city, "pt");
    const cityAirQuality = await getAirQuality(cityData.coord.lat, cityData.coord.lon);

    const card = `
            <div class="card">
                <div class="card__highlights">
                    <img src="./images/image-17.png" alt="${cityData.weather[0].description}" class="highlights__image">
                    <div class="highlights__info">
                        <span class="highlights__title">${cityData.name === "fpolis"? "Florianópolis" : cityData.name}</span>
                        <span class="highlights__subtitle">${capitalizeFirstLetter(cityData.weather[0].description)}</span>
                        <span class="highlights__temperature">${convertKelvinToCelsius(cityData.main.temp)}ºC</span>
                        <span class="highlights__min-max">
                        ${convertKelvinToCelsius(cityData.main.temp_min)}ºC | MAX ${convertKelvinToCelsius(cityData.main.temp_max)}ºC
                        </span>
                    </div>
                </div>
                <div class="card__extra-info">
                    <div class="extra-info__info">
                        <span class="extra-key">Sensação Térmica</span>
                        <span class="extra-info__value">${convertKelvinToCelsius(cityData.main.feels_like)}ºC</span>
                    </div>
                    <div class="extra-info__info">
                        <span class="extra-key">Vento</span>
                        <span class="extra-info__value">${convertToKmPerHour(cityData.wind.speed)} km/h</span>
                    </div>
                    <div class="extra-info__info">
                        <span class="extra-key">Qualidade do Ar</span>
                        <span class="extra-info__value">${cityAirQuality}</span>
                    </div>
                    <div class="extra-info__info">
                        <span class="extra-key">Visibilidade</span>
                        <span class="extra-info__value">${convertMeterToKilometer(cityData.visibility)} km</span>
                    </div>
                </div>
            </div>
    `;

    return card;
}

// Para Evelyn
function searchCityWeather(cityName) {

}

async function makeCardList(page) {
    try {
        const main = document.querySelector("main");
        main.innerHTML = "";
        const cities = page !== "Mundo"? worldCities.filter(city => city.location === page) : worldCities.filter(city => city.worldCity === true);
        for (const city of cities) { 
            const card = await makeCard(city.city);
            if(currentPage !== page) break;
            main.insertAdjacentHTML("beforeend", card);
        }
    } catch (error) {
        console.error(error);
    }
}


// Funções utilitárias
function convertToKmPerHour (speed) {
    return Math.round((speed * 3.6));
}

function convertKelvinToCelsius(kelvin) {
    return Math.round((kelvin - 273.15));
};

function convertMeterToKilometer(meter) {
    return meter / 1000;
}

function capitalizeFirstLetter(string) {
    words = string.split(" ");
    const capitalizeLetter = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalizeLetter.join(" ");
}

// Para Nath 
function getWeatherImagePath(id) {

} 