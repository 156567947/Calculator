import React ,{useState} from 'react'

import Header from './components/Header.jsx'
import UserInput from '@/components/UserInput.jsx'
import Result from '@/components/Result.jsx'
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestemnt:10000,//初始投资额
    annualInvestment:1200,//年度投资
    exceptedReturn:6,//
    duration:10,
    
  })
  const handleChange=(props,value)=>{
    setUserInput((prev=>{
      return {...prev,[props]:value}
    }))
    console.log(userInput)
  } 
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Result />
    </>

  )
}

export default App
