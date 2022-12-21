import { atom } from 'recoil';

const MenuState = atom<boolean>({
  key: 'MenuState',
  default: false,
});

export { MenuState };
