
import {useState} from 'react';
import './App.css';

function App() {
  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi,setBmi]=useState(0);
  const[resul,setResul]=useState("");
  let tempbmi=weight/((height/100)*(height/100));
  const result=(bmi)=>{
    if(bmi<18.5)
    {
      return "you are under weight";
    }
    if(bmi>=18.5 && bmi<=25)
    {
      return " you are normal";
    }
    else if(bmi>25 && bmi<=30){
      return "you are little over weight(pre-obesity)";
    }
    else if(bmi>30 && bmi<=35){
      return "you are over weight(Obesity Class-I)";
    }
    else if(bmi>35 && bmi<=40)
    {
      return "your are over weight(Obesity Class-II)";
    }
    else if(bmi>40)
    {
      return "you are over weight(Obesity Calss-III)";
    }
  }
  return (
    <div className="App">
      <header  className="App-header">
       <h1 className="heading">BMI CALCULATOR</h1>
       <image href='https://iconscout.com/icon/bmi-calculator-1506398' alt></image>
       <form >
         <label > 
           <div className='input'>
           Weight(Kg):
           <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
           </div>
           <div className='input'>
            Height(Cm):
            <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
         </label>
       </form>
       <button onClick={()=>{setBmi(tempbmi?tempbmi:0);setResul(result(bmi))}}><span class="text">Calculate</span></button>
       <div className="result">
        
        <h1>Result:{bmi}</h1>
        <h2>{resul}</h2>

       </div>
      
       
       
      </header>
    </div>
  );
}

export default App;
