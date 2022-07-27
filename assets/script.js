
// declare button elements
var startButton = document.querySelector(".start-button");
var option1_Button = document.querySelector(".button-1");
var option2_Button = document.querySelector(".button-2");
var option3_Button = document.querySelector(".button-3");
var option4_Button = document.querySelector(".button-4");
var nextButton = document.querySelector("#button-next");
var submitButton = document.querySelector(".button-submit");
// declare optionCard element to control Hidden state
var optionCard = document.querySelector(".option");
var endmessageEl = document.getElementById('end-message');

var scoreEl = document.querySelector(".endScore");

// declare question text element
var quizText= document.querySelector(".question");

// declar option text element x 4
var option1Text= document.querySelector("#option1");
var option2Text= document.querySelector("#option2");
var option3Text= document.querySelector("#option3");
var option4Text= document.querySelector("#option4");

// declare response message to each correct or wrong answer
var answerMessage = document.querySelector("#answer-message");

// Timer element to hold remaining time after a start
var timerEl = document.querySelector("#timer-count");
var timerCount;

// declare state variables to control a win, quiz End and quiz Answered and wrong answer
var isWin = false;
var quizFinish = false;
var isAnswer = false;
var isWrong = false;

// initialize question index to the first one
var currentQuestion = 1;

// Array of questions
var questions = ["Q1: The Condition of an if/else Statment is enclosed within _________.",
"Q2: Which of the following is NOT an API: _________?",
 "Q3: What is nine = 2+5; equal to ?",
  "Q4: What is SDK standing for  _________?",
   "Q5: The Items of an Array is enclosed within _________."];

// declare a master object of 5 arrays holding 4 possible options for each question
var optionText = {quiz_1: ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
                  quiz_2: ['2_Cool API', '2_JQuery', '2_Google Map', '2_Weather.com'],
                  quiz_3: ['3_Nine', '3_Seven', '3_undefined', '3_Sixteen'],
                  quiz_4: ['4_Safe day kite', '4_Second design Kerb', '4_Software development kit', '4_Standard design kit'],
                  quiz_5: ['5_Quotes', '5_Curly brackets', '5_Parentheses', '5_Square brackets']

}

// an array holding the correct answer to each question
var correctAnswer = ["option_3", "option_1", "option_2", "option_3", "option_4"];

answerMessage.textContent = '';

// click Start button, display the first question and start the timer
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.disabled= true;
  document.getElementById('introText').textContent='';
  // set optionCard to visible after clicking start
  optionCard.children[0].setAttribute("class", "visible");
  // set nextButton to visible
  nextButton.setAttribute("class", "visible");

  // display question text and 4 option texts
  quizText.textContent = questions[currentQuestion-1];
  option1Text.textContent = optionText.quiz_1[0];
  option2Text.textContent = optionText.quiz_1[1];
  option3Text.textContent = optionText.quiz_1[2];
  option4Text.textContent = optionText.quiz_1[3];
  
  countdown();
}

// add a click event, when option Button clicked, check option against correctAnswer
optionCard.addEventListener("click", function(event) {
  // locate the element being clicked
  var element = event.target;

  // Check if the clicked element was a button
  if (element.matches("button")) {
    var choice = element.getAttribute("data-option");
    isAnswer = true;

    if (choice === correctAnswer[currentQuestion-1] ) {      
      answerMessage.textContent = 'Correct Answer! Press Next Question';

    }  else {      
      answerMessage.textContent = 'Wrong! Time -3 sec, Press Next Question';
      isWrong = true;
      // when isWrong = true, setInterval method will deduct 3s from timeLeft
    } 
  }  
});

// and click event to nextButton
nextButton.addEventListener("click", function() { 

  if(currentQuestion<5 && isAnswer === true) {
  currentQuestion++;
  // prepare the key string corresponding to a key in the master object on line 49
  var key = "quiz_".concat(currentQuestion);
  isAnswer = false;

  //using the key string, fetch the array of 4 options from the master object
  quizText.textContent = questions[currentQuestion-1];
  option1Text.textContent = optionText[key][0];
  option2Text.textContent = optionText[key][1];
  option3Text.textContent = optionText[key][2];
  option4Text.textContent = optionText[key][3];

  } else if (currentQuestion === 5) {
    quizFinish = true;
    answerMessage.textContent = 'You answer all questions. The Quiz is done, thank you for joining!';
  }
});

// Use the `setInterval()` method to call a function to be executed every 1 second
function countdown() {
  var timeLeft = 60;
    // TODO: 
      
   // function() arugment decides if user is penalized for a wrong answer
    var timeInterval = setInterval(function() 
    {
      if(timeLeft > 3 && quizFinish === false && !isWrong) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft ===3 && quizFinish === false && !isWrong) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if(timeLeft > 3 && quizFinish === false && isWrong) {
        isWrong = false;
        timeLeft= timeLeft-3 ;
        timerEl.textContent = timeLeft;

      } else if(timeLeft ===3 && quizFinish === false && isWrong){
        isWrong = false;
        timeLeft= timeLeft-3 ;
        timerEl.textContent = timeLeft;

      // when all questions are answered or no time left, quiz ends and display endMessage
      // store the time left to localStorage under key: highscore
      } else if (timeLeft === 0 || quizFinish === true && !isWrong){
        timerEl.textContent = 'Time Is Up!';
        clearInterval(timeInterval);    
        localStorage.setItem("highscore", timeLeft);    
        endMessage();    
    
      } else {
        timerEl.textContent = timeLeft;
        timeLeft--;
      }      
    } , 1000);    
 }

 // set optionCard, questionText and buttons to hidden, set endmessage element to visible
 function endMessage() {
    var finalScore = localStorage.getItem("highscore")
    nextButton.disabled = true;
    quizText.textContent = ' All Done!'
    // set to visible
    endmessageEl.setAttribute("class", "visible");
    // set to hidden
    optionCard.children[0].setAttribute("class", "hidden");
    nextButton.setAttribute("class", "hidden");
    scoreEl.textContent = finalScore;
 }

 // when submit button is click, store user's input name to locaStorage
 submitButton.addEventListener("click", function() {
  
  var name = document.getElementById("username").value;  
  localStorage.setItem("username", name);
 });









