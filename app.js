// Anfang

let nav = document.querySelector('nav');
let table = document.getElementById('table');
let item = document.querySelectorAll('item');
let input = document.getElementById('search-input');
var result, db;


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
                    <td>${db[i].clients.join(', ')}</td>
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
  var filter, tr, td, i, txtValue, searchFor;
  searchFor = document.getElementById('searchFor').value;
  filter = input.value.toUpperCase();
  fillter = input.value;
  tr = table.getElementsByTagName("tr");

  console.log(searchFor);

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {

    if (searchFor == "name") {
      td = tr[i].getElementsByTagName("td")[0];

      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } else if (searchFor == "artnr") {
      td = tr[i].getElementsByTagName("td")[1];

      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } else if (searchFor == "clients") {
      td = tr[i].getElementsByTagName("td")[2];

      txtValue = td.textContent || td.innerText;
      //if (txtValue.includes(filter)) {
        if (txtValue.search(new RegExp(fillter, "i")) == -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }

  }
})


// Ende