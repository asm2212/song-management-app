import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import SongForm from './components/SongForm/SongForm';
import SongList from './components/SongList/SongLIst';
import Pagination from './components/Pagination/Pagination';
import { store } from './store/store';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <SongForm />
        <SongList />
        <Pagination />
      </div>
    </ThemeProvider>
  </Provider>
);

export default App;