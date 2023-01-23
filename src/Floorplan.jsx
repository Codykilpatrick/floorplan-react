import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bath from './Bath';
import Bedroom from './Bedroom';

const Floorplan = () => {
  return (
    <>
    <Kitchen />
    <LivingRoom />
    <Bath size={ ["Full", "Half"] } />
    <Bedroom bedNum={ ["1", "2", "3"] }/>
    </>
  )
}

export default Floorplan