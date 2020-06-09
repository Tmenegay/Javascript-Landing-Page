//  This function is enclosed in parenthesis, something you haven't seen yet
//  This type of function is invoked immediately, AKA Immediately-Invoked Function Expression
//  IIFE, pronounced iffy

(function() 
{
  function buildQuiz() 
  {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
	// observe the => syntax, which is basically the same as using return
	
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) 
	  {
        // ...add an HTML radio button, use the push method to add an array item
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() 
  {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) 
	  {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else 
	  {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

 /* 
    The purpose of this assignment is for you to create at least five (5) 
      JavaScript quiz questions.
	  
	It's also a good lesson in observing functional code to clarify the concepts

*/
	  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = 
  [
    {
      question: "Why are cookies necessary?",
      answers: 
	  {
        a: "To submit forms.",
        b: "To make a web application remember something about the client.",
        c: "To notify the user that they need to submit a favorite color."
      },
      correctAnswer: "b"
    },
    {
      question: "What is IIFE?",
      answers: 
	  {
        a: "A JS function that runs as soon as it is defined.",
        b: "A JS function that only runs if called.",
        c: "A JS function that is only used to create cookies."
      },
      correctAnswer: "a"
    },
    {
      question: "Why are IIFE's important?",
      answers: 
	  {
        a: "For privacy purposes.",
        b: "To hide other functions",
        c: "To access outside the function"
      },
      correctAnswer: "a"
    },
    {
      question: "What syntax creates a cookie in JavaScript",
      answers: 
    {
        a: "document.cookie = \"username=John Doe\";",
        b: "dcmnt.cookie = \"username=John Doe\"",
        c: "cookie.document = \"username = John Doe\""
      },
      correctAnswer: "a"
    },
    {
      question: "How do you set a cookie?",
      answers: 
    {
        a: "With an if statement.",
        b: "With a for statement.",
        c: "With a function"
      },
      correctAnswer: "c"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
