const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status =document.getElementById("temp_status");
const temp =document.getElementById("temp"); 

const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'Please write the name before search';
        data_hide.classList.add('data_hide');
    }else{
        try{
        let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=47e4c0b422c3c08462dd7342a2fa6f3a`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arrData = [data];

        city_name.innerText = arrData[0].name;
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        data_hide.classList.remove('data_hide');

        }catch{
            data_hide.classList.add('data_hide');
            city_name.innerText = 'Please write the name before search....';
        }
    }
}
submitBtn.addEventListener("click",getInfo);