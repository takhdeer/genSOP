import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import SOPoutput from './components/SOPoutput'
import { genSOP } from './components/genSOP'

function App() {
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [type, setType] = useState("")
  const [sopOutput, setSopOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  async function HandleSubmit() {
    setIsLoading(true)
    const response = await genSOP(category,description,type)
    setSopOutput(response)
    setIsLoading(false)
    console.log(description, category, type)
  }
  
  return (
    <div className = "App">
      <h2>GenSOP</h2>
      <div className = "InputForn">
        <InputForm
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}   
          onSubmit={HandleSubmit}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <SOPoutput
        sopOutput={sopOutput}
        isLoading={isLoading}
      />
    </div>
  );
}
export default App
