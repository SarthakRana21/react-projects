import { useState, useCallback, useEffect } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(char) str+= "!@#$%^&*()/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
      
    }
    setPassword(pass)
    console.log(pass);

  }, [length, number, char, setPassword])


  useEffect(()=>{
    passGen()
  }, [passGen])

  return (
   <div>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">

      <h1 className="text-4xl text-center">Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4' >
        <input type="text" value={password} className='outline-none w-full px-3 py-1' placeholder='Password' readOnly />
        <button className='text-white outline-none bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={16} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber((prev)=> !prev)}} />
          <label>Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox" defaultChecked={char} onChange={()=>{setChar((prev)=> !prev)}} />
          <label>Symbols</label>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App
