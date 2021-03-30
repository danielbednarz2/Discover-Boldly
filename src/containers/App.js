import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import styled from 'styled-components'
import Home from './Articles/Articles'
import Article from './Article/Article'
import Category from './Category/Category'
import Footer from '../components/Footer/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F3F7F6;
  color: #32453E;
  width: 100vw;
  overflow-x: hidden;
  padding: 1em 0;
`

const App = () => {
    return (
        <Wrapper className='App'>
            <Nav />
            <Switch >
                <Route path="/" exact component={Home} />
                <Route path="/articles/:id" component={Article} />
                <Route path="/category/:id" component={Category} exact />
            </Switch>
            <Footer />
        </Wrapper>
    )
}

export default App
