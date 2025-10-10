export interface InputFieldProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  error?: string;
  secureTextEntry?: boolean;
  style?: object;
  fullWidth?: boolean;
  disabled?: boolean;
}
