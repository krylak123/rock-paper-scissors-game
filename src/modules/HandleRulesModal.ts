const rulesModal = document.querySelector('.rules');
const rulesModalBtn = document.querySelector(
  '.rules__icon-btn'
) as HTMLButtonElement;

const handleCloseRulesModal = (): void => {
  rulesModal?.classList.remove('open');
};

const handleOpenRulesModal = (): void => {
  rulesModal?.classList.add('open');

  rulesModalBtn.addEventListener('click', handleCloseRulesModal);
};

export default handleOpenRulesModal;
