import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


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

  return (
    <div>
      <Header text = {"give feedback"}/>
      <Button handleClick={()=>setGood(good+1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="bad"/>

      <Header text = {"statistics"}/>

      <Display text={"good"} value = {good}/>
      <Display text={"neutral"} value = {neutral}/>
      <Display text={"bad"} value = {bad}/>
    </div>
  )
};

export default App;