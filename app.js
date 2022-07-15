// Anfang

let nav = document.querySelector('nav');
let table = document.getElementById('table');
let input = document.getElementById('search-input');
var result, db, item;


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
    
    function itemBtn(item) {
      console.log(item.length);
      for (i = 0; i < item.length; i++)
      item[i].addEventListener('click', function(e) {

        test = e.target.parentElement;// <<<<< HIER LIEGT 
        console.log(test.nextChild);  // <<<<< DAS PROBLEM

        // müsste die ArtNr aus dem zweiten Child kriegen und diese
        // dann per Link *url*?link=921234

      });
    }
    itemBtn(item);
    
  }, 500);

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
})


// Ende