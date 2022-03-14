import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sign from 'pages/Sign';
import Home from 'pages/Home';
import ErrorPage from 'pages/ErrorPage';
import CreateArtworkPage from 'pages/CreateArtworkPage';


const RootRouter = ({ children }: { children: ReactNode }) => {

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign' exact component={Sign} />
        <Route path='/artworks/create' exact component={CreateArtworkPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
