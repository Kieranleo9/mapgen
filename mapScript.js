function createMap() {
    var map = L.map('map').setView([40.021, -102.051], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 

    lat = getRandomInRange(30, 35, 3);
    long = getRandomInRange(-90, -100, 3);
    var marker = L.marker([lat, long]).addTo(map);
    document.getElementById('marker1').innerHTML = `Marker 1: Latitude: ${lat}, Longitude: ${long}`;
    getLocality(lat, long, 'local1');

    lat2 = getRandomInRange(30, 35, 3);
    long2 = getRandomInRange(-90, -100, 3);
    var marker2 = L.marker([lat2, long2]).addTo(map);
    document.getElementById('marker2').innerHTML = `Marker 2: Latitude: ${lat2}, Longitude: ${long2}`;
    getLocality(lat2, long2, 'local2');

    lat3 = getRandomInRange(30, 35, 3);
    long3 = getRandomInRange(-90, -100, 3);
    var marker3 = L.marker([lat3, long3]).addTo(map);
    document.getElementById('marker3').innerHTML = `Marker 3: Latitude: ${lat3}, Longitude: ${long3}`;
    getLocality(lat3, long3, 'local3');
}
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }
function getLocality(latitude, longitude, localityid) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then((res) => res.json())
    .then((resJson) => {
        if (resJson.locality) {
            document.getElementById(localityid).innerHTML = `Locality: ${resJson.locality}`   
        }
        else {
        document.getElementById(localityid).innerHTML =  `Locality not found` 
        }
    })
}

window.onload = createMap