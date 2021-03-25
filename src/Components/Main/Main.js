import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../Body/Pages/About/About'
import Contact from '../Body/Pages/Contact/Contact'
import Home from '../Body/Pages/Home/Home'
import Services from '../Body/Pages/Services/Services'

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Main
