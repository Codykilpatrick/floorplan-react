import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bath from './Bath';

const Floorplan = () => {
  return (
    <>
    <Kitchen />
    <LivingRoom />
    <Bath size={ ["Full", "Half"] } />
    </>
  )
}

export default Floorplan