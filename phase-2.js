function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const promise = new Promise((resolve, reject) => {
    if(timeLeft < 1000){
      reject(new Error("You dont have enough time left"))
    }else{
      timeLeft -=1000
      setTimeout(resolve(timeLeft), 1000);
    }
  });

  return promise.then((value)=> {
    console.log("done something")
   return value
  })
}



function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const promise = new Promise((resolve, reject)=> {
    if(timeLeft < 500){
      reject(new Error("You dont have enough time left"))
    }
    timeLeft -=500
    setTimeout(resolve(timeLeft), 500) 
  })

  return promise.then((value) =>{
    console.log("done running on Treadmill")
    return value
  })
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  const promise = new Promise((resolve, reject)=>{
    if(timeLeft < 2000){
      reject(new Error("You dont have enough time left"))
    }
    timeLeft -=2000
    setTimeout(resolve(timeLeft), 2000)
  })
  return promise.then((value)=>{
    console.log("done lifting wieghts")
    return value
  })
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime).
  then((timeRemaining)=>runOnTreadmill(timeRemaining)).
  then((timeRemaining)=>liftWeights(timeRemaining)).
  then((timeRemaining) => console.log(`done working out with ${timeRemaining}s left`))
  .catch(reason => console.error(reason));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
  //   Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left