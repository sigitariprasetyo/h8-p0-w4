// CEEK AB
function checkAB(num) {
    // you can only write your code here!
    var hasil = false;

    for( var i = 0; i < num.length; i++){
        if( num[i] == 'a'){
            if( num[i + 4] == 'b'){
                hasil = true;
            }
        } else if(num[i] == 'b'){
            if( num[i + 4] == 'a'){
                hasil = true;
            }
        }
    }

return hasil;
}
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true 
  console.log(checkAB('bacon and meat')); // false