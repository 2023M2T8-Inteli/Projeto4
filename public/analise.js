
console.log("Executando") //Escreve no console a palavra "Executando"

const url = '/info_medias'; //define a constante url como /info_médias (comentada no arquivo "app.js")
fetch(url)
<<<<<<< Updated upstream
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
=======
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var Dados = data;
    let saida = '';
    Dados.map(function (Dados) {
      //saida += '<strong> '+ `${Dados.max_forca}`+" "+`${Dados.min_forca}`+" "+`${Dados.max_act}`+" "+`${Dados.min_act}`+" "+`${Dados.max_peg}`+" "+`${Dados.min_peg}`+" "+`${Dados.media_valores}`+'</strong>';
    });
    document.getElementById('tabela').innerHTML = saida;
    const table = document.createElement('table');
    //var tr = document.createElement('tr');
    var th = document.createElement('th')
    th.innerHTML = "<td>Max Força(N) |  </td><td>Min Força(N)  |  </td><td>Max Act(mm)  |  </td><td>Min Act(mm)  |  </td><td>Max Peg(PSI)   |  </td><td>Min Peg(PSI)  |  </td>"
    tabela.appendChild(th);

    for (let line of Dados) {
      const tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerHTML = line.max_forca;
      tr.appendChild(td);
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
  td = document.createElement('td');
  td.innerHTML = line.media_valores;
  tr.appendChild(td); 
  
  table.appendChild(tr);
  }
=======
      td = document.createElement('td');
      td.innerHTML = line.min_peg;
      tr.appendChild(td);

      table.appendChild(tr);
    }
>>>>>>> Stashed changes
    const resultado = document.querySelector('#tabela');
    resultado.appendChild(table);
  }) 
  .catch((error) => {
    console.log(error);
<<<<<<< Updated upstream
  }); //apresenta o erro ocorrido no console
=======
  });

const url2 = '/info_M_Vagoes';
fetch(url2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var Dados2 = data;
    let saida2 = '';
    Dados2.map(function (Dados2) {
      //saida += '<strong> '+ `${Dados.max_forca}`+" "+`${Dados.min_forca}`+" "+`${Dados.max_act}`+" "+`${Dados.min_act}`+" "+`${Dados.max_peg}`+" "+`${Dados.min_peg}`+" "+`${Dados.media_valores}`+'</strong>';
    });
    document.getElementById('tabela2').innerHTML = saida2;
    const table2 = document.createElement('table');
    //var tr = document.createElement('tr');
    var th2 = document.createElement('th')
    th2.innerHTML = "<td>Max Act(mm)  |  </td><td>Min Act(mm)  |  </td><td>Max Peg(PSI)  |  </td><td>Min Peg(PSI)  |  </td><td>Max Engate(tf)  |  </td><td>Min Engate(tf)  |  </td><td>Max Velocidade(km/h)  |  </td><td>Min Velocidade(km/h)  |  </td>"
    table2.appendChild(th2);
    //for (i = 0; i < vetor.lenth; i++) {
    for (let line2 of Dados2) {
      const tr2 = document.createElement('tr');
      let td2 = document.createElement('td');
      td2.innerHTML = line2.max_act;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.min_act;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.max_peg;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.min_peg;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.max_engate;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.min_engate;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.max_velocidade;
      tr2.appendChild(td2);

      td2 = document.createElement('td');
      td2.innerHTML = line2.min_velocidade;
      tr2.appendChild(td2);

      table2.appendChild(tr2);
    }
    const resultado2 = document.querySelector('#tabela2');
    resultado2.appendChild(table2);
    //}
  })
  .catch((error) => {
    console.log(error);
  });

>>>>>>> Stashed changes
