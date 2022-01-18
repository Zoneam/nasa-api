import './App.css';
import DisplayCard from './components/Card';
import axios from 'axios';
import { useEffect } from 'react';
const API = "QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH"

function App() {
  
useEffect(()=>{
  axios('https://api.nasa.gov/planetary/apod?api_key=QDEUlIuFI1qnLu24hs2yikNPuWQdpXAAZVVuomhH&count=10')
  .then(response => {
  console.log(response.data)  
  })
})

  return (
    <div className="App">

      <DisplayCard >
      
      </DisplayCard>
    </div>
  );
}

export default App;
