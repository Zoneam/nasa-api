import './App.css';
import DisplayCard from './components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
const APIKEY = "QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH"

function App() {

const [data, setData] = useState([]);
const [refresh, setRefresh] = useState(true);

//preventing wrong inputs
const handleInput = (e)=>{
if (e.target.value > 25){
  e.target.value = 25;
} else if (e.target.value < 1 && e.target.value!=='' ){
  e.target.value = 1;
}
}

useEffect(async () => {
  let numberOfResults = document.getElementById('num-results').value || (document.getElementById('num-results').value = 10);
  const result = await  axios(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&count=${numberOfResults}`);
  setData(result.data);
},[refresh]);

  return (
    <div className="App ">
      <div className="col text-center num-res-container">
      <p className="text-sm-start">Minimum number of results is 1 Maximum 25</p>
      <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text bg-warning text-white" id="inputGroup-sizing-default">Number of results</span>
      </div>
      <input type="text" className="form-control" type="number" id="num-results" min="1" max="25" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={handleInput}/>
      </div>
      <button type="button" className="btn btn-info rand-btn" onClick={setRefresh}>Update Results</button>
      </div>
      {data.map((singleResponse)=><DisplayCard key={singleResponse.date} data={singleResponse}/>)}
    </div>
  );
}

export default App;