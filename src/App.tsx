import React from 'react';

export interface AppProps  { 
   children?: React.ReactNode
}

function App({ children }: AppProps) {
	return (
    	<div className="App">
			<h1>Star wars</h1>
			{ children }
    	</div>
  	);
}

export default App;
