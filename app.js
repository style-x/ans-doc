// Anfang

var nav = document.querySelector('nav');
var main = document.querySelector('main');

// https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
var requestURL = 'https://style-x.github.io/ans-doc/db.json';

console.log(requestURL);

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

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

request.onload = function() {
  var myTable = request.response;
  buildTable(myTable);
}

// Ende