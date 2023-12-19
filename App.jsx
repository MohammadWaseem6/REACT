import { useState, useCallback, useEffect, useRef } from 'react';
function App() {
  const Copy = () => {
    console.log("copied");
  }
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");
  //useRef Hook
  const paswordRef = useRef(null)

  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]|:;";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const passwordcopytoclipBoard = useCallback(() => {
    try {
      window.navigator.clipboard.writeText(password);
      paswordRef.current?.select();
      paswordRef.current?.setSelectionRange(0, 10);
  
      // Indicate successful copy
      alert("Password copied to clipboard!");
    } catch (err) {
      console.error('Unable to copy to clipboard:', err);
    }
  }, [password]);
  useEffect(() => {
    Passwordgenerator()
  }, [length, numberAllowed, charAllowed, Passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={paswordRef}
          />
          <button
            onClick={passwordcopytoclipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 hover:bg-red-500'
          
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Label: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
