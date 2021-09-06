class BuildBoard {
  private readonly fragment: Node;
  public constructor() {
    this.fragment = document.createDocumentFragment();
  }

  private buildBtn(name: string, winner?: string): HTMLElement {
    const btn = document.createElement('button');
    const span = document.createElement('span');

    btn.setAttribute('name', `${name}`);
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', `choice-btn choice-btn--${name}`);

    if (name === winner)
      btn.setAttribute('class', `choice-btn choice-btn--${name} winner`);

    if (name !== 'empty')
      btn.innerHTML = `<img src"./images/icon-${name}.svg" alt="${name} icon" class="choice-btn__img">`;

    span.setAttribute(
      'class',
      `choice-btn__shadow choice-btn__shadow--${name}`
    );

    btn.appendChild(span);

    return btn;
  }

  private buildFirstDetails(player: string): HTMLElement {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    div.setAttribute('class', 'game__details');
    div.setAttribute('style', 'animation: show-details 1s both');

    h1.setAttribute('class', 'game__details-title');
    h1.textContent = `You picked ${player}`;

    h2.setAttribute('class', 'game__details-subtitle');
    h2.textContent = 'Waiting for computer choice';

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
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

  private buildSecondDetails(winner: string): HTMLElement {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const btn = document.createElement('button');

    div.setAttribute('class', 'game__details');
    div.setAttribute('style', 'animation: show-details 1s 0.5s both');

    h1.setAttribute('class', 'game__details-title game__details-title--winner');
    if (winner === 'player') h1.textContent = 'You win';
    else if (winner === 'computer') h1.textContent = 'You lose';
    else h1.textContent = 'draw';

    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'game__details-btn');
    btn.textContent = 'play again';

    div.appendChild(h1);
    div.appendChild(btn);

    return div;
  }

  public buildStartBoard(): Node {
    const btnRock = this.buildBtn('rock');
    const btnPaper = this.buildBtn('paper');
    const btnScissors = this.buildBtn('scissors');

    this.fragment.appendChild(btnRock);
    this.fragment.appendChild(btnPaper);
    this.fragment.appendChild(btnScissors);

    return this.fragment;
  }

  public buildFirstBoard(player: string): Node {
    const btnPlayer = this.buildBtn(player);
    const details = this.buildFirstDetails(player);
    const btnComputer = this.buildBtn('empty');

    this.fragment.appendChild(btnPlayer);
    this.fragment.appendChild(details);
    this.fragment.appendChild(btnComputer);

    return this.fragment;
  }

  public buildSecondBoard(
    player: string,
    computer: string,
    winner: string
  ): Node {
    const btnPlayer = this.buildBtn(player, winner);
    const details = this.buildSecondDetails(winner);
    const btnComputer = this.buildBtn(computer, winner);

    this.fragment.appendChild(btnPlayer);
    this.fragment.appendChild(details);
    this.fragment.appendChild(btnComputer);

    return this.fragment;
  }
}

export default BuildBoard;
