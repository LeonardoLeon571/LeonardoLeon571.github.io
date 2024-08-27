var SCR_HOME = 0;
var SCR_QUIZ = 1;
var SCR_NAY  = 2;
var SCR_YAY  = 3;

var QUESTION_LIST = [

	{
		"display": "Are you between the ages of 18 and 50?",
		"isYes": true
	},
	{
		"display": "Have you been diagnosed with irritable bowel syndome?",
		"isYes": false
	},
	{
		"display": "What about inflammatory bowel disease?",
		"isYes": false
	},
	{
		"display": "Do you have (or have you ever had) bowel cancer?",
		"isYes": false
	},
	{
		"display": "Did you live in the UK between 1980 and 1996 (6 months or more)?",
		"isYes": false
	},
	{
		"display": "In the last year, have you worked in a hospital where you've been in contact with patients or their waste?",
		"isYes": false
	}
]

function quizSuccess() {
	
	var currentQuestionIndex = Number($("#questionScreenIndex").val());
	var nextQuestionIndex = currentQuestionIndex + 1;
	if (currentQuestionIndex == QUESTION_LIST.length - 1) {
		screenSetup(SCR_YAY);
	}
	else {
		displayQuestion(nextQuestionIndex);
	}
}

function quizFail() {
	screenSetup(SCR_NAY);
}

function displayQuestion(questionId) {
	
	var question = QUESTION_LIST[questionId];
	if (question.isYes) {
		
		$("#quizYes").attr("onclick","quizSuccess()");
		$("#quizNo").attr("onclick","quizFail()");
	}
	else {
		
		$("#quizYes").attr("onclick","quizFail()");
		$("#quizNo").attr("onclick","quizSuccess()");
	}
	$("#questionScreenIndex").val(questionId);
	$("#questionScreenText").html(question.display);
}

function screenSetup(SCR) {
	
	switch (SCR) {
		
		case SCR_YAY:
			
			hideStartupMode();
			hideQuizMode();
			hideIneligible();
			showEligible();
			break;
			
		case SCR_NAY:
		
			hideStartupMode();
			hideQuizMode();
			hideEligible();
			showIneligible();
			break;
		
		case SCR_QUIZ:
			
			hideStartupMode();
			hideIneligible();
			hideEligible();
			showQuizMode();
			break;
		
		case SCR_HOME:
		default:
		
			hideQuizMode();
			hideIneligible();
			hideEligible();
			showStartupMode();
			break;
	}
}

function startQuizMode() {
	displayQuestion(0);
	screenSetup(SCR_QUIZ);
}

function cancelQuizMode() {
	screenSetup(SCR_HOME);
}

function hideIneligible() {
	var e = $("#ineligibleScreen");
	e.css("display", "none");
}

function showIneligible() {
	var e = $("#ineligibleScreen");
	e.css("display", "block");
}

function hideEligible() {
	var e = $("#eligibleScreen");
	e.css("display", "none");
}

function showEligible() {
	var e = $("#eligibleScreen");
	e.css("display", "block");
}

function hideQuizMode() {
	var e = $("#questionScreen");
	e.css("display", "none");
}

function showQuizMode() {
	var e = $("#questionScreen");
	e.css("display", "block");
}

function hideStartupMode() {
	var e = $("#startupScreen");
	e.css("display", "none");
}

function showStartupMode() {
	var e = $("#startupScreen");
	e.css("display", "block");
}

(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
