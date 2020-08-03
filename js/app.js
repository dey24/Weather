const cityForm = document.querySelector('form');

cityForm.addEventListener('submit', =>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with the new city
    

})