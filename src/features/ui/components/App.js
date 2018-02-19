import React from 'react'
import { Route, Switch } from 'react-router'
// import styles from './App.scss'
import Connection from 'Features/connection/components/Connection'
import Home from 'Features/ui/components/Home'
import Content from 'Features/ui/components/Content'

export default() => (
  <div>
    <Switch>
      <Route path='/connect' component={Connection} />
      <Route path='/contents' component={Content} />
      <Route path='/' component={Home} />
    </Switch>
  </div>
)