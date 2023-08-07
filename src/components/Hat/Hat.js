import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import './Hat.css';


function Hat() {

  return (
    <Link to='/' className='hat'>
      <img className='hat__logo-img' src={logoImg} alt='Логотип приложения' />
    </Link>
  );
};
  
export default Hat;