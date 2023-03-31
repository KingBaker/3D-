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

httpRequest('http://api.k780.com/?app=ip.local&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json', function(ip){
    let my_ip = JSON.parse(ip)
    document.getElementById('ip_div').innerText = ip;
    setTimeout(() => {
        document.getElementById('ip_div1').innerHTML = my_ip.result
    }, 0);
});