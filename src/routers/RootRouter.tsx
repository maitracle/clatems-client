import React, { ReactNode } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from 'routers/AuthenticatedRoute'
import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import CreateArtworkPage from 'pages/CreateArtworkPage'
import SignUpPage from 'pages/SignUpPage'
import SignInPage from 'pages/SignInPage'
import ArtworkListPage from 'pages/ArtworkListPage'
import MyArtworkListPage from 'pages/MyArtworkListPage'
import ArtworkDetailPage from 'pages/ArtworkDetailPage'


const RootRouter = ({ children }: { children: ReactNode }) => {

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' exact component={SignUpPage} />
        <Route path='/sign-in' exact component={SignInPage} />
        <AuthenticatedRoute path='/artworks/create' exact component={CreateArtworkPage} />
        <AuthenticatedRoute path='/artworks/my' exact component={MyArtworkListPage} />
        <AuthenticatedRoute path='/artworks/:artworkId' exact component={ArtworkDetailPage} />
        <Route path='/artworks' exact component={ArtworkListPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default RootRouter
