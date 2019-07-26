const key = "API KEY HERE ";
let button = document.getElementById("enter");
let button1 = document.getElementById("clear");
var city1 = document.getElementById("city").value;
let cityClick = document.getElementById("city");
let delete1 = document.getElementById("delete_this");

let temp;
let icon;
let status1;

function getWeather() {
    let city = document.getElementById("city").value;

    var loader = document.createElement("div");
    loader.setAttribute("id","loading");
    delete1.appendChild(loader);

    var header1 = document.createElement("h1");
    header1.appendChild(document.createTextNode("LOADING......"));
    loader.appendChild(header1);


   
    console.log("asd",city);
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city},india&appid=API_KEY `
    fetch(api)
        .then(function(response){            
            console.log("waitinggggg"); 
            let data = response.json();
            if(data){
                console.log(data);
                return data;
            }
            else{
                console.log("waiting");
            }
    })
    .then(function(data){
        temp = data.main.temp;
        icon = data.weather[0].icon;
        status1 = data.weather[0].main;
      /*  console.log(data.weather[0].main);
        console.log(data.main.temp);
        console.log(data.weather[0].icon)*/
    })
    .then(function(){
        displayWeather();
    });
}

function displayWeather(){

    var elem1 = document.getElementById("loading");
    elem1.parentNode.removeChild(elem1);


    console.log("temp",temp);
    console.log("icon",icon);
    console.log("status",status1);
    var temp1 = Math.round(Number(temp) - 273); 
    temp1 = temp1+"\u00B0"+"C";
    
    var div1 = document.createElement("div");
    div1.setAttribute("id","trial");
    delete1.appendChild(div1);

    var h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(status1));
    div1.appendChild(h3);

    var img1 = document.createElement("img")
    img1.setAttribute("src",`S:/Bombay_Softwares/WeatherMapAPI/icons/${icon}.png`);
    div1.appendChild(img1);

    var h4 = document.createElement("h4");
    h4.appendChild(document.createTextNode(temp1));
    div1.appendChild(h4);

    document.getElementById("enter").disabled = true;

}


function delete_display(){
    var elem = document.getElementById("trial");
    elem.parentNode.removeChild(elem);
    city.value = "";

    document.getElementById("enter").disabled = false;

}

function inputClick(){
    console.log("inputClick")
    document.getElementById("enter").disabled = false;
}

button1.addEventListener("click",delete_display);

button.addEventListener("click", getWeather);

cityClick.addEventListener("click",inputClick)
