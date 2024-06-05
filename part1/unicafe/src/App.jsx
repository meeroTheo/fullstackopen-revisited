import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  


  const Header = ({text}) => {
    return (
      <h1>{text}</h1>
    )
  };

  const Button = (props) =>{
    return(
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  };
  const Display = ({text, value}) =>{
    return(
      <div>
        {text} {value}
      </div>
    )

  }
  const updateState = (setter,value) =>{
    setter(value);
    setTotal(total+1);
  };

  return (
    <div>
      <Header text = {"give feedback"}/>
      <Button handleClick={()=>updateState(setGood,good+1)} text="good"/>
      <Button handleClick={()=>updateState(setNeutral,neutral+1)} text="neutral"/>
      <Button handleClick={()=>updateState(setBad,bad+1)} text="bad"/>

      <Header text = {"statistics"}/>
      <Display text={"good"} value = {good}/>
      <Display text={"neutral"} value = {neutral}/>
      <Display text={"bad"} value = {bad}/>
      <Display text={"all"} value = {total}/>
      <Display text={"average"} value = {(1*good + 0*neutral + -1*bad)/total}/>
      <Display text={"positive"} value = {good/total}/>
      
    </div>
  )
};

export default App;