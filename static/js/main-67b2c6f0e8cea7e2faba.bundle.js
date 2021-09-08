/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 875:
/***/ (function(module) {

module.exports = "images/icon-paper.8b57a6b108c1b8ae82931a39b10f96a2.svg";

/***/ }),

/***/ 993:
/***/ (function(module) {

module.exports = "images/icon-rock.476e90a9646a87bb3645d2f09f4f7fba.svg";

/***/ }),

/***/ 522:
/***/ (function(module) {

module.exports = "images/icon-scissors.3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/images/icon-rock.svg
var icon_rock = __webpack_require__(993);
var icon_rock_default = /*#__PURE__*/__webpack_require__.n(icon_rock);
// EXTERNAL MODULE: ./src/images/icon-paper.svg
var icon_paper = __webpack_require__(875);
var icon_paper_default = /*#__PURE__*/__webpack_require__.n(icon_paper);
// EXTERNAL MODULE: ./src/images/icon-scissors.svg
var icon_scissors = __webpack_require__(522);
var icon_scissors_default = /*#__PURE__*/__webpack_require__.n(icon_scissors);
;// CONCATENATED MODULE: ./src/modules/BuildBoard.ts



class BuildBoard {
    constructor() {
        this.fragment = document.createDocumentFragment();
    }
    buildBtn(name, winner) {
        const btn = document.createElement('button');
        const span = document.createElement('span');
        let image = null;
        if (name !== 'empty') {
            if (name === 'rock') {
                image = (icon_rock_default());
            }
            else if (name === 'paper') {
                image = (icon_paper_default());
            }
            else if (name === 'scissors') {
                image = (icon_scissors_default());
            }
        }
        btn.setAttribute('name', `${name}`);
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', `choice-btn choice-btn--${name}`);
        if (winner) {
            btn.setAttribute('class', `choice-btn choice-btn--${name} winner`);
        }
        if (name !== 'empty') {
            btn.innerHTML = `<img src=${image} alt="${name} icon" class="choice-btn__img">`;
        }
        span.setAttribute('class', `choice-btn__shadow choice-btn__shadow--${name}`);
        btn.appendChild(span);
        return btn;
    }
    buildFirstDetails(player) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        div.setAttribute('class', 'game__details');
        div.setAttribute('style', 'animation: show-details 1s both');
        h1.setAttribute('class', 'game__details-title');
        h1.textContent = `You picked ${player}`;
        h2.setAttribute('class', 'game__details-subtitle');
        h2.textContent = 'Waiting for computer choice';
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            span.setAttribute('class', 'game__details-dot');
            span.textContent = '.';
            h2.appendChild(span);
        }
        div.appendChild(h1);
        div.appendChild(h2);
        return div;
    }
    buildSecondDetails(winner) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const btn = document.createElement('button');
        div.setAttribute('class', 'game__details');
        div.setAttribute('style', 'animation: show-details 1s 0.5s both');
        h1.setAttribute('class', 'game__details-title game__details-title--winner');
        if (winner === 'player')
            h1.textContent = 'You win';
        else if (winner === 'computer')
            h1.textContent = 'You lose';
        else
            h1.textContent = 'draw';
        btn.setAttribute('type', 'button');
        btn.setAttribute('class', 'game__details-btn');
        btn.textContent = 'play again';
        div.appendChild(h1);
        div.appendChild(btn);
        return div;
    }
    buildStartBoard() {
        const btnRock = this.buildBtn('rock');
        const btnPaper = this.buildBtn('paper');
        const btnScissors = this.buildBtn('scissors');
        this.fragment.appendChild(btnRock);
        this.fragment.appendChild(btnPaper);
        this.fragment.appendChild(btnScissors);
        return this.fragment;
    }
    buildFirstBoard(player) {
        const btnPlayer = this.buildBtn(player);
        const details = this.buildFirstDetails(player);
        const btnComputer = this.buildBtn('empty');
        this.fragment.appendChild(btnPlayer);
        this.fragment.appendChild(details);
        this.fragment.appendChild(btnComputer);
        return this.fragment;
    }
    buildSecondBoard(player, computer, winner) {
        const btnPlayer = this.buildBtn(player, winner === 'player' ? winner : undefined);
        const details = this.buildSecondDetails(winner);
        const btnComputer = this.buildBtn(computer, winner === 'computer' ? winner : undefined);
        this.fragment.appendChild(btnPlayer);
        this.fragment.appendChild(details);
        this.fragment.appendChild(btnComputer);
        return this.fragment;
    }
}
/* harmony default export */ var modules_BuildBoard = (BuildBoard);

;// CONCATENATED MODULE: ./src/helpers/names.ts
const gameNames = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
};
const statsNames = {
    STATS_SCORE: 'STATS_SCORE',
    STATS_WIN: 'STATS_WIN',
    STATS_LOSE: 'STATS_LOSE',
    STATS_DRAW: 'STATS_DRAW',
};
const resultsNames = {
    PLAYER: 'player',
    COMPUTER: 'computer',
    DRAW: 'draw',
};

;// CONCATENATED MODULE: ./src/modules/Winner.ts

class Winner {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
    }
    pickWinner() {
        if (this.player === this.computer)
            return resultsNames.DRAW;
        else if ((this.player === gameNames.PAPER && this.computer === gameNames.ROCK) ||
            (this.player === gameNames.ROCK &&
                this.computer === gameNames.SCISSORS) ||
            (this.player === gameNames.SCISSORS && this.computer === gameNames.PAPER))
            return resultsNames.PLAYER;
        else
            return resultsNames.COMPUTER;
    }
}
/* harmony default export */ var modules_Winner = (Winner);

