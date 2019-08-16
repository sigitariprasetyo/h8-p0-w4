// TOKO X
function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var hasil = []
    if( shoppers.length === 0){
        return hasil;
    }

    var objSepatu = {
        product : 'Sepatu Stacutta',
        shoppers : [],
        leftOver : listBarang[0][2],
        totalProfit : 0
    }
    var objBaju = {
        product : 'Baju Zoro',
        shoppers : [],
        leftOver : listBarang[1][2],
        totalProfit : 0
    }
    var objSweater = {
        product : 'Sweater Uniklooh',
        shoppers : [],
        leftOver : listBarang[2][2],
        totalProfit : 0
    }

    for(var i = 0; i < shoppers.length; i++){
            if( shoppers[i].product === 'Sepatu Stacattu' && objSepatu.leftOver >= shoppers[i].amount){
                objSepatu.shoppers.push(shoppers[i].name)
                objSepatu.leftOver = objSepatu.leftOver - shoppers[i].amount
                objSepatu.totalProfit = objSepatu.totalProfit + (shoppers[i].amount * 1500000)
            } else if( shoppers[i].product === 'Baju Zoro' && objBaju.leftOver >= shoppers[i].amount){
                objBaju.shoppers.push(shoppers[i].name)
                objBaju.leftOver = objBaju.leftOver - shoppers[i].amount
                objBaju.totalProfit = objBaju.totalProfit + (shoppers[i].amount * 500000)
            } else if( shoppers[i].product === 'Sweater Uniklooh' && objSweater.leftOver >= shoppers[i].amount){
                objSweater.shoppers.push(shoppers[i].name)
                objSweater.leftOver = objSweater.leftOver - shoppers[i].amount
                objSweater.totalProfit = objSweater.totalProfit + (shoppers[i].amount * 175000)
            }
        
    }
    hasil.push(objSepatu)
    hasil.push(objBaju)
    hasil.push(objSweater)

    return hasil
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]