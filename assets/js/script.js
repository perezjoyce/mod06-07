// BEST PRACTICE IS TO LEAVE ARGUMENTS BLANK AND DECLARE THEM BEFORE THE CODE INSIDE THE FUNCTION
const displayValue = () => {
  
    document.getElementById('result').innerHTML = ''; // TO PREVENT DISPLAY BUTTON FROM FUNCTIONING MORE THAN ONCE
    
    // YOU CAN DECLARE AND PLACE THESE VARIABLES HERE.    
   let char = document.getElementById('charInput').value;
   let col = document.getElementById('colInput').value;
    
    for (let i = 1; i <= col; i++) {
      document.getElementById('result').innerHTML += char + '&nbsp;';
      document.getElementById('result').style.color = "blue";
    }
  }
  
  // TRIGGER
  document.getElementById('btnDisplay').onclick = () => {
    // let char2 = document.getElementById('charInput').value;
    // let col2 = document.getElementById('colInput').value;
    // getValue (char2, col2);
    displayValue (); // ARGUMENTS ARE STATED INSIDE THE FUNCTION; SEE ABOVE
  }
  
  // CLEAR
  document.getElementById('btnClear').onclick = () => {
    document.getElementById('charInput').value = '';
    document.getElementById('colInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
  