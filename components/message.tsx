import styled from '@emotion/styled';

interface TextProps {
  kind?: 'id' | 'error';
  approve?: boolean;
}

interface MessageProps extends TextProps {
  text: string;
}

const Message = ({ kind, approve, text }: MessageProps) => {
  return (
    <P kind={kind} approve={approve}>
      {text}
    </P>
  );
};

export default Message;

const P = styled.p<TextProps>`
  margin-bottom: 12px;
  color: ${(props) => (props.approve ? 'green' : 'red')};
  font-size: 14px;
`;
