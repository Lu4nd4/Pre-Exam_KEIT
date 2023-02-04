import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import Navbar from './components/navbar/navbar';
import Section from './components/sections/section';
import Boxes from './components/TreeBoxes/boxes';
import './myDefault.css';
import Section3 from './components/section3/section3';
import Contacts from './components/contacts/constacts';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Boxes/>
      <Section3/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
