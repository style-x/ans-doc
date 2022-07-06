// Anfang

let nav = document.querySelector('nav');
let main = document.querySelector('main');
let requestURL = 'https://style-x.github.io/ans-doc/db.json';
let request = new XMLHttpRequest();
var result;
var data;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let searchbar = document.getElementById('search-input');
searchbar.addEventListener('keyup', function() {
  let value = this.value;
  //console.log(value);
  search(value, data);
  buildTable(data);
})

function buildTable(result) {
  var table = document.getElementById('table');
  data = result.article;
  table.innerHTML = '';

  for (i = 0; i < data.length; i++) {
    var row = `<tr>
                  <td>${data[i].name}</td>
                  <td>${data[i].artnr}</td>
                  <td>${data[i].clients}</td>
              </tr>`
    table.innerHTML += row;
  };
}

request.onload = function() {
  result = request.response;
  buildTable(result);
}

function search(value, data) {
  let filteredData = [];

  console.log(data);

  for (i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let name = data[i].name.toLowerCase();

    console.log(value);

    if (name.includes(value)){
      filteredData.push(data[i])
    }

  };
  return filteredData;
}

// Ende