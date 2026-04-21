import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate()
  return (
    <>
    <div className='Support'>
        <div className='supportdiv'>
          <h3 onClick={ () => navigate('/vehicles#section-1')}>ALL VEHICLES</h3>
          <p>Vroomy Super Duty</p>
          <p>Vroomy V-150</p>
          <p>Vroomy Ranger</p>
          <p>Vroomy Escape</p>
          <p>Vroomy Bronco Sport</p>
        </div>
        <div className='supportdiv'>
            <h3 onClick={ () => navigate('/#section-1')}>SERVICE</h3>
            <p>Vroomy Service</p>
        </div>
        <div className='supportdiv'>
            <h3 onClick={() => navigate('/vehicles#section-2')}>QUICK LINKS</h3>
            <p>Vehicles</p>
        </div>
        <div className='supportdiv'>
            <h3 onClick={() => navigate('/service#section-1')}>CONTACT US</h3>
            <p>Contact</p>
        </div>

    </div>
    </>
  )
}

export default Support