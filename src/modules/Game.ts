class Game {
  public choiceBtns: NodeList;
  public choicePlayer: string;
  public choiceComputer: string;

  public constructor() {
    this.choiceBtns = document.querySelectorAll('.choice-btn');
    this.choicePlayer = '';
    this.choiceComputer = '';
  }

  public generateComputerChoice(): string {
    const choiceList = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * this.choiceBtns.length);
    const choice = choiceList[randomNumber];

    return choice;
  }

  public start(btn: any): void {
    this.choicePlayer = btn['name'];
    this.choiceComputer = this.generateComputerChoice();
  }

  public init(): void {
    this.choiceBtns.forEach((btn) =>
      btn.addEventListener('click', this.start.bind(this, btn))
    );
  }
}

export default Game;
