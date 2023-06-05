
console.log("Executando") //Escreve no console a palavra "Executando"

const url = '/info_medias'; //define a constante url como /info_médias (comentada no arquivo "app.js")
fetch(url)
.then((response) => {
  return response.json();
}) //retorna o valor da resposta como json
.then((data) => {
  var Dados = data;
  let saida = '';
  Dados.map(function(Dados) {
    //saida += '<strong> '+ `${Dados.max_forca}`+" "+`${Dados.min_forca}`+" "+`${Dados.max_act}`+" "+`${Dados.min_act}`+" "+`${Dados.max_peg}`+" "+`${Dados.min_peg}`+" "+`${Dados.media_valores}`+'</strong>';
  });
  document.getElementById('tabela').innerHTML = saida;
  const table = document.createElement('table');
  //var tr = document.createElement('tr');
  var th  = document.createElement('th')
  th.innerHTML = "<td>Max Força  |  </td><td>Min Força  |  </td><td>Max Act  |  </td><td>Min Act  |  </td><td>Max Peg   |  </td><td>Min Peg  |  </td><td>Media Valores </td>"
  tabela.appendChild(th); //cria o esquema da tabela no documento, com as nominações dos dados

  for(let line of Dados){ //acrescenta uma linha na tabela para cada um dos dados preteridos
  const tr = document.createElement('tr');
  let td = document.createElement('td');
  td.innerHTML = line.max_forca;
  tr.appendChild(td);
  
  td = document.createElement('td');
  td.innerHTML = line.min_forca;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = line.max_act;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = line.min_act;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = line.max_peg;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = line.min_peg;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = line.media_valores;
  tr.appendChild(td); 
  
  table.appendChild(tr);
  }
    const resultado = document.querySelector('#tabela');
    resultado.appendChild(table);
  }) 
  .catch((error) => {
    console.log(error);
  }); //apresenta o erro ocorrido no console
