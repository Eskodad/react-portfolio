import React from 'react';
import gitHub from '../../assets/images/icons/github-icon.png';
import linkedIn from '../../assets/images/icons/linkedin-icon.png';
import stack from '../../assets/images/icons/stack-icon.png';

const Footer = () => {
  return (
    <section className='footer'>
      <ul className='row justify-content-center'>
        <li className='col col-sm-2 col-lg-2'><a href='https://github.com/Eskodad' target='blank'><img src={gitHub} className='img-link-social' alt='GitHub logo'/></a></li>
        <li className='col col-sm-2 col-lg-2'><a href='https://www.linkedin.com/in/sahr-koroma-240960157/'  target='blank'><img src={linkedIn} className='img-link-social' alt='LinkedIn logo'/></a></li>
        <li className='col col-sm-2 col-lg-2'><a href='https://stackoverflow.com/users/14805469/sahr-koroma?tab=profile' target='blank'><img src={stack} className='img-link-social' alt='logo'/></a></li>
      </ul>
    </section>
  )
}

export default Footer;