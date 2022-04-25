/* eslint-disalbe */ 
import React, {useState} from 'react';
import './App.css';
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link> <Link to="/" exact >Home</Link> </Nav.Link>
                <Nav.Link> <Link to="/detail" exact>Detail</Link> </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      <Route exact path="/">
        <MainPage/>
      </Route>

      <Route path="/detail">
        <Detail/>
      </Route>

      {/* <Route path="/어쩌구" component={}></Route> */}

    </div>
  );
}

function MainPage(props){

  let [shoes, shoes변경] = useState(Data);

  return (
    <>
        <div className="jumbotron background">
          <h1>20% Season OFF</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus nam qui tempora recusandae quibusdam cumque corrupti illum, molestiae, aut temporibus sapiente maxime!</p>
          <button>Learn more</button>
        </div>

        <div className="container">
          <div className="row">
          <Card shoes={shoes}/>
          </div>
        </div>
    </>
  )
}

function Card(props){
  return (
    <>
      {
        props.shoes.map((a, i)=> {
          return (
            <div className="col-md-4">
              <img src={ 'https://codingapple1.github.io/shop/shoes'+(i + 1)+'.jpg' } width="100%" alt="shoesImg"/>
              <h4>{ props.shoes[i].title }</h4>
              <p>{ props.shoes[i].content } & { props.shoes[i].price }</p>
            </div>
          )
        })
      }

    </>
  )
}



export default App;
