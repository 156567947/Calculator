import React ,{useState} from 'react'

export default function UserInput({onChange,userInput}) {
  
  
  
  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
                <label htmlFor="">初始投资额</label>
                <input type="number" value={userInput.initialInvestemnt} required  onChange={(e)=>onChange('initialInvestemnt',e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">年度投资</label>
                <input type="number" value={userInput.annualInvestment} required onChange={(e)=>onChange('annualInvestment',e.target.value)} />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label htmlFor="">期望收益率</label>
                <input type="number" value={userInput.exceptedReturn} required  onChange={(e)=>onChange('exceptedReturn',e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">时长</label>
                <input type="number" value={userInput.duration} required onChange={(e)=>onChange('duration',e.target.value)}/>
            </p>
        </div>
    </section>
  )
}