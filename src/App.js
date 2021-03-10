
import { useState } from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [answer,setAnswer]=useState(0)



  const calculate=()=>{
  setAnswer((weight/(height))*100);



  }

  const body=()=>{
    return (
      <>
      <div style={{height:"100px",width:"200px",marginTop:"100px",marginLeft:"550px",justifyContent:"center",alignItems:"center"}}>
        <label>Enter Your Height In CM:</label>
        <br/>
        <input type="number" value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
        <br/>
        <label>Enter Your Weight In kg:</label>
        <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
        <br/>
        <br/>
        <button className="btn btn-primary" onClick={calculate}>Submit</button>

        

        

      </div>



      </>
    )
  }
  const message=()=>{
    return (
    <>
    {
      (answer!=0)?
      <>
    <div >
      <p style={{marginTop:"100px"}}>{`your BMI is ${answer} your suggested range is between 50-67 You are in healthy weight range` }</p>

      </div>
      
      </>
      :
      null
    }
    </>
    )
  }
  return (
    <div className="App">
      <Header />
      {body()}
      
      {message()}
      
    </div>
  );
}

export default App;
