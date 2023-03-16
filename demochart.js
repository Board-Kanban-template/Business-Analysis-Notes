const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [{
        label: 'PH Level',
        data: [7.1, 9, 7.5, 8, 8.2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 10,
          suggestedMax: 10
        }
      },
      plugins: {
        annotation: {
          annotations: {
            line1: {
                type: 'box',
                xMin: 0,
                yMin: 7,
                yMax: 8,
                backgroundColor: 'rgba(75, 181, 67, 0.4)',
                label: {
                    display: true,
                    content: 'PH Target'
                }
              }
          }
        }
      }
    }
  });