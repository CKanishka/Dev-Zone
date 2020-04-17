import React from 'react';
import LoginForm from '../components/LoginForm';
const Footer = () => {
    return (
        <>
        {/* <div className="modal fade" id="loginModal">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalTitle">Please login or register</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <LoginForm />
                </div>
            </div>
        </div>
        </div> */}
        <footer>
           <span> &copy; Dev Zone 2020 </span>
        </footer>
        </>
    )
}

export default Footer;