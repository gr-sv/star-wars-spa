import React from 'react';

export interface AppProps  { 
   children?: React.ReactNode
}

function App({ children }: AppProps) {
	return (
    	<div className="App">
			{ children }
    	</div>
  	);
}

export default App;
