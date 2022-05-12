
import './App.css';
import React, {useState} from 'react';
import Header from './components/header/header';
import RecepeCardWrapper from './components/recepecards/recepecardwrapper';

function App() {

const [recepe, setRecepe] = useState(null);

let onRecepeSelect=(recepe)=>{
  //console.log(recepe)
  setRecepe(recepe);

}
  return (
    <div>
   <Header onRecepeSelected ={onRecepeSelect}></Header>
   <RecepeCardWrapper selectedRecepe={recepe}></RecepeCardWrapper>
   </div>
  );
}

export default App;
