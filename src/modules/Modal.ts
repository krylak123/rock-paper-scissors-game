class Modal {
  public modal: HTMLDivElement | null;
  public modalOpenBtn: HTMLButtonElement | null;
  public modalCloseBtn: HTMLButtonElement | null;

  public constructor() {
    this.modal = document.querySelector('.rules');
    this.modalOpenBtn = document.querySelector('.btn');
    this.modalCloseBtn = document.querySelector('.rules__icon-btn');
  }

  public openModal(): void {
    this.modal?.classList.add('open');
  }

  public closeModal(): void {
    this.modal?.classList.remove('open');
  }

  public init(): void {
    this.modalOpenBtn?.addEventListener('click', this.openModal.bind(this));
    this.modalCloseBtn?.addEventListener('click', this.closeModal.bind(this));
  }
}

export default Modal;
