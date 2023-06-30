import styled from 'styled-components'
import React, { Component }  from 'react';
const NavBar = () => {

/**** style ****/
const NavBox = styled.div`
    position: absoulte;
    background-color:white;
    padding:20px 0 20px 350px;
    box-shadow: 0 0 10px gray;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

/**** Navbar ****/
return(
    <NavBox>
        {window.location.pathname === "/SummaryView" && <h1>Welcome, User!</h1>}
        {window.location.pathname === "/DashBoard" && <h1>Welcome, User!</h1>}
        {window.location.pathname === "/DataView" && <h1>Data</h1>}
        {window.location.pathname === "/AnalyticsView" && <h1>Analytics</h1>}
        {window.location.pathname === "/Settings" && <h1>Settings</h1>}
    
    </NavBox>
        
    );
    
};



export default NavBar;


        
