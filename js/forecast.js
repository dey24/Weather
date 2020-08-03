const key = 'gfJfPD9AqEef6FueZoUykTbJbLJBQGIF';

//get weather information
const getWeather = async (id) =>{

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; //base URL
    const query = `?apikey=${key}&q=${city}`; //query parameters
    
    //combining base and query
    const response = await fetch(base + query); //await so that we wait right at the await method until the promise is resolved and once done we the fetch the concatenated base and query(+)
    const data = await response.json();

    console.log(data[0]);
};

 getCity('london').then(data => {
    return getWeather(data.Key);
 }).then (data =>{
    console.log(data);
 })
    .catch(err => console.log(err));

