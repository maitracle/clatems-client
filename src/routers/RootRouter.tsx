import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import CreateArtworkPage from 'pages/CreateArtworkPage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'


const RootRouter = ({ children }: { children: ReactNode }) => {

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' exact component={SignUpPage} />
        <Route path='/sign-in' exact component={SignInPage} />
        <Route path='/artworks/create' exact component={CreateArtworkPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default RootRouter
