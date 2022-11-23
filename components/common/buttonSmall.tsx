import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type: string;
}

const ButtonSmall = ({ text, onClick, type }: ButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonSmall;

const Button = styled.button`
  padding: 12px;
  width: 20%;
  border: 1px solid black;
  height: 100%;
  color: white;
  background-color: black;
  cursor: pointer;
`;
