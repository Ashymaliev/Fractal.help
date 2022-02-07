
  const data = {
    datasets: [{
        backgroundColor: function(context) {
            console.log(context)
            const index = context.dataIndex;
            const value = context.raw;
            console.log(value)
            return  index % 2 ? '#f38b4a' :    // else, alternate values in blue and green
               '#56d798';
            //Тут можно писать любую логику как будет меняться, определяться цвет
        },
        data: [
            { x: 101, y:'Физкультура и спорт'}, {x: 10, y: 'Промышленность, технология'}, {x: 5, y: 'Архитектура и строительство'} ],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        //change size
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    color: '#ffff',
                }
            }
        }, 

        //
        indexAxis: 'y',
        plugins: {
            legend: {
                display:false,
            },
            // title: {
            //     display: true,
            //     text: 'Количество Организаций по Категориям',
            //     font: {size: '46'},
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     }
            // }
        },
    },
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


const myChart2 = new Chart(document.getElementById('myChart2'), {
    type: 'bar',
    data: {
        datasets: [{
            data: [{x: 0, y: '1'}, {x: 34, y: 'Бишкек'}, {x: 0, y: '-1'}],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.7)',
                // 'rgba(54, 162, 235, 0.7)',
              
                '#f38b4a'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
            
                '#f38b4a'
            ],
            borderWidth: 1
        }]
    },
    options: {
           //change size
           maintainAspectRatio: false,
           scales: {
            y: {
                ticks: {
                    color: '#fff',
                }
            }
        }, 
           //
        indexAxis: 'y',
        plugins: {
            legend: {
                display:false,
            },
            // title: {
            //     display: true,
            //     text: 'Количество Организаций по Городам',
            //     // color: 'red',
            //     font: {size: '46'},
            //     padding: {
            //         top: 10,
            //         bottom: 30
            //     }
            // }
        },
    }
});

const myChart3 = new Chart(document.getElementById('myChart3'), {
  type: 'bar',
  data: {
      datasets: [{
          data: [{x: 298, y: 'Охранная деаятельность'}, {x: 321, y: 'Инженерные обордувания'}, {x: 357, y: 'Строительные материалы :'},{x: 364, y: 'Социально бытовые услуги'},{x: 340, y: 'Жилье, недвижимость'},{x: 552, y: 'Телекоммуникация и почтовые службы'}
          ,{x: 362, y: 'Финансы, Юриспруденция'} ,{x: 318, y: 'Торговля и общественное питание'} ,{x: 482, y: 'Физкультура и спорт'} ,{x: 312, y: 'Культура и исскуство'} ,{x: 652, y: 'Транспорт'} ,{x: 413, y: 'Сельское хозяйство'} 
          ,{x: 397, y: 'Промышленность, технология'} ,{x: 434, y: 'Туризм, отдых'} ,{x: 550, y: 'Образование, наука'} ,{x: 627, y: 'Медицина, здоровье'} ,{x: 1465, y: 'Архитектура и строительство'}],
          backgroundColor: [
            //   '#ff8397, 0.7)',
            //   '#6970d5, 0.7)',
            //   '#f38b4a, 0.7)',
            '#56d798'

          ],
          borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            '#56d798'
    
          ],
          borderWidth: 1
      }]
  },
  options: {
         //change size
         maintainAspectRatio: false,
         scales: {
            y: {
                ticks: {
                    color: '#fff',
                }
            }
        }, 
         //
      indexAxis: 'y',
      plugins: {
          legend: {
              display:false,
          },
        //   title: {
        //       display: true,
        //       text: 'Количество просмотров по Категориям',
        //       // color: 'red',
        //       font: {size: '46'},
        //       padding: {
        //           top: 10,
        //           bottom: 30
        //       }
        //   }
      },
  }
});

