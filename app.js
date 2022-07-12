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
  db = result.article;
  buildTable(db);
}


// Display Table
function buildTable(db) {
  table.innerHTML = '';

  for (i = 0; i < db.length; i++) {
          var row = `<tr class="item">
                    <td>${db[i].name}</td>
                    <td>${db[i].artnr}</td>
                    <td>${db[i].clients}</td>
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
        console.log(it);
      });
    }
    itemBtn(item);
    
  }, 500);
}


// Searchbar Filter
searchbar.addEventListener('keyup', function() {
  var value = this.value;
  var filteredDb = [];

  console.log(value);

  for (i = 0; i < db.length; i++) {
    var name = db[i].name.toLowerCase();
    var artnr = db[i].artnr;

    if (name.includes(value)){
      filteredDb.push(db[i])
    } else if (!/\D/.test(value)){
      filteredDb.push(db[i])
    }

  };

  buildTable(filteredDb);
})


// Show Item Details
//function showInfo(it) { }

// Ende