//'use strict';
$(function() {
  var questions = [
    {
      question: "Who won the NCAA college football National Title in 1980?",
      choices: [
        { choice: "Alabama"  },
        { choice: "Georgia" },
        { choice: "Georgia Tech" },
        { choice: "Clemson" },
      ],
      answer: "Georgia",
    },
    {
      question: "Most homeruns by a Brave?",
      choices: [
        { choice: "Chipper Jones" },
        { choice: "Hank Aaron" },
        { choice: "Dale Murphy" },
        { choice: "Eddie Mathews" },
      ],
      answer: "Hank Aaron",
    },
    {
      question: "Most wins by a Brave?",
      choices: [
        { choice: "Greg Maddux" },
        { choice: "Warren Spahn" },
        { choice: "John Smoltz" },
        { choice: "Tom Glavin" },
      
      ],
      answer: "Warren Spahn"
    },
    {
      question: "Year the Braves moved to Atlanta?",
      choices: [
        { choice: "1972" },
        { choice: "1969" },
        { choice: "1967" },
        { choice: "1970" },
      
      ],
      answer: "1969"
    },
    {
      question: "What year did the Atlanta Braves win the World Series?",
      choices: [
        { choice: "1991" },
        { choice: "1995" },
        { choice: "1996" },
        { choice: "1992" },
      
      ],
      answer: "1995"
    },
    {
      question: "Who is the last Brave to win the MVP?",
      choices: [
        { choice: "Chipper Jones" },
        { choice: "Hank Aaron" },
        { choice: "Dale Murphy" },
        { choice: "Eddie Mathews" },
      
      ],
      answer: "Chipper Jones"
    },
    {
      question: "Most recent Heisman trophy winner from Georgia?",
      choices: [
        { choice: "Bo Jackson" },
        { choice: "Herschel Walker" },
        { choice: "Peyton Manning" },
        { choice: "Terrell Davis" },
      
      ],
      answer: "Herschel Walker"
    },
    {
      question: "Current Georgia Head Coach?",
      choices: [
        { choice: "Mark Richt" },
        { choice: "Kirby Smart" },
        { choice: "Jim Donnan" },
        { choice: "Vince Dooley" },
      
      ],
      answer: "Kirby Smart"
    },
    {
      question: "Who is Georgia's starting Quarterback?",
      choices: [
        { choice: "Jacob Eason" },
        { choice: "Jake Fromm" },
        { choice: "Matthew Stafford" },
        { choice: "Aaron Murry" },
      ],
      answer: "Jake Fromm"
    },
    {
      question: "The year Georgia last won the SEC?",
      choices: [
        { choice: "2003" },
        { choice: "2005" },
        { choice: "2011" },
        { choice: "2012" },
      ],
      answer: "2005"
    }
  ];
  
  var currentQuestionId = 0;
  var currentQuestion = 0;
  var correctAnswers = 0;
 
  //  var formButton = $('#nextButton');

  function loadQuestion(questionId) {
    currentQuestion = questions[questionId];
    $('#question').text(currentQuestion.question);
    $("#choices").html('');
    
    var i;
    for(i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      console.log(choice);
      var input = $('<input/>', { name: 'choice', type: 'radio', value: choice.choice});
      var label = $('<label/>').text(choice.choice);
      var br = $('<br/>');
      $("#choices").append(input).append(label).append(br);
    }
  }
  
  
function whichQuestion() {
    var currentQuestion = 1 + currentQuestionId;
    var lotOfQuestions = currentQuestion  + ' of ' + questions.length;
    $('#questionNumber').text(lotOfQuestions);
} 
//  function wrongAnswer() {
  //  var selectedChoice = $('input[name=choice]:checked').val();
    //if (selectedChoice === !currentQuestion.answer) {
      
  //  }
  //}
  
  
  function checkAnswer() {
    var selectedChoice = $('input[name=choice]:checked').val();
 
    console.log({selectedChoice: selectedChoice});
      
    
    if (selectedChoice === currentQuestion.answer) {
      correctAnswers++;
      $('#correct').hide();
    }
    
   else { 
        
       $('#correctAnswer').html(currentQuestion.answer);
       $('#correctAnswer').parent().css("display", "block");
       
       
      }
     
      var score = correctAnswers + ' of ' + (currentQuestionId + 1);
      $('#results').text(score);
  
       
      
      
  }
  
  function prepQuiz() {
    $('#quiz-app').hide();
    $('#resultsHolder').hide();
    $('#resetPage').hide();
    $('#title').show();
    correctAnswers = 0;
    currentQuestionId = 0;
    $('#results').text(null);
  }
  
  
  
  $('#startQuiz').click(function(e) {
    e.preventDefault();
    $('#title').hide();
    $('#quiz-app').show();
    $('#resultsHolder').show();
    $('#questionOf').show();
    whichQuestion();
  });
  
  $('#quiz-app').submit(function(e) { 
    console.log("nextButton click");
    e.preventDefault();
    checkAnswer();
    currentQuestionId++;
    whichQuestion();
    
    
    if (currentQuestionId >= questions.length) {
    $('#quiz-app').hide();
    $('#questionOf').hide();
    $('#correct').hide();
    $('#resetPage').show();
    $('#numbers').show();
    
    } else {
      loadQuestion(currentQuestionId);  
    }
  });
  
  $('#restartQuiz').click(function(e) {
    e.preventDefault();
    prepQuiz();
    loadQuestion(currentQuestionId);
    
  });
  
  prepQuiz();
  loadQuestion(currentQuestionId);
});