import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

    const locationSidebar = useLocation();

    const toggleSidebar = () => {
        document.body.classList.toggle("sidemenu-open");
    };

    return (
        <div className="sidebar" id="sidebar">
            
            {/* Logo sidebar */}
            <div className="sidebar-header">
                <Link to={"/"} className="logo" style={{textDecoration: 'none'}}>
                {/* Logo sidebar */}
                <div className="logo ad-baseLogo-link">
                    <h1 className='text-center font-32'>AssetData<span className='font-24'>.io</span></h1>
                </div>
                {/* Logo sidebar ends */}
                </Link>
            </div>
            {/* Logo sidebar ends */}

            {/* Navigation menu sidebar*/}
            <h6 className="mt-1">Dashboard</h6>
            <div style={{ width: "20%", height: "2px", background: "#888888" }}></div>
            <ul className="list-unstyled ad-ulSideBar">
                <li className="ad-liSideBar">
                    <div className="nav-item">
                        <Link className={`ad-nav-link`} to={"/"}>
                        <span
                            className={`ad-spanText pt-2 pb-2 pl-3 font-15 font-15 ${
                            locationSidebar.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <i className="fa-solid fa-chart-line" style={{paddingRight: "8px"}}></i>
                            Dashboard
                        </span>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link
                        className={`ad-nav-link`}
                        to={`/company`}
                        >
                        <span
                            className={`ad-spanText pt-2 pb-2 pl-3 font-15 ${
                            locationSidebar.pathname.includes("/company")
                                ? "active"
                                : ""
                            }`}
                        >
                            <i className="fa-solid fa-building" style={{paddingRight: "8px"}}></i>
                            Company
                        </span>
                        </Link>
                    </div>
                </li>
            </ul>

            <ul
                className="nav flex-column m-2 d-lg-none"
                style={{
                borderRadius: "8px",
                position: "absolute",
                bottom: "0",
                right: "0",
                background: "rgba(38, 38, 38, 0.95)",
                }}
            >
                <div className="nav-link" type="button" onClick={toggleSidebar}>
                    <i className="fas fa-arrow-left"></i>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar