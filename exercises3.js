// MENCARI MEDIAN
function cariMedian(arr) {
    // you can only write your code here!
    var index1 = Math.floor(arr.length/2);
    var index2 = index1;
    var median = 0;

    if( arr.length % 2 === 0){
        median = Math.abs(arr[index1-1] + arr[index2]) / 2;
    } else {
        median = arr[index1];
    }

    return median
}

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5