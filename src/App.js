import React from 'react';
import { useRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const isAuthenticated = false
  const routes = useRoutes(isAuthenticated)

  return (
    <div className="App">
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
