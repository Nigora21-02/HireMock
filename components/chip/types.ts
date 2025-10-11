// Shared types for chip selectors
export type Option = { label: string; value: string };

export interface OptionSelectorProps {
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
}

