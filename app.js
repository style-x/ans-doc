let nav = document.querySelector('nav');
let table = document.getElementById('table');
let input = document.getElementById('search-input');
var db;


// Fetch db.json
let requestURL = 'https://style-x.github.io/ans-doc/db.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  let result = request.response;
  db = result.article;
  buildTable(db);
}


// Display Table
function buildTable(db) {
  table.innerHTML = '';
  for (i = 0; i < db.length; i++) {
          var row = `<tr>
                    <td>${db[i].name}</td>
                    <td>${db[i].artnr}</td>
                    <td>${db[i].clients.join(', ')}</td>
                </tr>`
      table.innerHTML += row;
  };
  setTimeout(function() {
    addRowHandlers();
  }, 500);
}


// Row Click Handler
function addRowHandlers() {
  let rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    let currentRow = table.rows[i];
    let createClickHandler = function(row) {
      return function() {
        let cell = row.getElementsByTagName("td")[1];
        let id = cell.innerText;
        console.log("id:" + id);
        //showInfo <<<
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}


// Input Filter
input.addEventListener('keyup', function() {
  var filter, tr, td, i, txtValue, searchFor;
  filter = input.value.toUpperCase();
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    //td += tr[i].getElementsByTagName("td")[2];

    txtValue = td.innerText + td2.innerText;

    if (txtValue.indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }

  }
  setTimeout(function() {
    addRowHandlers();
  }, 500);
})


function showInfo(item) {
  table.innerHTML = '';
  for (i = 0; i < item.length; i++) {
          var row = `<tr>
                      <td>Name:</td>
                      <td>${db[i].name}</td>
                    </tr><tr>
                      <td>ArtikelNr:</td>
                      <td>${db[i].artnr}</td>
                    </tr><tr>
                      <td>Kunden:</td>
                      <td>${db[i].clients.join(', ')}</td>
                    </tr><tr>
                      <td>Text:</td>
                      <td>${db[i].text.join('<br><br>')}</td>
                    </tr>`
      table.innerHTML += row;
  };
}