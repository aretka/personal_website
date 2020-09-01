import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout'
import AboutMe from './containers/AboutMe/AboutMe'
import PersonalSkills from './containers/PersonalSkills/PersonalSkills'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/personal_skills" component={PersonalSkills}/>
          <Route path="/" exact component={AboutMe}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
