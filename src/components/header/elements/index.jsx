import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Import Redux
import { useDispatch } from 'react-redux';

// Import Functions
import { logout } from '../../../stores/login/functions';

function ProfileDropdown() {
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        logout(dispatch, history)
    }

    return (
        <div className="btn-group ml-4">
            <div className="ad-dropdown-btn-profile" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="ad-username-text-profile d-none d-lg-inline-block">
                    <h6 className="ad-username">
                        <span>Selamat Datang,</span>
                        AssetData
                    </h6>
                </div>
                <div className="rounded avatar avatar-30 d-none d-md-inline-block ad-dropdown-btn-profile-arrow">
                    <i className="fas fa-chevron-down ad-dropdown-btn-profile-arrow-icons mb-1"></i>
                </div>
            </div>
            
            <div className="dropdown-menu dropdown-menu-right pt-0 mt-3 overflow-hidden ad-dropdown-menu-profile active" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-item ad-dropdown-menu-profile-item">
                    <div className="ad-link-dropdownHeader">
                        <div className="row">
                            <Link to="/profil" style={{textDecoration: 'none'}}>
                                <div className="col-4 align-self-center">
                                    <i className="fas fa-house-user"></i>
                                </div>
                                <div className="col-8 pl-0">
                                    <p className="mb-0">Profile Saya</p>
                                    <p className="mb-1 small text-mute text-trucated">
                                        Informasi Data diri Anda
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>    
                </div>
                <div className="dropdown-item ad-dropdown-menu-profile-item pt-3 pb-3">
                    <div className="row ad-link-dropdownHeader-logout">
                        <div className="col-auto align-self-center">
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                        <div onClick={logOut} className="col pl-0">
                            <p className="mb-0 text-danger">Keluar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdown