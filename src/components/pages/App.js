import React, { Fragment } from 'react';
import { Button } from '../common';
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
			  <h1>App</h1>
			  <Button>Test</Button>
		</Fragment>
	);
}

export default App;
