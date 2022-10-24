import { atom } from 'recoil';

const MenuState = atom<boolean>({
  key: 'MenuState',
  default: false,
});

const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
});

const ProfileState = atom({
  key: 'ProfileState',
  default: {
    name: '',
  },
});

export { MenuState, LoginState, ProfileState };
