export interface Option {
  label: string;
  value: string;
}

export interface BlockSelectorProps {
  category: string;
  setCategory: (val: string) => void;
  categories: Option[];
  language: string;
  setLanguage: (val: string) => void;
  languages: Option[];
  level: string;
  setLevel: (val: string) => void;
  levels: Option[];
}
