const boton = document.querySelector('#bottonUno');

const labels = [
    'UAdeO',
    'UAS',
    'UT'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Prueba de la madre de reingeneria',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: []
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  boton.addEventListener('click', () => {
    const ver = document.getElementById('myChart');
    if(ver){
      ver.remove();
    }
    const canvas = document.createElement('canvas');
    canvas.id = 'myChart';
    const div = document.querySelector('div');
    div.appendChild(canvas);

    let numero = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    data.datasets[0].data.push(numero);
    numero = Math.floor((Math.random() * (50 - 20 + 1)) + 20);
    data.datasets[0].data.push(numero);
    numero = Math.floor((Math.random() * (60 - 30 + 1)) + 15);
    data.datasets[0].data.push(numero);
    let myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  })
