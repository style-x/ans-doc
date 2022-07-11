// Anfang

let nav = document.querySelector('nav');
let main = document.querySelector('main');
let table = document.querySelector('table');
let searchbar = document.getElementById('search-input');
let requestURL = 'https://style-x.github.io/ans-doc/db.json';
let request = new XMLHttpRequest();
var result;
var data;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  result = request.response;
  data = result.article;
  buildTable(data);
}

searchbar.addEventListener('keyup', function() {
  var value = this.value;
  console.log(value);
  search(value);
})

function buildTable(data) {
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

function search(value) {
  let filteredData = [];

  for (i = 0; i < data.length; i++) {
    var name = data[i].name.toLowerCase();

    if (name.includes(value)){
      filteredData.push(data[i])
    }

  };
  console.log(filteredData);
  buildTable(filteredData);
}

// Ende