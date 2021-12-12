function rangeNumber () {
  const numberRange = [];

  for(let i=0; i<=31; i++) {
    numberRange.push(i);
  }
  return numberRange;
}

const p = [];
const s = [];

function includeObjectValue () {
  let arrValue = [{"p":"10","s":"10"},{"p":"10","s":"37"},{"p":"3,25","s":"37"},{"p":"3,25","s":"16,75"},{"p":"8,3125","s":"16,75"},{"p":"8,3125","s":"31,9375"},{"p":"4,515625","s":"31,9375"},{"p":"4,515625","s":"20,546875"},{"p":"7,36328125","s":"20,546875"},{"p":"7,36328125","s":"29,08984375"},{"p":"5,2275390625","s":"29,08984375"},{"p":"5,2275390625","s":"22,6826171875"},{"p":"6,829345703125","s":"22,6826171875"},{"p":"6,829345703125","s":"27,488037109375"},{"p":"5,62799072265625","s":"27,488037109375"},{"p":"5,62799072265625","s":"23,8839721679688"},{"p":"6,52900695800781","s":"23,8839721679688"},{"p":"6,52900695800781","s":"26,5870208740234"},{"p":"5,85324478149414","s":"26,5870208740234"},{"p":"5,85324478149414","s":"24,5597343444824"},{"p":"6,36006641387939","s":"24,5597343444824"},{"p":"6,36006641387939","s":"26,0801992416382"},{"p":"5,97995018959045","s":"26,0801992416382"},{"p":"5,97995018959045","s":"24,9398505687714"},{"p":"6,26503735780716","s":"24,9398505687714"},{"p":"6,26503735780716","s":"25,7951120734215"},{"p":"6,05122198164463","s":"25,7951120734215"},{"p":"6,05122198164463","s":"25,1536659449339"},{"p":"6,21158351376653","s":"25,1536659449339"},{"p":"6,21158351376653","s":"25,6347505412996"},{"p":"6,0913123646751","s":"25,6347505412996"},{"p":"6,0913123646751","s":"25,2739370940253"},{"p":"6,18151572649367","s":"25,2739370940253"},{"p":"6,18151572649367","s":"25,544547179481"},{"p":"6,11386320512975","s":"25,544547179481"},{"p":"6,11386320512975","s":"25,3415896153892"},{"p":"6,16460259615269","s":"25,3415896153892"},{"p":"6,16460259615269","s":"25,4938077884581"},{"p":"6,12654805288548","s":"25,4938077884581"},{"p":"6,12654805288548","s":"25,3796441586564"},{"p":"6,15508896033589","s":"25,3796441586564"},{"p":"6,15508896033589","s":"25,4652668810077"},{"p":"6,13368327974808","s":"25,4652668810077"},{"p":"6,13368327974808","s":"25,4010498392443"},{"p":"6,14973754018894","s":"25,4010498392443"},{"p":"6,14973754018894","s":"25,4492126205668"},{"p":"6,1376968448583","s":"25,4492126205668"},{"p":"6,1376968448583","s":"25,4130905345749"},{"p":"6,14672736635628","s":"25,4130905345749"},{"p":"6,14672736635628","s":"25,4401820990688"},{"p":"6,13995447523279","s":"25,4401820990688"},{"p":"6,13995447523279","s":"25,4198634256984"},{"p":"6,14503414357541","s":"25,4198634256984"},{"p":"6,14503414357541","s":"25,4351024307262"},{"p":"6,14122439231845","s":"25,4351024307262"},{"p":"6,14122439231845","s":"25,4236731769553"},{"p":"6,14408170576117","s":"25,4236731769553"},{"p":"6,14408170576117","s":"25,4322451172835"},{"p":"6,14194","s":"25,43224"},{"p":"6,14194","s":"25,42582"},{"p":"6,14355","s":"25,4258"},{"p":"6,14355","s":"25,43065"}];

  function splitStringP(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    p.push(Number(arrayOfStrings.join('.')));
  }

  function splitStringS(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    s.push(Number(arrayOfStrings.join('.')));
  }
  var comma = ',';

  for(obj of arrValue) {
    splitStringP(obj.p, comma);
    splitStringS(obj.s, comma);
  }
  

} includeObjectValue();

console.log(p)
//console.log(s)

// Area Chart Example
var ctx = document.getElementById("economicsRegressCharts");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: rangeNumber(),
      datasets: [{
        label: 'Sentence',
        data: s,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Price',
        data: p,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '$' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
