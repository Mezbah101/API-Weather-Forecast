const API_KEY = `8fc962c29eb10f74fb026b5ce0a57cb4`

const searchTemperature = () => {
   
     const city = document.getElementById("city-name").value ;
     document.getElementById("city-name").value = "";
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    fetch (url)
    .then (res => res.json())
    .then (data => displayInfo(data))

}


const setText = (id, text) => {

document.getElementById(id).innerText = text;

}

 const displayInfo = data => {

    console.log(data);
    
    if (data.message === "city not found") {
   

     document.getElementById("location").innerText = data.message.toUpperCase();
    }




    else{
       
   document.getElementById("location").innerText = data.name;

    }

    setText("temperature", data.main.temp)
    setText("wind-speed", data.wind.speed)
    setText("weather-condition",data.weather[0].main )

// document.getElementById("temperature").innerText = data.main.temp;
// document.getElementById("wind-speed").innerText = data.wind.speed;
// document.getElementById("weather-condition").innerText = data.weather[0].main

 
  const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  const imgIcon =  document.getElementById("weather-icon");
  imgIcon.setAttribute ("src", url)

 }