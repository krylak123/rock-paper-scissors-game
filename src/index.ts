import Game from './modules/Game';
import Modal from './modules/Modal';

import './scss/index.scss';

const handleGame = new Game();
const handleModal = new Modal();

// Handle game start
handleGame.init();

// Handle showing the rules
handleModal.init();
