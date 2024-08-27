var SCR_HOME = 0;
var SCR_QUIZ = 1;
var SCR_NAY  = 2;
var SCR_YAY  = 3;

var QUESTION_LIST = [

	{
		"id": 0,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	},
	{
		"id": 1,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	},
	{
		"id": 2,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	},
	{
		"id": 3,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	},
	{
		"id": 4,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	},
	{
		"id": 5,
		"display": "Are you between the ages of 18 and 50?",
		"correct": true
	}
]

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
