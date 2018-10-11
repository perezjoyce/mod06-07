//DECLARE VARIABLES 
let char = document.getElementById('charInput');
let col = document.getElementById('colInput');
let row = document.getElementById('rowInput'); 

let result = document.getElementById('result');
let result2 = document.getElementById('result2'); 


const displayValue = () =>  {

  // FOR DISPLAY BUTTON TO ONLY WORK ONCE PER SET OF ENTRY
  result.innerHTML= '';
  result2.innerHTML = ''; 
  
  //VARIABLES -- I DON'T UNDERSTAND WHY I USING GLOBAL VARIABLES char, col and row didn't work. I had to change them to char2, col2, and row2 -- respectively.
  
  let char2 = char.value;
  let col2 = col.value;
  let row2 = row.value; 
  
  // ERROR NOTIFICATION
   if (char2 == "") {
     result.innerHTML += "character is missing" + '<br>';
   }
   
  if (row2 == "") {
    result.innerHTML += "row is missing" + '<br>';
  }

  if (col2 == "") {
    result.innerHTML += "column is missing" + '<br>';
  }
  
    // ROW before COL. ALWAYS.  
    for (let i = 1; i <= row2; i++) {
     result2.innerHTML += '<br>';
    
      for (let i2 = 1; i2 <= col2; i2++) {
        result2.innerHTML += char2 + '&nbsp;'; 
      }
   }
}

 // TRIGGER
document.getElementById('btnDisplay').onclick = () => {
  result.style.color = "red"; 
  result2.style.color = "black"; 
  displayValue ();
}

// CLEAR
document.getElementById('btnClear').onclick = () => {
  char.value = '';
  col.value = '';
  row.value = '';
  result.innerHTML = '';
  result2.innerHTML = '';
}
