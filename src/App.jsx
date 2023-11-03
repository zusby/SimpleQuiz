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
      complete: (result) => {
        setData(result.data);
      },
      header: false, 
    });
  };

function getRandomInt(min, max) {
    min = Math.ceil(0);
  max = Math.floor(data.length);
  console.log(random);
  setRandom(Math.floor(Math.random() * (max - min + 1) + min));
}
  if(data)
  if (data[random][0] === undefined || data[random][0] === "" ||  data[random][0] === null) {
    getRandomInt();
  }

  return (
    <>
      <div>
        <Toaster/>
        <div className="read-the-docs">
          {data && <h1>{data[random][0]}</h1>}
         {data && <Questions questions={data[random]}/>}
  
             <input type="file" accept=".csv" onChange={handleFileUpload} />
      
        </div>
        <Button onClick={getRandomInt}> Prossima </Button>
        </div>
    </>
  )
}

export default App
