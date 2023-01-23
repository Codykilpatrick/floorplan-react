import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = () => {
  return (
    <>
    <div>
      <h4>Kitchen</h4>
      <div>
        <Oven />
      </div>
      <div>
        <Sink />
      </div>
    </div>
    </>
  )
}

export default Kitchen