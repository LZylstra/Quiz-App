//questions and answers
const QUESTIONS = [
    {id: 1, 
        question: "Halloween is generally considered to have evolved from what ancient festival?", 
        answers: ["Beltane","Samhain","Vindae","Monkey Brawl"],
        correct: "Samhain",
        explanation: "Although there are many theories on the origin and history of Halloween, it is generally accepted that Halloween dates back to an ancient Celtic festival known as Samhain, or the Celtic New Year."
    },
    {id: 2, 
        question: "In what century did the practice of trick-or-treating begin?", 
        answers: ["14th","18th","20th","16th"],
        correct: "16th",
        explanation: "In North America, trick-or-treating began to develop as a Halloween tradition during the 1920s, but the European tradition of going house-to-house collecting food at Halloween goes back at least as far as the 16th century."
    },
    {id: 3, 
        question: "Which of the following is NOT a term for a scarecrow?", 
        answers: ["Gallybagger","Doodle sack","Mawkin","Bwbach"],
        correct: "Doodle sack",
        explanation: "There are a wide range of alternative names for scarecrows including Hodmedod, Murmet, Hay-man, Gallybagger, Tattie Bogal, Mommet, Mawkin, and Bwbach. Doodle sack is an old English word for bagpipe."
    },
    {id: 4, 
        question: "On Halloween what does seeing a spider mean?", 
        answers: ["You’re going to die in 12 hours","It’s going to rain","You will have good luck","You will have bad luck"],
        correct: "You will have good luck",
        explanation: "If you see a spider on Halloween, it is considered a good luck, as it means the spirit of a loved one is guarding you."
    },
    {id: 5, 
        question: "The first jack-o-lanterns were made of which things?", 
        answers: ["Turnips","Pumpkins","Watermelons","Coconuts"],
        correct: "Turnips",
        explanation: "The first Jack-o-Lanterns were made in Ireland out of hollowed-out turnips"
    }
];

const STORE = {
    //current question
    currentQuestion = 1,
    //users answer choice
    userAnswer,
    //current view
    view = "start",
    //score
    score = 0
}

function generateAnswerList(answers){
    return `
    `
}

function renderQuestionsText(){

}

function handleAnswersSubmitted(){
    $('.user-controls').on('click', '.submit-answer', () => {
        //retrieve answer identifier of user-checked radio button
        //perform check: user answer === correct answer
        //update STORE an drender appropriate section
    });
}

$(function(){
    handleAnswersSubmitted();
}

//intro view - shows welcome message and start button

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

function render(){
    if STORE.view === 'start'){
        $('intro').show();
        $('quiz').hide();
        $('status').hide();
    else if (STORE.view === 'quiz'){
        $('intro').hide();
        $('quiz').show();
        $('status').show();
        }
    }
}