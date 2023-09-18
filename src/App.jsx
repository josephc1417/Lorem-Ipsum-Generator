import {useState} from 'react'
import data from './data'
const App = () => {
  const [count, setCount] = useState(1)// current state is 1 
  const [Text, setText] = useState([]) 
  
  return(
    <section className='section-center'>
      <h4>Tired of boring default text</h4>
      <form className='lorem-form'>
        <label className='' htmlFor='amount'>paragraphs:</label>
        <input type='number' name='amount' id='amount' 
        min="1" step="1" max="8" value={count} 
        onChange={(e) => setCount(e.target.value)} />
        <button className='btn' type='submit'>Generate</button>
        </form>
    </section>
  ) 
  };
export default App;
