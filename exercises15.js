// Highest Score
function highestScore (students) {
    // Code disini
    var hasil0 ={}
    if( students.length === 0){
        return hasil0;
    }

    var objFoxes = {}
    var objWolves = {}
    var objTigers = {}
    var obj = {}

    for( var i = 0; i < students.length; i++){
        if( students[i].class === 'foxes'){
            if(objFoxes.score){
                objFoxes.score = Math.max(students[i].score, objFoxes.score)
            }else{
                objFoxes.name = students[i].name
                objFoxes.score = students[i].score
                obj.foxes = objFoxes
            }
        } else if( students[i].class === 'wolves'){
            if(objWolves.score){
                objWolves.score = Math.max(students[i].score, objWolves.score)
            }else{
                objWolves.name = students[i].name
                objWolves.score = students[i].score
                obj.wolves = objWolves
            }
        } else if( students[i].class === 'tigers'){
            if(objTigers.score){
                objTigers.score = Math.max(students[i].score, objTigers.score)
            }else{
                objTigers.name = students[i].name
                objTigers.score = students[i].score
                obj.tigers = objTigers
            }
        }
    }
    return obj
}
  // TEST CASE
  console.log(highestScore([
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
  
//   // {
//   //   foxes: { name: 'Dimitri', score: 90 },
//   //   wolves: { name: 'Alexei', score: 85 }
//   // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}