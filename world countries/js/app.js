const searchBtn  = document.querySelector('.search-btn');
const inputBar = document.querySelector('.input-bar');
const result = document.querySelector('.result');


searchBtn.addEventListener('click',()=>{
    fetch(`https://restcountries.com/v2/name/${inputBar.value}`)
    .then(res => res.json())
    .then((data) => displayAllCountries(data));
});


inputBar.addEventListener('keypress', (e)=>{
if (e.keyCode ===13) {
    searchBtn.click();
}
});


const displayAllCountries =(data) =>{


    result.innerHTML = '';

    data.forEach(country => {
        const div = document.createElement('div');
        div.style.width= '18rem';
        div.className = "card m-5 shadow justify-content-center";
        div.innerHTML = `
        <img class="card-img-top" src="${country.flag}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-text">Name: ${country.name}</h5>
                <h6 class="card-text"><span>Capital:</span> ${country.capital}</h6>
                <h6 class="card-text"><span>Region:</span> ${country.region}</h6>
                <h6 class="card-text"><span>Population:</span> ${country.population}</h6>
              
                
            </div>`
       result.appendChild(div);
    });
}