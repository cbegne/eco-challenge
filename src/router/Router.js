import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Confirm } from '../confirm/Confirm';
import { Challenge } from '../challenge/Challenge';
import { About } from '../about/About';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Challenge />} />
        <Route exact path="/about" component={() => <About />} />
        <Route
          exact
          path="/:id"
          component={({ match }) => <Confirm id={match.params.id} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
