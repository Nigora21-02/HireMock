export type CardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  showTipIcon?: boolean;
  onTipPress?: () => void;
};
