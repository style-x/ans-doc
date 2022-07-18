let nav = document.querySelector('nav');
let table = document.getElementById('table');
let input = document.getElementById('search-input');
let homeBtn = document.getElementById('homeBtn');
var db, searchFor;


homeBtn.addEventListener('click', buildTable); // hier muss reload her


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
          var row = `<tr class="items">
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
        searchFor = cell.innerText;
        showInfo(searchFor);
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }
}


// Input Filter
input.addEventListener('keyup', function() {
  var filter, tr, td, i, txtValue;
  filter = input.value.toUpperCase();
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];

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


function showInfo(searchFor) {
  table.innerHTML = '';
  
  function getItem(searchFor) {
    return db.filter(
      function(db) {
        return db.artnr == searchFor;
      }
    );
  }
  
  var found = getItem(searchFor);

  var row = `<tr>
              <td>Name:</td>
              <td>${found[0].name}</td>
            </tr><tr>
              <td>ArtikelNr:</td>
              <td>${found[0].artnr}</td>
            </tr><tr>
              <td>Kunden:</td>
              <td>${found[0].clients.join(', ')}</td>
            </tr><tr>
              <td>Text:</td>
              <td>${found[0].text.join('<br><br>')}</td>
            </tr>`

  table.innerHTML += row;

};
