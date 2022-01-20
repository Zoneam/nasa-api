import './App.css';
import DisplayCard from './components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
const APIKEY = "QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH"

function App() {

const [data, setData] = useState([]);
const [refresh, setRefresh] = useState(true);

useEffect(async () => {
  const result = await  axios(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&count=10`);
  setData(result.data);
  console.log(result.data)
},[refresh]);

  return (
    <div className="App ">
      <div className="col text-center">
      <button type="button" className="btn btn-info rand-btn" onClick={setRefresh}>Get 10 Random Results</button>
      </div>
      {data.map((singleResponse)=><DisplayCard key={singleResponse.date} data={singleResponse}/>)}
    </div>
  );
}

export default App;