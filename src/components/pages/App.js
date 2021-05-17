import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../../components/pages/Login.js';
import Home from '../../components/pages/Home.js';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Poppins', sans-serif;
  }
`;

const theme = {
	primaryColor: '#f8049c',
	secondaryColor: '#fdd54f',
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
