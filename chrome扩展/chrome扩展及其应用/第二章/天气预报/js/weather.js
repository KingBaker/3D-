function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
    console.log(result)
    var list = result.list;
    var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    for(var i in list){
        var d = new Date(list[i].dt*1000);
        table += '<tr>';
        table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
        table += '<td>'+list[i].weather[0].description+'</td>';
        table += '<td>'+Math.round(list[i].temp.min-273.15)+' °C</td>';
        table += '<td>'+Math.round(list[i].temp.max-273.15)+' °C</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

// var city = localStorage.city;
var city = 'beijing';
// city = city?city:'beijing';
// var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=2664b695044949b3aa403b0f66f082da'+city+',china&lang=zh_cn';
var url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=2664b695044949b3aa403b0f66f082da'+city+',china&lang=zh_cn';
httpRequest(url, showWeather);