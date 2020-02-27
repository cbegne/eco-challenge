import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Confirm } from '../confirm/Confirm';
import { Challenge } from '../challenge/Challenge';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Challenge />} />
        <Route
          exact
          path="/confirm/:id"
          component={({ match }) => <Confirm id={match.params.id} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
