import React from 'react'
import { Route, Switch } from 'react-router'
import Header from 'Features/ui/components/Header'
import Connection from 'Features/connection/components/Connection'
import Home from 'Features/ui/components/Home'
import Content from 'Features/ui/components/Content'

export default() => (
  <div className='container'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/connect' component={Connection} />
      <Route path='/contents' component={Content} />
    </Switch>
  </div>
)