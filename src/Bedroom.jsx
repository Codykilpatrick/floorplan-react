const Bedroom = (props) => {
  console.log(props);
  return (
    <h4>
      { props.bedNum.map(bedroom => 
        <h4> Bedroom { bedroom } </h4>)}
    </h4>
  )
}

export default Bedroom