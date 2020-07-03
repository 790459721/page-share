import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes'
function App() {
  useEffect(() => {
    console.log(process.env);
  })
  return (
    <BrowserRouter>
      <Switch>
        { renderRoutes( routes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
