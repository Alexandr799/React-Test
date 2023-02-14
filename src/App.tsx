import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import Store from './redux/store';

function App() {
	return (
		<Provider store={Store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