;// CONCATENATED MODULE: ./src/modules/Statistics.ts

class Statistics {
    constructor() {
        this.score = 0;
        this.win = 0;
        this.lose = 0;
        this.draw = 0;
    }
    getData() {
        const score = Number(localStorage.getItem(statsNames.STATS_SCORE));
        const win = Number(localStorage.getItem(statsNames.STATS_WIN));
        const lose = Number(localStorage.getItem(statsNames.STATS_LOSE));
        const draw = Number(localStorage.getItem(statsNames.STATS_DRAW));
        if (!score && !win && !lose && !draw)
            return;
        this.score = score;
        this.win = win;
        this.lose = lose;
        this.draw = draw;
        this.showStats();
    }
    updateStats(winner) {
        if (winner === 'player') {
            this.score += 1;
            this.win += 1;
        }
        else if (winner === 'computer') {
            this.score -= 1;
            this.lose += 1;
        }
        else {
            this.draw += 1;
        }
        localStorage.setItem(statsNames.STATS_SCORE, String(this.score));
        localStorage.setItem(statsNames.STATS_WIN, String(this.win));
        localStorage.setItem(statsNames.STATS_LOSE, String(this.lose));
        localStorage.setItem(statsNames.STATS_DRAW, String(this.draw));
        this.showStats();
    }
    showStats() {
        const scoreElement = document.querySelector('.header__score-value');
        const winElement = document.querySelector('.scoreboard__score-name--win span');
        const loseElement = document.querySelector('.scoreboard__score-name--lose span');
        const drawElement = document.querySelector('.scoreboard__score-name--draw span');
        scoreElement.textContent = String(this.score);
        winElement.textContent = String(this.win);
        loseElement.textContent = String(this.lose);
        drawElement.textContent = String(this.draw);
    }
}
/* harmony default export */ var modules_Statistics = (Statistics);

;// CONCATENATED MODULE: ./src/modules/Game.ts



class Game {
    constructor() {
        this.stats = new modules_Statistics();
        this.timeout = 3000;
        this.choicePlayer = '';
        this.choiceComputer = '';
        this.winner = '';
        this.gameBoard = document.querySelector('.game');
        this.choiceBtns = document.querySelectorAll('.choice-btn');
        this.stats.getData();
    }
    generateComputerChoice() {
        const choiceList = ['rock', 'paper', 'scissors'];
        const choice = choiceList[Math.floor(Math.random() * this.choiceBtns.length)];
        return choice;
    }
    reset() {
        var _a, _b;
        while ((_a = this.gameBoard) === null || _a === void 0 ? void 0 : _a.firstChild) {
            this.gameBoard.removeChild(this.gameBoard.firstChild);
        }
        const startBoard = new modules_BuildBoard().buildStartBoard();
        (_b = this.gameBoard) === null || _b === void 0 ? void 0 : _b.appendChild(startBoard);
        this.init();
    }
    start(btn) {
        var _a, _b;
        this.choicePlayer = btn['name'];
        this.choiceComputer = this.generateComputerChoice();
        this.winner = new modules_Winner(this.choicePlayer, this.choiceComputer).pickWinner();
        while ((_a = this.gameBoard) === null || _a === void 0 ? void 0 : _a.firstChild) {
            this.gameBoard.removeChild(this.gameBoard.firstChild);
        }
        const firstBoard = new modules_BuildBoard().buildFirstBoard(this.choicePlayer);
        (_b = this.gameBoard) === null || _b === void 0 ? void 0 : _b.appendChild(firstBoard);
        setTimeout(() => {
            var _a, _b, _c;
            while ((_a = this.gameBoard) === null || _a === void 0 ? void 0 : _a.firstChild) {
                this.gameBoard.removeChild(this.gameBoard.firstChild);
            }
            const secondBoard = new modules_BuildBoard().buildSecondBoard(this.choicePlayer, this.choiceComputer, this.winner);
            this.stats.updateStats(this.winner);
            (_b = this.gameBoard) === null || _b === void 0 ? void 0 : _b.appendChild(secondBoard);
            (_c = document
                .querySelector('.game__details-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', this.reset.bind(this));
        }, this.timeout);
    }
    init() {
        this.choiceBtns = document.querySelectorAll('.choice-btn');
        this.choiceBtns.forEach(btn => btn.addEventListener('click', this.start.bind(this, btn)));
    }
}
/* harmony default export */ var modules_Game = (Game);

;// CONCATENATED MODULE: ./src/modules/Modal.ts
class Modal {
    constructor() {
        this.modal = document.querySelector('.rules');
        this.modalOpenBtn = document.querySelector('.btn');
        this.modalCloseBtn = document.querySelector('.rules__icon-btn');
    }
    openModal() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.classList.add('open');
    }
    closeModal() {
        var _a;
        (_a = this.modal) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
    }
    init() {
        var _a, _b;
        (_a = this.modalOpenBtn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.openModal.bind(this));
        (_b = this.modalCloseBtn) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.closeModal.bind(this));
    }
}
/* harmony default export */ var modules_Modal = (Modal);

;// CONCATENATED MODULE: ./src/index.ts



const handleGame = new modules_Game();
const handleModal = new modules_Modal();
handleGame.init();
handleModal.init();

}();
/******/ })()
;