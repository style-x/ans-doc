// Anfang

let nav = document.querySelector('nav');
let main = document.querySelector('main');
let table = document.querySelector('table');
let item = document.querySelectorAll('item');
let searchbar = document.getElementById('search-input');
var result;
var data;
var it;


// Fetch db.json
let requestURL = 'https://style-x.github.io/ans-doc/db.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  result = request.response;
  data = result.article;
  buildTable(data);
}


// Display Table
function buildTable(data) {
  table.innerHTML = '';

  for (i = 0; i < data.length; i++) {
          var row = `<tr class="item">
                    <td>${data[i].name}</td>
                    <td>${data[i].artnr}</td>
                    <td>${data[i].clients}</td>
                </tr>`
      table.innerHTML += row;
  };
  setTimeout(function() {
    item = document.querySelectorAll('.item');
    console.log(item.length);
    
    function itemBtn(item) {
      for (i = 0; i < item.length; i++)
      item[i].addEventListener('click', function() {
        it = item[i];
        showInfo(it);
      });
    }
    itemBtn(item);
    
  }, 500);
}


// Searchbar Filter
searchbar.addEventListener('keyup', function() {
  var value = this.value;
  console.log(value);
  search(value);
})

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


// Show Item Details
function showInfo(it) {
  console.log(it);
}

// Ende