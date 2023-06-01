const map = L.map('map').setView([-23.55680857344921, -46.734749298708394], 16);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var teste = L.marker([-23.55680857344921, -46.734749298708394]).addTo(map);

// Ponto que vai receber o modal
var point2 = L.marker([-23.55620157344921, -46.734249298708394]).addTo(map);


var oi = "";

const url = '/choque1All';
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
let Dados = data;

let saida = '';
let n_choque = '';
let viagem = '';
let lat = '';
let lon = '';
Dados.map(function(Dados) {
    viagem = `${Dados.id_viagem}`;
    n_choque += `${Dados.id_choque1}`;
    // lat = `${Dados.latitude}`;
    // lon = `${Dados.longitude}`;
    saida += `${Dados.act}`;
});

console.log(Dados[0]["latitude"],Dados[0]["latitude"])
for(var i = 0; i < Dados.length; i++){
    console.log([Dados[i]["latitude"], Dados[i]["longitude"]])
    L.marker([Dados[i]["latitude"], Dados[i]["longitude"]]).addTo(map).bindPopup(`<b>Lat: ${Dados[i]["latitude"]} lon: ${Dados[i]["longitude"]} </b>`);
}






// Manda os dados colhidos do banco a div que está dentro do modal
document.getElementById('dbresult').innerHTML = `<strong>Ponto</strong> <br> Número da viagem: ${viagem} <br> Número do choque: ${n_choque} <br> ACT: ${saida} <br>`;
teste.bindPopup(`<strong>Ponto</strong> <br> Número da viagem: ${viagem} <br> Número do choque: ${n_choque} <br> ACT: ${saida} <br>`);
// É usado o metodo 'on' para detectar o click no ponto e abrir o modal
point2.on('click', function() {
    $('#exampleModal').modal('show');
});
})
.catch(function(error) {
console.log(error);
});

// TODO: Pensar em um jeito que em cada ponto clicado aparecer exclusivamente a informação daquele ponto
// Quando clicar no ponto, detectar um certo id (id_choque) e mandar para o endpoint
