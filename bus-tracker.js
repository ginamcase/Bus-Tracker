mapboxgl.accessToken = 'pk.eyJ1IjoiZ2luYW1heXl5eSIsImEiOiJjbDJudTk0ZXUyNGwzM2Nsd3l4ZWpoa2hlIn0.4sJuilH9_W_P3UN-AEhc4A'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091415, 42.354894],
    zoom: 13.5,
});

const marker = new mapboxgl.Marker()
    .setLngLat([-71.0906, 42.3616])
    .addTo(map);


const busStops = [
    [-71.0906, 42.3616],
    [-71.093001, 42.361049],
    [-71.094880, 42.360134],
    [-71.093447, 42.358749],
    [-71.092505, 42.357001],
    [-71.091415, 42.354894],
    [-71.090399, 42.352750],
    [-71.089177, 42.350118],
    [-71.087748, 42.347336],
    [-71.088504, 42.347106],
    [-71.089244, 42.346875],
    [-71.091463, 42.347523],
    [-71.093448, 42.347509],
    [-71.094393, 42.346510],
    [-71.095551, 42.345675],
    [-71.095703, 42.346029],
  ];
  

  

  


let counter = 0;
function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter])
        counter++
      move()
    }, 1000)
  }
