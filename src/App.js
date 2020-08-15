import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layouts/main-layout/layout';

import { grayColor } from './shared/style_utility';
import Home from './views/Home/Home';
import Todo from './views/TodoMode/TodoMode';
import DevMode from './views/DevMode/DevMode';

const App = () => {

  useEffect(() => {
    
  }, []);
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/to-do" component={Todo} />
          <Route path="/dev" component={DevMode} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
