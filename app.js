// Anfang

let nav = document.querySelector('nav');
let table = document.getElementById('table');
let item = document.querySelectorAll('item');
let input = document.getElementById('search-input');
let searchFor = document.getElementById('searchFor');
var result;
var db;
var test = 0;

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
    //console.log(item.length);
    
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


// Input Filter
input.addEventListener('keyup', function() {
  var filter, tr, td, i, txtValue;
  filter = input.value.toUpperCase();
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {

    if (searchFor == text) {
      td = tr[i].getElementsByTagName("td")[0];

      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } else if (searchFor == artnr) {
      td = tr[i].getElementsByTagName("td")[0];

      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }

  }
})


// Ende