import React from 'react'

const HeadingBanner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <img alt="banner"
                                className="img-fluid float-left"
                                src={'/static/assets/images/logo3.png'} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                        <img alt="banner"
                                className="img-fluid float-right"
                                src={'/static/assets/images/banner.png'} />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default HeadingBanner;
