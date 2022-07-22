import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import RideList from './components/RideList'

const App = () => {
  const [rides, setRides] = useState(null)
  const [selectedRide, setSelectedRide] = useState(null)

  useEffect(()=>{
    async function getRides(){
      const res = await axios.get(`/rideTime.js/rides`)
      setRides(res.data.results)
    }
    getRides()
  },[])
  console.log(rides)

  return (
<div>
  <div>
    <h1>Baby Daddy Land</h1>
    <h4>Welcome to the Official Baby Daddy Land Ride Time Viewer</h4>
  </div>
        {/* <div>
          <RideList rides = {rides}/>
        </div> */}
        </div>
  );
}

export default App;
