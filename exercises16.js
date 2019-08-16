// Graduates
function graduates (students) {
    // Code disini
    var obj0 = {}
    if( students.length === 0){
        return obj0
    }

    var arrFoxes = []
    var arrWolves = []
    var arrTigers = []
    var obj = {}

    for(var i = 0; i < students.length; i++){
        if(students[i].class === 'foxes' && students[i].score > 75 ){
            var objFoxes = {}
                objFoxes.name = students[i].name 
                objFoxes.score = students[i].score
                arrFoxes.push(objFoxes)
                obj.foxes = arrFoxes
        }else if(students[i].class === 'wolves' && students[i].score > 75 ){
            var objWolves = {}
                objWolves.name = students[i].name 
                objWolves.score = students[i].score
                arrWolves.push(objWolves)
                obj.wolves = arrWolves
        }else if(students[i].class === 'tigers' && students[i].score > 75 ){
            var objTigers = {}
                objTigers.name = students[i].name 
                objTigers.score = students[i].score
                arrTigers.push(objTigers)
                obj.tigers = arrTigers
        }
    }
return obj
}

// TEST CASE
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}