import React, { Component }  from 'react';

import { styled } from "styled-components";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import MenuContents from "./MenuContents";
import { Link } from 'react-router-dom';
/*icons & font*/
import "@fontsource/montserrat"; // Defaults to weight 400
import HomeIcon from '@mui/icons-material/Home';
import { ArrowDropDown, ArrowForwardIos, TrendingDown, TrendingUp } from "@material-ui/icons";
const DashBoard = () => {

/***Style ***/

const Contents = styled.div`
    background-color:#d1d6db;
    width: 100%;
    height: 100%;
    padding-top: 52.79%; /* 16:9 화면비율 */
    font-family: 'Noto Sans KR', sans-serif;
    overflow:hidden;
    position: fixed;

`;
const SideBarContent = styled.div`

`;
const Menu = styled.p`
    display:flex;
    font-size:18px;
    color: #ffffff;
    font-family: Montserrat;
    font-weight:900;

    padding-bottom:50px;
    letter-spacing:2px;
    
    width:50px;
`;
const MenuFont = styled.p`
    color: #ffffff;
    font-size:18px;
    color: #ffffff;
    font-family: Montserrat;
    font-weight:900;
    
`;

const Line = styled.div`
    width: 220px;
    border-bottom: 1px solid #444444;
`;

const Li = styled.li`
    list-style: none;
    padding-left:0px;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
`;
    return(
        <>
            <SideBar>
                {   
                <>
                    <SideBarContent>
                        <StyledLink to = '/SummaryView'>

                        <Menu>
                                <HomeIcon sx={{width:50, color:"white"}}/>FRACAS
                                {/* <ArrowDropDown sx={{width:50, color:"white"}}/> */}
                        </Menu>
                        </StyledLink>
                        
                        <MenuFont>
                        <MenuContents/>
                            
                        </MenuFont>

                    </SideBarContent>
                </>
                }
            </SideBar>
            <NavBar></NavBar>

            <Contents>
             
            </Contents>
        </>


    );
};

export default DashBoard;