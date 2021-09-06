import BuildBoard from './BuildBoard';
import Winner from './Winner';
import Statistics from './Statistics';

class Game {
  public stats: any;
  public gameBoard: HTMLElement | null;
  public choiceBtns: NodeList;
  public choicePlayer: string;
  public choiceComputer: string;
  public winner: string;
  public timeout: number;

  public constructor() {
    this.stats = new Statistics();
    this.gameBoard = document.querySelector('.game');
    this.choiceBtns = document.querySelectorAll('.choice-btn');
    this.choicePlayer = '';
    this.choiceComputer = '';
    this.winner = '';
    this.timeout = 3000;
  }

  private generateComputerChoice(): string {
    const choiceList = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * this.choiceBtns.length);
    const choice = choiceList[randomNumber];

    return choice;
  }

  private reset(): void {
    while (this.gameBoard?.firstChild)
      this.gameBoard.removeChild(this.gameBoard.firstChild);

    const startBoard = new BuildBoard().buildStartBoard();
    this.gameBoard?.appendChild(startBoard);

    this.init();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private start(btn: any): void {
    this.choicePlayer = btn['name'];
    this.choiceComputer = this.generateComputerChoice();

    this.winner = new Winner(
      this.choicePlayer,
      this.choiceComputer
    ).pickWinner();

    while (this.gameBoard?.firstChild)
      this.gameBoard.removeChild(this.gameBoard.firstChild);

    const firstBoard = new BuildBoard().buildFirstBoard(this.choicePlayer);

    this.gameBoard?.appendChild(firstBoard);

    setTimeout(() => {
      while (this.gameBoard?.firstChild)
        this.gameBoard.removeChild(this.gameBoard.firstChild);

      const secondBoard = new BuildBoard().buildSecondBoard(
        this.choicePlayer,
        this.choiceComputer,
        this.winner
      );

      this.stats.updateStats(this.winner);

      this.gameBoard?.appendChild(secondBoard);
      document
        .querySelector('.game__details-btn')
        ?.addEventListener('click', this.reset.bind(this));
    }, this.timeout);
  }

  public init(): void {
    this.stats.showStats();

    this.choiceBtns = document.querySelectorAll('.choice-btn');
    this.choiceBtns.forEach((btn) =>
      btn.addEventListener('click', this.start.bind(this, btn))
    );
  }
}

export default Game;
