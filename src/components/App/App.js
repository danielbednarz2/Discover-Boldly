import styled from 'styled-components'
import Header from '../Header/Header.js'
import Body from '../Body/Body.js'
import Footer from '../Footer/Footer.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from '../Body/Books'
import Programming from '../Body/Programming'
import Health from '../Body/Health'
import Travel from '../Body/Travel'
import Outdoors from '../Body/Outdoors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F3F7F6;
  color: #32453E;
  width: 100vw;
  overflow-x: hidden;
  padding-top: 1em;
`

const App = () => {

  return (
    <Router basename={'/'}>
      <Wrapper>
        <Header />
        <Route path="/" exact render={(props) => (
          <>
            {<Body />
            }
          </>
        )} />
        <Route path="/books" component={Books} />
        <Route path="/programming" component={Programming} />
        <Route path="/health" component={Health} />
        <Route path="/travel" component={Travel} />
        <Route path="/outdoors" component={Outdoors} />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
