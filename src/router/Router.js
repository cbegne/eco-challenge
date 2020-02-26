import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from '../landing/Landing';
import { Challenge } from '../challenge/Challenge';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={() => <Landing />} /> */}
        <Route exact path="/" component={() => <Challenge />} />
      </Switch>
    </BrowserRouter>
  );
};
