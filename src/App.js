import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes'
import TopNav from './components/TopNav/TopNav';
function App() {
  useEffect(() => {
    console.log(process.env);
  })
  return (
    <div>
      <TopNav />
      <BrowserRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
