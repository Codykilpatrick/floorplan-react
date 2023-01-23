const Bath = (props) => {
  console.log(props);
  return (
    <h4>
      { props.size.map(bath => 
        <h4>{bath} Bath</h4>)}
    </h4>
  )
} 

export default Bath