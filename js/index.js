const STORE = {
    START: 'start',
    QUESTIONSTATE: 'question',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    END: 'end',
    RESULT: 'result'
};

let currentState, numberRight, numberWrong, currentQuestionIndex

function loadStart(){
    currentState = STORE.START;
    numberRight = 0;
    numberWrong = 0;
    currentQuestionIndex = 0;

    $('.view-form').html(`
        <p id = "start-text">Are you a master of all things spooky?  Test your knowledge here</p>  
        <input type="button" class = "start" value="Start Quiz" />
        <img id = "pumpkin" src="img/pumpkin.png" alt="nerdy pumpkin">
    `);
}

function loadNextQ(){
    currentState = STORE.QUESTIONSTATE   
    numberRight = 0;
    numberWrong = 0;

    $('.view-form').html(`
    <p id = "questions-text">${QUESTIONS[currentQuestionIndex].question}</p>
    <fieldset>
        <legend>Select the answer that best fits</legend>
        ${generateAnswerList(QUESTIONS[currentQuestionIndex].answers)}
        <button class = "start" id = "submitbtn" type = "submit"> Submit</button> 
    </fieldset>
   
    `);
    //currentQuestionIndex +=1;

}



function generateAnswerList(answers){
    let allanswers = "";
        for (let i = 0; i < answers.length; i++){
        allanswers += `<label for = "answer-option">
        <input type = "radio" id = "answerOP" name= "answers" value="${answers[i]}">
            ${answers[i]}
        </label><br>`;
    }
    return allanswers;
    
}

function checkAnswers(){
        //retrieve answer identifier of user-checked radio button
        //perform check: user answer === correct answer
        //update STORE an drender appropriate section
   // });
   //return right or wrong
   let selectedOption = $('input:checked');
   let selectedAnswer = selectedOption.val();
   console.log(selectedAnswer);
   console.log(QUESTIONS[currentQuestionIndex].correct);
   if (selectedAnswer === QUESTIONS[currentQuestionIndex].correct){
        console.log("correct");
        currentState = STORE.RESULT;
   }else{
       $('.view-form').html(`
       <h2>That's the wrong answer</h2>
       <p>The correct answer is ${QUESTIONS[currentQuestionIndex].explanation}`);
   }
}

function loadResults(){
    currentState = STORE.QUESTIONSTATE;
    currentQuestionIndex +=1;  

    $('.view-form').html(`
    <p id = "questions-text">${QUESTIONS[currentQuestionIndex].question}</p>
    <fieldset>
        <legend>Select the answer that best fits</legend>
        ${generateAnswerList(QUESTIONS[currentQuestionIndex].answers)}
        <button class = "start" id = "submitbtn" type = "submit"> Submit</button> 
    </fieldset>
   
    `);
}

function buttonListener(){
    $('main').on('click', '.start', function(event){
        event.preventDefault();
        switch(currentState){
            case STORE.START:
                loadNextQ();
                break;
            case STORE.QUESTIONSTATE:
                checkAnswers()
                break;
            case STORE.RESULT:
                loadResults();
                break;
            case STORE.CORRECT:
            case STORE.INCORRECT:
                //increment questions
                //add answer or next state display state, set state to next, wait to click btn, increment when in next so that can
                // display the results in between questionsS
                //if else load end vs next quest
                break;
            case STORE.END:
                //restart
                loadStart();
                break;
        }
    })
}

$(function(){
    buttonListener();
    loadStart();
});



//question view - displays questions and list of selectable answers
//feedback view - displays feedback including correct answer if user was incorrect and next button
//results view - shows quiz score and replay button


//display questions
//display answers
//let user choose answer
//submit answer
    //correct?
    //wrong?
//next question
    //last question/reset

//function render(){
  //  if (STORE.view === 'start'){
  //      $('intro').show();
  //      $('quiz').hide();
  //      $('status').hide();
   // }
   // else if (STORE.view === 'quiz'){
  //      $('intro').hide();
   //     $('quiz').show();
   //     $('status').show();
  //  }
//}

