class Winner {
  private readonly player: string;
  private readonly computer: string;

  public constructor(player: string, computer: string) {
    this.player = player;
    this.computer = computer;
  }

  public pickWinner(): string {
    if (this.player === this.computer) return 'draw';
    else if (
      (this.player === 'paper' && this.computer === 'rock') ||
      (this.player === 'rock' && this.computer === 'scissors') ||
      (this.player === 'scissors' && this.computer === 'paper')
    )
      return 'player';
    else return 'computer';
  }
}

export default Winner;
