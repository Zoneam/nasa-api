import './App.css';
import DisplayCard from './components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
const API = "QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH"


function App() {

const [data, setData] = useState([]);

useEffect(async () => {
  const result = await  axios('https://api.nasa.gov/planetary/apod?api_key=QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH&count=10');
  setData(result.data);
  console.log(result.data)
},[]);


  return (
    <div className="App">
      {data.map((singleResponse)=><DisplayCard key={singleResponse.date} data={singleResponse}/>)
  }
    </div>
  );
}

export default App;
