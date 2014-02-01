window.onload = function () {
    (function(undefined) {
	"use strict";

	var state = {
	    survived : 0,
	    timer    : 15
	};

	var game;
	var popup;
	var popupClear;

	function startCountdown() {
	    var progressBar = document.getElementById("warning-bar");

	    progressBar.classList.remove("warning-animation");
	    flushCSSCache(progressBar);
	    progressBar.classList.add("warning-animation");

	    game = window.setTimeout(loseGame, state.timer * 1000);
	};

	function endCountdown() {
	    window.clearTimeout(game);
	};

	function restartCountdown() {
	    endCountdown();
	    state.survived++;
	    startCountdown();
	};

	function loseGame() {
	    window.clearTimeout(game);
	    displayEndMessage();
	    resetGame();
	};

	function displayEndMessage() {
	    alert("The general public has ousted you as the emergency waffle coordinator. You opened the strategic reserves " + state.survived + " times. Thanks for playing :)");
	};

	function resetGame() {
	    state.survived = 0;
	};

	function initGame() {
	    var button = document.getElementById("waffle-button");
	    button.onclick = restartCountdown;
	    startCountdown();
	    makePopup();
	};

	function flushCSSCache(elem) {
	    elem.offsetHeight;
	}

	var popupSayings = [
			    'Riots spark after Leader jokes "Let them eat Pancakes"',
			    'People cry out "let go of your waffles"',
			    'Syrup prices at all time high',
			    'The situation has gotten pretty waffle',
			    'Rumers emerge of hidden lake of batter',
			    'Waffle lines becoming longer every day',
			    'Stocks in Breakfast Co plunge',
			    'Factory Owners arrested after discovery of hidden waffle cache',
			    'Blueberry sales plumet as waffle supply dwindles',
			    'People reportedly driven mad by attempting to eat crepes',
			    'News ticker used for silly joke'
        ];

	function makePopup() {
	    var timer = getRandomInt(2000, 11000);
	    popup = window.setTimeout(displayPopup, timer);
	    popupClear = window.setTimeout(clearPopup, timer + 2000)
	}

	function displayPopup() {
	    var index = getRandomInt(0, popupSayings.length - 1);
	    var el = document.getElementById("popup-text");
	    el.innerHTML = popupSayings[index];
	    window.clearTimeout(popup);
	    console.log(index);
	}

	function clearPopup() {
	    var el = document.getElementById("popup-text");
	    el.innerHTML = "";
	    window.clearTimeout(popupClear);
	    makePopup();
	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}

	initGame();
    }());
};
