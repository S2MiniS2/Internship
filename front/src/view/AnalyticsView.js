import React from "react";
import { styled } from "styled-components";
import DashBoard from "../component/DashBoard";
import { TrendingDown, TrendingUp } from "@material-ui/icons";
import Select from "../component/Select";
import SelectOne from "../component/SelectOne";

const AnalyticsView = () => {

const selectList = ["1호선", "2호선", "3호선", "4호선",
                    "5호선", "6호선", "7호선", "8호선", "9호선"];
const selectList2 = ["RAMS", "CS", "TEST", "ADMIN"];
const selectList4 = ["일","주","월"];

const handleClick=() => {
    alert("저장");
    window.location.reload();
}
const AverageSection = styled.div`

    width:340px;
    height: 300px;
    position: fixed;
    left:380px;
    top:26%;
    background-color:white;
    border-radius: 30px;

`;    

const TitleFont = styled.p`
    font-size: 30px;
    font-weight:700;
    padding: 30px 0 0 30px;
    margin:0
`;

const AverageView = styled.div`
    font-size: 20px;
    font-weight:700;
    padding: 50px 0 0 30px;
`;

const BounceRateSection = styled.div`
    width:550px;
    height: 135px;
    position: fixed;
    left:750px;
    top:26%;
    background-color:white;
    border-radius: 30px;

`;    

const ConversionRateSection = styled.div`
    width:550px;
    height: 135px;
    position: fixed;
    left:750px;
    top:43%;
    background-color:white;
    border-radius: 30px;
`;

const StaySection = styled.div`
    width:450px;
    height: 135px;
    position: fixed;
    left:1330px;
    top:26%;
    background-color:white;
    border-radius: 30px;
`;    

const ViewSection = styled.div`
    width:450px;
    height: 135px;
    position: fixed;
    left:1330px;
    top:43%;
    background-color:white;
    border-radius: 30px;
`;
const Filter = styled.div`
    width:1400px;
    height: 8%;
    position: fixed;
    left:20%;
    top:15%;
    background-color:white;
    border-radius: 30px;
    display:flex;
    gap:10px;
    
    z-index: 2; 
`;
const Button = styled.button`
    background-color: #929292;
    border-radius: 25px;
    width: 150px;
    height: 60px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    color: white;
    margin: 7px 0 0 600px;
`;

    return(
        <>
            <DashBoard/>
            <Filter>
                <div style={{paddingLeft:30, paddingTop:15}}>
                    <Select options={selectList} selectOptionsText="호선 선택" />
                    <Select options={selectList2} selectOptionsText="유저 선택" />
                    <SelectOne options={selectList4} selectOptionsText="일" />
                </div>
            <Button onClick={(handleClick)}>보고서 저장</Button>
            </Filter>
            <AverageSection>
                <TitleFont>평균 머문 시간 <br/>
                            5m 30s
                </TitleFont>

                <AverageView>
                    <span style={{paddingRight:20}}> <TrendingUp/>+0.3m</span> 
                    <span style={{color:'grey'}}>this week</span>
                    <br />
                    <div style={{paddingTop:30}}>
                    <span style={{paddingRight:20}}> <TrendingDown/>    -0.7m</span> 
                    <span style={{color:'grey'}}>this week</span>
                    </div>
                </AverageView>
            </AverageSection>

            <BounceRateSection>
                <TitleFont>
                이탈률이 가장 높은 페이지
                <br/>
                '/ramsteam' 0.37%
                </TitleFont>
            </BounceRateSection>

            <ConversionRateSection>
                <TitleFont>
                전환율이 가장 높은 페이지
                <br/>
                '/ramsteam' 0.37%
                </TitleFont>
            </ConversionRateSection>

            <StaySection>
            <TitleFont>
                가장 오래 머문 페이지
                <br/>
                '/race' 0.37%
                </TitleFont>
            </StaySection>

            <ViewSection>
            <TitleFont>
                조회수가 높은 페이지 
                <br/>
                '/brokenRead' 0.37%
                </TitleFont>
            </ViewSection>

        </>
    );
};

export default AnalyticsView;