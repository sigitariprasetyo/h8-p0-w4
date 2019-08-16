// SHOPPING TIME
function shoppingTime(memberId, money) {
    // you can only write your code here!
    if( memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if( money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    } 

    var dftrBarang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    var obj = {
        memberId : memberId,
        money : money,
        listPurchased : [],
    }
    
    for( var i = 0; i < dftrBarang.length; i++){
        if( money >= 1500000){
            obj.listPurchased.push(dftrBarang[0])
            money -= 1500000
        } else if( money >= 500000){
            obj.listPurchased.push(dftrBarang[1])
            money -= 500000
        } else if( money >= 250000){
            obj.listPurchased.push(dftrBarang[2])
            money -= 250000
        } else if( money >= 175000){
            obj.listPurchased.push(dftrBarang[3])
            money -= 175000
        } else if( money >= 50000){
            obj.listPurchased.push(dftrBarang[4])
            money -= 50000
            break;
        }
    }

    obj.changeMoney = money;
    return obj;
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja