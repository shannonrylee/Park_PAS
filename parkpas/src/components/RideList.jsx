
const RideList = (props) => {
  
  console.log(props)

  if (!props.rides) {
    return <h1> Loading rides...</h1>
  }
  else return( 
    <div className="grid">
      {
        props.rides.map((ride)=>(
          <div key={ride.id}
            className="card">
            <img src={ride.image} />
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