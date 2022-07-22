
const RideList = (props) => {
  
  console.log(props)
  return( 
    <div className="grid">
      {
        props.rides.map((rides)=>(
          <div key={ride.id}
            className="card">
            <h3>{ride.name}</h3>
            <h4>{ride.category}</h4>
            <h4>{ride.times_slot}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default RideList