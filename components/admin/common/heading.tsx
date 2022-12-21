import styled from '@emotion/styled';

interface HeadingProps {
  children: React.ReactNode;
  line?: boolean;
}

const Heading = ({ children, line = true }: HeadingProps) => {
  return <Heading3 line={line}>{children}</Heading3>;
};

export default Heading;

const Heading3 = styled.h3<{ line: boolean }>`
  margin-top: 24px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: ${({ line }) => (line ? '3px solid black' : 'none')};
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
  margin-right: 16px;
`;
