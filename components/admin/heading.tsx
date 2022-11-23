interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <h3 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 600 }}>{children}</h3>;
};

export default Heading;
