// Digit Perkalian Minimum
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var faktoral = [];
    for(var i = 1; i <= angka; i++){
        for ( var j = 1; j <= angka; j++){
            if( i * j === angka){
                faktoral.push([i + '*' + j]);
            }
        }
    }

    var hasil = [];
    for( var x = 0; x < faktoral.length; x++){
        hasil.push(faktoral[x].toString().length-1)
    }

    var hasilTerkecil = hasil.sort((a, b) => a - b);
    return hasilTerkecil[0]
}

  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2