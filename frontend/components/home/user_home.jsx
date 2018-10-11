import React from 'react'

function userHome(props) {
    return (
    <div>
      <div className="searchBar">
        <div className="navContainer">
          <div className="searchRow">
          <div className="hoodLogo">
            <a href="/#"><img className="robin" src={window.images.logo}/></a>
          </div>
            <div className="LogoandSearch">
            <div className="searchStyling">
            <input type="text" placeholder="Search" className="searchInput"/>
            </div>
            </div>
            <div className="navLinks">
              <div className="navLinkContainer">
                <div className="homeLink">Home</div>
                <div className="notifications">Notifications</div>
                <button onClick={props.logout}>Logout!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default userHome
