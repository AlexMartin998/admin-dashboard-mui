import { Provider } from 'react-redux';

import { store } from './store';
import { AppTheme } from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <div className="app">
          <h1>Hello World!</h1>
        </div>
      </AppTheme>
    </Provider>
  );
};

export default App;
