import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

const App = () => {

  const [name, setname] = useState("");

  const events=(e)=>{


    console.log(e.target.value);
    setname(e.target.value);
  }

  const [sub, setsub] = useState([]);

  const events1=(e)=>{

console.log("click me")

if(name){


  setsub((bug)=>{
     
    return [...bug,name]
  })
}

   setname("");
  }

  
  const events2=(id)=>{

    

    setsub((term)=>{


      return term.filter((tex,index)=>{

        return index!==id
      })
    })
  }
  return (
    <div>
        <h1> git this is lodolist</h1>
            <h1></h1>
        <input type="text" value={name} onChange={events} />

        <button onClick={events1}>click me</button>

        <ul>

        {sub.map((uli,index)=>{


          return <li key={index} id={index} >{uli} <span onClick={events2} style={{cursor:"pointer"}}>X</span></li>
        }) }
        </ul>

        <Button  variant="sucess" size='10'>Button #1</Button>
        <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default App;
