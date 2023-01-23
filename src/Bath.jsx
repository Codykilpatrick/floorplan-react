const Bath = (props) => {
  console.log(props);
  return (
    <ul>
      { props.size.map(bath => 
        <h4>{bath} Bath</h4>)}
    </ul>
  )
} 

export default Bath