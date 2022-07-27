# challenge_4_Cool-Javascript-quiz

This is a html and JavaScript source-code for a Coding Quiz Challenge which is timed session for a series of multiple-choice questions each having 4 possible options. When given wrong answer, 3 sec is deducted from the time left, the quiz come to an end when either all questions get answered or time is up.  Then, next messages appear asking user to leave his/her name, which will be displayed on another page showing the score as the remaining time left ending the quiz.

The completed html and JavaScript source-code are available in the following Github repo as Master branch @, https://github.com/mikehui1124/challenge_4_Cool-Javascript-quiz
The deployed URL of webpage is available in Github Page @ 
https://mikehui1124.github.io/challenge_4_Cool-Javascript-quiz/index.html

•	index.html, score.html

•	script.js, score.js

•	style_main.css, style_score.css

Brief description

The main page display instructions of the quiz at the beginning. A timer starts and each question is displayed in turn when user clicks Start button. A 3-sec deduction applies when a wrong answer is selected.
The second page opens when user submit his name to the quiz, then a high scores board emerges with the user’s input name. High Score record can be reset, or user may return to the main page and re-join the quiz challenge again for higher score.

Snapshot of Main page and the Second page

![image](https://user-images.githubusercontent.com/105307687/181306423-6729122b-eb7e-4d38-ba55-532e151a52f0.png)

![image](https://user-images.githubusercontent.com/105307687/181306465-09198809-b1aa-4b55-a3c7-531670295c0b.png)


Acceptance criteria

The application will meet the following criteria expected by a quiz user,

-	Opening the application, when clicking a start button, a timer starts and I’m presented with a question
-	When I answer a question, I am presented with another question
-	When I answer a question incorrectly, time is deducted from the timer
-	When all questions are answered or the timer reaches 0, the game is over.
-	When the game is over, I can save my name and score


Validation of Acceptable Answer to each question 

Starting the quiz, user has to press one of the option buttons to submit answer properly, then press the Next Quiz button, 
before the next question emerges. Attempt to skip question by press Next Button directly won’t work.

![image](https://user-images.githubusercontent.com/105307687/181306599-c46bb35a-ef5e-4d39-971c-2bb14d9e5cd4.png)


Special Features to Quiz and Validation Functionality 

Two advanced features in JavaScript are used to realize the main purpose of quiz and the required validations, 
while keeping the code clean and concise. The main JavaScript file is completed without the use of JQuery API in roughly 180 lines only.

-	Firstly, a master object is created to hold the arrays of 4 possible options by specific key strings for each question, awaiting to be 
called when rendering the possible choices later. Next, specific key string is constructed for each question, which passes back to the
master object to fetch the right array of 4 possible options (ie. using objectName[“key string”][array index] syntax)

![image](https://user-images.githubusercontent.com/105307687/181306782-c7099261-5758-431a-a226-4f6621f32c2d.png)
![image](https://user-images.githubusercontent.com/105307687/181306811-921e9b05-cced-4c20-8c43-72cff8768e48.png)


-	Secondly, the validation of submitted answer and time penalty is realised using one setInterval() method. Firstly, the method controls 
normal countdown and the time-up response as usual. In addition, before the last question is answered, the same method also control time 
penalty and update the remaining time when user submit a wrong answer. This arrangement consolidates the main validation logic in one method and keep the code concise.

![image](https://user-images.githubusercontent.com/105307687/181306907-7554efa3-6dfa-497f-8261-b2b3384be697.png)






