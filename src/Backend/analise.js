(()=>{
    const url = '/info_medias';
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let Dados = data;
      let saida = '';
      Dados.map(function(Dados) {
        saida += '<strong> '+ `${Dados.max_forca}`+" "+`${Dados.min_forca}`+" "+`${Dados.max_act}`+" "+`${Dados.min_act}`+" "+`${Dados.max_peg}`+" "+`${Dados.min_peg}`+" "+`${Dados.media_valores}`+'</strong>';
  });
  document.getElementById('tabela').innerHTML = saida;
  const table = document.createElement('table');
  for(let line of Dados){
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
    });
  })();











  