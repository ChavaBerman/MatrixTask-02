function HighLight(ChosenBtn)
{
   //location.reload();-optinal with using SetTimeOut function in order to clear the table
   let table = document.getElementById("MyTable");
   
   for (let i = 0, row; row = table.rows[i]; i++)
      
       for (let j = 0, col; col = row.cells[j]; j++) {

           col.style.backgroundColor = "#000000";
           switch (ChosenBtn) {
               case 1:
                   if (i + j <= table.children[0].childElementCount-1)
                       col.style.backgroundColor = "green";
                   break;
               case 2:
                   if (i== j ||i+j==table.children[0].childElementCount-1)
                       col.style.backgroundColor = "green";
                   break;
                   case 3:
                   if (i + j >= table.children[0].childElementCount-1)
                       col.style.backgroundColor = "green";
                   break;
                   case 4:
                   if (i==0||j==0||i==table.childNodes.length||j==table.children[0].childElementCount-1)
                       col.style.backgroundColor = "green";
                   break;
               
           }
       }

}
// function CreateTable(){ ==>creating the table dynimcally,optinal
// var tablearea = document.getElementById('tablearea'),
//     table = document.createElement('table'),
//     tr = document.createElement('tr');

// tr.appendChild( document.createElement('td') );
// tr.appendChild( document.createElement('td') );

// tr.cells[0].appendChild( document.createTextNode('Text1') )
// tr.cells[1].appendChild( document.createTextNode('Text2') );

// for (var i = 1; i < 4; i++) {
//     table.appendChild(tr.cloneNode( true ));
// }

// tablearea.appendChild(table);}