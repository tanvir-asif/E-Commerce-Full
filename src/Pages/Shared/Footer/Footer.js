import React from 'react';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/w-logo.png'


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 single-box">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-lg-4 col-sm-6 single-box">
                            <p className="footer-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione omnis aperiam quia, eveniet sunt recusandae aut adipisci odit autem ullam quibusdam beatae molestias ipsa optio ipsum laboriosam nihil aliquam. Vitae atque numquam, autem accusamus excepturi non laboriosam!</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;