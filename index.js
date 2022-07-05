function saturdayFun(activity = 'roller-skate'){
  return (`This Saturday, I want to ${activity}!`)
}

///////////////////////////////////////////////////////////////////////

function mondayWork(monday = 'go to the office'){
  return (`This Monday, I will ${monday}.`)
}

////////////////////////////////////////////////////////////////////////

function wrapAdjective(result) {
  return function wrapAdjective(emphatic) {
    return `You are ${result}${emphatic}${result}!`
  };
}
  
