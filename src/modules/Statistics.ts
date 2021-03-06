import { statsNames } from '../helpers/names';

class Statistics {
  private score: number;
  private win: number;
  private lose: number;
  private draw: number;

  public constructor() {
    this.score = 0;
    this.win = 0;
    this.lose = 0;
    this.draw = 0;
  }

  public getData(): void {
    const score = Number(localStorage.getItem(statsNames.STATS_SCORE));
    const win = Number(localStorage.getItem(statsNames.STATS_WIN));
    const lose = Number(localStorage.getItem(statsNames.STATS_LOSE));
    const draw = Number(localStorage.getItem(statsNames.STATS_DRAW));

    if (!score && !win && !lose && !draw) return;

    this.score = score;
    this.win = win;
    this.lose = lose;
    this.draw = draw;

    this.showStats();
  }

  public updateStats(winner: string): void {
    if (winner === 'player') {
      this.score += 1;
      this.win += 1;
    } else if (winner === 'computer') {
      this.score -= 1;
      this.lose += 1;
    } else {
      this.draw += 1;
    }

    localStorage.setItem(statsNames.STATS_SCORE, String(this.score));
    localStorage.setItem(statsNames.STATS_WIN, String(this.win));
    localStorage.setItem(statsNames.STATS_LOSE, String(this.lose));
    localStorage.setItem(statsNames.STATS_DRAW, String(this.draw));

    this.showStats();
  }

  private showStats(): void {
    const scoreElement = document.querySelector(
      '.header__score-value',
    ) as HTMLSpanElement;
    const winElement = document.querySelector(
      '.scoreboard__score-name--win span',
    ) as HTMLSpanElement;
    const loseElement = document.querySelector(
      '.scoreboard__score-name--lose span',
    ) as HTMLSpanElement;
    const drawElement = document.querySelector(
      '.scoreboard__score-name--draw span',
    ) as HTMLSpanElement;

    scoreElement.textContent = String(this.score);
    winElement.textContent = String(this.win);
    loseElement.textContent = String(this.lose);
    drawElement.textContent = String(this.draw);
  }
}

export default Statistics;
