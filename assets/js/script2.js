const displayValue = () =>  {
   
    document.getElementById('result').innerHTML = ''; //CLEAR
     
    let char = document.getElementById('charInput').value;
    let col = document.getElementById('colInput').value;
    let row = document.getElementById('rowInput').value;
    
    // ROW before COL. This is syntantically correct.   
    for (let i = 1; i <= row; i++) {
     document.getElementById('result').innerHTML += '<br>';
      
      for (let i2 = 1; i2 <= col; i2++) {
        document.getElementById('result').innerHTML += char + '&nbsp;&nbsp;';
        document.getElementById('result').style.color = "green";
      }
    }
  }
  
   // TRIGGER
  document.getElementById('btnDisplay').onclick = () => {
    // let char = document.getElementById('charInput').value;
    // let col = document.getElementById('colInput').value;
    // let row = document.getElementById('rowInput').value;
    // displayValue (char, col, row);
    displayValue ();
  }
  
  // CLEAR
  document.getElementById('btnClear').onclick = () => {
    document.getElementById('charInput').value = '';
    document.getElementById('colInput').value = '';
    document.getElementById('rowInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
  