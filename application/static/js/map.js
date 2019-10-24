let mapId = document.getElementById('map')
const mapbox_token = "sk.eyJ1IjoiamFieWVzcyIsImEiOiJjazI1YTk3dGUwZGx6M2JucnlzdWZ0Nmt5In0.fgVXu_G2QfR7ecuVslmt4w"

let map = L.map('map').setView([40.78533,-73.96901], 14)

L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}`, {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: mapbox_token
}).addTo(map)


function onMapClick(e) {
	fetch('/markers').then(res => {
		console.log(res)
		return res.text()
	})
	.then(json =>{
		console.log(json)
	}

	)
	
	alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick)