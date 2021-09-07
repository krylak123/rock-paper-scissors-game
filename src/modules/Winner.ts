import { gameNames, resultsNames } from '../helpers/names';

class Winner {
  private readonly player: string;
  private readonly computer: string;

  public constructor(player: string, computer: string) {
    this.player = player;
    this.computer = computer;
  }

  public pickWinner(): string {
    if (this.player === this.computer) return resultsNames.DRAW;
    else if (
      (this.player === gameNames.PAPER && this.computer === gameNames.ROCK) ||
      (this.player === gameNames.ROCK &&
        this.computer === gameNames.SCISSORS) ||
      (this.player === gameNames.SCISSORS && this.computer === gameNames.PAPER)
    )
      return resultsNames.PLAYER;
    else return resultsNames.COMPUTER;
  }
}

export default Winner;
