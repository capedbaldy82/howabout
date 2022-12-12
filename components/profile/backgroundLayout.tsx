import { representative } from '@constants/style';

interface BackgroundLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

const BackgroundLayout = ({ children, backgroundColor, color }: BackgroundLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor,
        color,
      }}>
      <div style={{ margin: '0 auto', width: '100%', maxWidth: representative.maxWidth }}>
        {children}
      </div>
    </div>
  );
};
export default BackgroundLayout;
