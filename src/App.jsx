import Papa from 'papaparse';
import './App.css'
import { useState } from 'react';
import Questions from './questions';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toaster } from 'react-hot-toast';
import { Button } from '@mui/base';

function App() {
  const [data, setData] = useState();
  const [random, setRandom] = useState(0);
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      encoding: "UTF-8",
      complete: (result) => {
        setData(result.data);
      },
      header: true, 
    });
  };
  

function getRandomInt() {
  let min = Math.ceil(0);
  let max = Math.floor(data.length);
  setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  
  console.log(random);
}

  if (data) {
    if(data[random].N<1) {
      getRandomInt();
      console.log(data[random])
  }
}
  
  return (
    <>
      <div>
        <Toaster/>
        <div className="read-the-docs">
          {data && <h1>{`${data[random].Domanda}`}</h1>}
         {data && <Questions questions={data[random]}/>}
  
             <input type="file" accept=".csv" onChange={handleFileUpload} />
      
        </div>
        <Button onClick={getRandomInt}> Prossima </Button>
        </div>
    </>
  )
}

export default App
