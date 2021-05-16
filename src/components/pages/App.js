import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../../components/pages/Login';
import Home from '../../components/pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
	return (
		<Fragment>
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
		</Fragment>
	);
}

export default App;
