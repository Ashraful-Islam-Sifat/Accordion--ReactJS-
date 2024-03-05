import { useState } from 'react'
import './App.css'

function App() {

  const [selected, setSelected] = useState(null);

  const toggle = (i)=>{
    if(selected==i){
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className='wrapper'>
      <div className="accordion">
        {
          data.map((item,i)=>
          <div className="item">
            <div className="title" onClick={()=> toggle(i)}>
              <h3>{item.question}</h3>
              <span className='icon'>{selected==i?"-":"+"}</span>
            </div>
            <div className={selected==i?"content active":"content"}>
              {item.answer}
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

const data = [
  {
    question:"What is programming?",
    answer:"Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks. It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages."
  },
  {
    question:"What is programming language?",
    answer:"A programming language is a system of notation for writing computer programs. A programming language is usually described in terms of its syntax and semantics. These are usually defined by a formal language."
  },
  {
    question:"What is HTML?",
    answer:"HTML is the standard markup language for creating Web pages. What is HTML? HTML stands for Hyper Text Markup Language; HTML is the standard markup language ..."
  },
  {
    question:"What is JavaScript?",
    answer:"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much ..."
  }
]

export default App
