   let question
   let answer

   const generateRandom = () => {

     const firstRandomInt = randomNumber(1, 200)
     const secondRandomInt = randomNumber(1, 200)
     const mathSigns = ["+", "-", "*"]
     const randomSign = randomElement(mathSigns)

     if (randomSign === "+") {
       answer = firstRandomInt + secondRandomInt
       question = `${firstRandomInt} + ${secondRandomInt}`;
     } else if (randomSign === "-") {
       if (firstRandomInt >= secondRandomInt) {
         answer = firstRandomInt - secondRandomInt;
         question = `${firstRandomInt} - ${secondRandomInt}`;
       } else {
         answer = secondRandomInt - firstRandomInt
         question = `${secondRandomInt} - ${firstRandomInt}`;
       }
     } else if (randomSign === "*") {
       answer = firstRandomInt * secondRandomInt
       question = `${firstRandomInt} * ${secondRandomInt}`;
     }
   }


   const getCalcQuiz = () => {
     generateRandom()
     return {
       question,
       answer
     }
   }

   export {
     generateRandom,
     getCalcQuiz,
     question,
     answer
   }
