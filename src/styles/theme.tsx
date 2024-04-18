// styles/theme.ts
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    danger: string;
    light: string;
    dark: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
  borders: {
    default: string;
    rounded: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  sizes: {
    small: '8px 12px',
    medium: '10px 16px',
    large: '12px 20px',
  },
  borders: {
    default: '1px solid #dee2e6',
    rounded: '30px',
  },
};

export default theme;
