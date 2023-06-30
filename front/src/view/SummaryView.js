import DashBoard from "../component/DashBoard";
import React from "react";
import { styled } from "styled-components";
import { ArrowForwardIos, TrendingDown, TrendingUp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import InputData from "../Chart/InputData";
const SummaryView = () => {
    

const DataSection = styled.div`
width:1400px;
height: 45%;
position: fixed;
left:20%;
top:17%;
background-color:white;
border-radius: 30px;
`;

const AnalyticsSection = styled.div`
width:340px;
height: 300px;
position: fixed;
left:380px;
top:620px;
background-color:white;
border-radius: 30px;
`;

const TitleFont = styled.p`
font-size: 30px;
font-weight:700;
padding: 25px 0 13px 30px;
margin:0
`;

const AnalyticsDataView = styled.div`
font-size: 20px;
font-weight:700;
padding: 30px 0 0 30px;
margin:0 0 10px;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
`;

    return(
    <>
    <DashBoard/>
    <DataSection>
        <TitleFont>
        데이터 입력 건수   <StyledLink to = '/DataView'><ArrowForwardIos/></StyledLink>
        </TitleFont>
        <InputData></InputData>
  


    </DataSection>

    <AnalyticsSection>
        <TitleFont>
            세션 머문 시간   <StyledLink to='/AnalyticsView'> <ArrowForwardIos/> </StyledLink> 
            <br/>
            평균 머문 시간 <br/>
            3m 5s
        </TitleFont>
        <AnalyticsDataView>
            <span style={{paddingRight:20}}> <TrendingUp/>+0.3m</span> 
                <span style={{color:'grey'}}>this week</span>
            <br/>
            <span style={{paddingRight:20}}> <TrendingDown/>    -0.7m</span> 
                <span style={{color:'grey'}}>this week</span>
        </AnalyticsDataView>
    </AnalyticsSection>
    </>
    )

}

export default SummaryView;