const color = {
  signature: '#9d7446',
};

const regxObj = {
  id: /^[A-za-z0-9]{4,20}$/,
  pw: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
  pwCheck: /^(?=.*[a-zA-z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
  name: /[a-zA-z0-9가-힣]/,
  phone: /([0-9]{11})/,
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  company: /^[0-9]{10}$/,
  store: /[a-zA-z0-9가-힣]/,
};

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    left: '0',
    margin: 'auto',
    width: '100%',
    maxWidth: '500px',
    height: '500px',
    padding: '0',
    overflow: 'hidden',
  },
};

export { color, regxObj, modalStyle };
