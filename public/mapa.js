// const map = L.map('map').setView([-23.55680857344921, -46.734749298708394], 16);

// const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);



// // Ponto que vai receber o modal
// var point2 = L.marker([-23.55620157344921, -46.734249298708394]).addTo(map);


// var oi = "";

// const url = '/choque1All';
// fetch(url)
// .then((response) => {
// return response.json();
// })
// .then((data) => {
// let Dados = data;

// let saida = '';
// let n_choque = '';
// let viagem = '';
// let lat = '';
// let lon = '';
// Dados.map(function(Dados) {
//     viagem = `${Dados.id_viagem}`;
//     n_choque += `${Dados.id_choque1}`;
//     // lat = `${Dados.latitude}`;
//     // lon = `${Dados.longitude}`;
//     saida += `${Dados.act}`;
// });

// for(var i = 0; i < Dados.length; i++){
//     console.log(Dados[i]["id_choque1"])
//     let modal = L.marker([Dados[i]["latitude"], Dados[i]["longitude"]]).addTo(map).bindPopup(`<b>${Dados[i]["id_choque1"]}</b>`);;

// // Manda os dados colhidos do banco a div que está dentro do modal
// document.getElementById('dbresult').innerHTML = `<strong>Ponto</strong> <br> Número da viagem: ${viagem} <br> Número do choque: ${[Dados[i]["id_choque1"]]} <br> ACT: ${[Dados[i]["act"]]} <br>`;
// // É usado o metodo 'on' para detectar o click no ponto e abrir o modal
// }})
// .catch(function(error) {
//     console.log(error);
// });
// modal = 
// modal.on('click', function() {
//     $('#exampleModal').modal('show');
// });


// Versão nova do código

// const map = L.map('map').setView([-23.55680857344921, -46.734749298708394], 16);

// const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

const markers = []; // Array para guardar os pontos do mapa

const url = '/choque1All';
fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    
    let Dados = data;

    // Criar o mapa com o centro nos valores da latitudes e longitudes da row do meio dos dados
    var mediana = Math.round(Dados.length / 2);
    const map = L.map('map').setView([Dados[mediana]["latitude"], Dados[mediana]["longitude"]], 7);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markers = [];
    
   // Criar os markers no mapa baseados nos pontos do banco de dados 
    for (let i = 0; i < Dados.length; i++) {
        let marker = L.marker([Dados[i]["latitude"], Dados[i]["longitude"]]).addTo(map);

        // Função para abrir o modal e exibir os valores do ponto
        function openModal() {
            $('#exampleModal').modal('show');
            document.getElementById('dbresult').innerHTML = `
                <strong>Ponto</strong><br>
                Número da viagem: ${Dados[i]["id_viagem"]}<br>
                Número do choque: ${Dados[i]["id_choque1"]} <hr>

                Tipo vagão: ${Dados[i]["tipo_vagao"]}<br>
                Data e hora: ${Dados[i]["data_hora"]}<br>
                Velocidade: ${Dados[i]["velocidade"]}<br>
                Posição: ${Dados[i]["posicao"]}<br>
                Placa virtual: ${Dados[i]["placa_virtual"]}<br>
                Trecho: ${Dados[i]["trecho"]}<br>
                Força Maxima: ${Dados[i]["f_maxima"]}<br>
                ACT: ${Dados[i]["act"]}<br>
                Peg: ${Dados[i]["peg"]}<br>
            `;
        }

        // Chama a função ao clicar no marker no mapa
        marker.on('click', openModal);

        markers.push(marker);
    }
})
.catch(function(error) {
    console.log(error);
});
