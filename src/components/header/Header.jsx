import React from "react";

// Import Elements
import ProfileDropdown from "./elements";

function Header(props) {
  const toggleSidebar = () => {
    document.body.classList.toggle("sidemenu-open");
  };
  
  return (
    <div className="row header">
      <div className="container-fluid " id="header-container">
        <div className="row">
          {/* Header starts */}
          <nav className="my-3 col-12 navbar-expand ">
            <div className="row justify-content-between">
              <div className="col-1 d-flex align-items-center">
                <div
                  className="ad-iconBurger"
                  onClick={toggleSidebar}
                >
                  <div className="ad-bar"></div>
                  <div className="ad-bar"></div>
                  <div className="ad-bar"></div>
                </div>
              </div>

              <div className="col-2 d-flex justify-content-end">

                <ProfileDropdown />
                
              </div>
            </div>

            
            

          </nav>
          {/* Header ends */}
        </div>
      </div>
    </div>
  );
}

export default Header;
