import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*(){}[]?<>"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  


  return (
    <div className='w-full max-w-md px-4 my-8 mx-auto shadow-md rounded-lg text-orange-500 bg-gray-500'>
      <h1 className='text-center text-white '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden py-10'>

        <input readOnly type="text" className='outline-none w-full py-1 px-3' value={password} placeholder='PasswordGenerator' ref = {passwordRef}/>
        <button onClick={copyPasswordToClip} className='outline-none bg-blue-500 shrink-0 text-white px-3 py-0.5'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={60} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label>length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed(prev=>!prev)}} />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {characterAllowed} id='numberInput' onChange={()=>{setCharacterAllowed(prev=>!prev)}} />
          <label htmlFor="numberInput">Character</label>
        </div>
      </div>
    </div>

  )
}

export default App
