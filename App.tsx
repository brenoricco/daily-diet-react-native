import { Home } from '@screens/Home';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
