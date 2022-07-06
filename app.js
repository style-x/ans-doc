// Anfang

var nav = document.querySelector('nav');
var main = document.querySelector('main');

// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
var requestURL = 'https://github.com/style-x/ans-doc/db.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var myTable = request.response;
  buildTable(myTable);
}

function buildTable(jsonObj) {
  
  var table = document.getElementById('myTable');

  let data = jsonObj.members;
  
  table.innerHTML = '';

  for (i = 0; i < data.length; i++) {
    while (i < 10) {
      var row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].artnr}</td>
                    <td>${data[i].test}</td>
                </tr>`
      table.innerHTML += row;
    };
  }
}

// Ende