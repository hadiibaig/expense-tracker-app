import React from 'react';
import './App.css';
import Title from './components/Title';
import Amount from './components/Amount';
import Heading from './components/Heading';
import Form from './components/Form';
import Button from "./components/Button";
import { Globalprovider } from './Global';


function App() {

  return  (
          <div className="container">
          <Title />
          <Globalprovider>
          <Amount />
          <Heading />
          <Form />
          <Button />
          </Globalprovider>
          </div> )
  
}

export default App;
