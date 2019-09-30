const STORE = {
    START: 'start',
    QUESTIONSTATE: 'question',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    END: 'end',
    RESULT: 'result'
};

let currentState, numberRight, numberWrong, currentQuestionIndex;

function loadStart(){
    currentState = STORE.START;
    numberRight = 0;
    numberWrong = 0;
    currentQuestionIndex = 0;

    $('.view-form').html(`
        <p id = "start-text">Are you a master of all things spooky?  Test your knowledge here</p>  
        <input type="button" class = "start" value="Start Quiz" />
        
    `);
}

function loadNextQ(){
    currentState = STORE.QUESTIONSTATE   
    $('.view-form').html(`
        <div class = "scorecard">
        <div id = "scorecard-text">
        <p>Correct: ${numberRight} </p>
        <p>Incorrect: ${numberWrong} </p>
        <p>Question: ${currentQuestionIndex+1} / 5 </p></div></div>
        <p id = "questions-text">${QUESTIONS[currentQuestionIndex].question}</p>
        <fieldset>
            <legend>Select the answer that best fits</legend>
            ${generateAnswerList(QUESTIONS[currentQuestionIndex].answers)}
            <button class = "start" id = "submitbtn" type = "submit"> Submit</button> 
        </fieldset>
   
    `);
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
   let selectedOption = $('input:checked');
   let selectedAnswer = selectedOption.val();
   //console.log(selectedAnswer);
   //console.log(QUESTIONS[currentQuestionIndex].correct);
   if (!$('input[name=answers]:checked').val() ) 
    {
        alert("Please pick an option");
    }
    else{
        if (selectedAnswer === QUESTIONS[currentQuestionIndex].correct){ //if answer is correct
            //console.log("correct");
            numberRight+=1;
             $('.view-form').html(`
             <div class = "scorecard">
            <div id = "scorecard-text">
            <p>Correct: ${numberRight} </p>
            <p>Incorrect: ${numberWrong} </p>
            <p>Question: ${currentQuestionIndex+1} / 5 </p></div></div>
             <h2>Correct!</h2>
            <p class = "explanation">${QUESTIONS[currentQuestionIndex].explanation}</p>
            <button class = "start" id = "nextbtn" type = "submit"> Next</button>`);

            currentState=STORE.CORRECT;
                
        }else if (selectedAnswer != QUESTIONS[currentQuestionIndex].correct) { //if answer is not correct
            numberWrong+=1;
            $('.view-form').html(`
            <div class = "scorecard">
            <div id = "scorecard-text">
            <p>Correct: ${numberRight} </p>
            <p>Incorrect: ${numberWrong} </p>
            <p>Question: ${currentQuestionIndex+1} / 5 </p></div></div>
            <h2>That's the wrong answer</h2>
            <p class = "explanation">The correct answer is ${QUESTIONS[currentQuestionIndex].correct}: ${QUESTIONS[currentQuestionIndex].explanation}</p>
            <button class = "start" id = "nextbtn" type = "submit"> Next</button> `);
            currentState = STORE.INCORRECT;
        }
    }
}

function loadResults(){
    $('.view-form').html(`
    <p>Final results:</p>
    <p>Correct: ${numberRight} <br>
    Incorrect: ${numberWrong}</p>
    <button class = "start" type = "submit"> Restart Quiz</button> 
    `);
    currentState = STORE.END;
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
                currentQuestionIndex +=1;  //increment questions
                currentState = STORE.QUESTIONSTATE;
                if (currentQuestionIndex < QUESTIONS.length){
                    loadNextQ();
                }
                else {
                    loadResults();
                }
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


