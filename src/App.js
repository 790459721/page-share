/*
 * @Author: zhangxr
 * @Date: 2020-07-09 09:20:12
 * @Description: 
 */ 
import React, { useEffect } from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes'
// import TopNav from './components/TopNav/TopNav';
function App() {
  useEffect(() => {
    console.log(process.env);
  })
  return (
    <div>
      {/* <TopNav /> */}
      <HashRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
