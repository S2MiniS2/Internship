// dataview.js
import React, {useState, useEffect } from "react";
import axios, { Axios } from "axios";
import styled from "styled-components";
import DashBoard from "../component/DashBoard";
import InputData from "../Chart/InputData";
import UserData from "../Chart/UserData";
import TypeData from "../Chart/TypeData";
import Select from "../component/Select";
import SelectOne from "../component/SelectOne";

const DataView = () => {
const selectList = ["1호선", "2호선", "3호선", "4호선",
                "5호선", "6호선", "7호선", "8호선", "9호선"];
const selectList2 = ["RAMS", "CS", "TEST", "ADMIN"];
const selectList3 = ["일반고장","서비스고장","점검","개선사항","기타"];
const selectList4 = ["일","주","월"];
const selectList5 = ["표","그래프"];

const [option, setOption] = useState("");
const [data, setData] = useState(null);

useEffect(() => {
    axios.get('http://localhost:8080/lines/getAll', { withCredentials: true })
        .then(response => {
            setData(transformData(response.data));
            console.log(data);
    })
        .catch(error => {
        console.error('데이터를 가져오는 동안 오류가 발생했습니다:', error);
    });
}, []);

 

const transformData = (data) => {
    const transformedData = data.map(item => ({
        "1호선": item.line1,
        "2호선": item.line2,
        "3호선": item.line3,
        "4호선": item.line4,
        "5호선": item.line5,
        "6호선": item.line6,
        "7호선": item.line7,
        "8호선": item.line8,
        "9호선": item.line9,
        "day": item.createdAt
    }));

    return transformedData;
    };
    


if (data === null) {
return <div>Loading...</div>;
}


const handleClick=() => {
    alert("저장");
    window.location.reload();
}
const Filter = styled.div`
    width: 1400px;
    height: 8%;
    position: fixed;
    left: 20%;
    top: 15%;
    background-color: white;
    border-radius: 30px;
    display: flex;
    gap: 10px;
    z-index: 2; 
`;

const LineDataSection = styled.div`
    width: 1400px;
    height: 40%;
    position: fixed;
    left: 20%;
    top: 24%;
    background-color: white;
    border-radius: 30px;
    z-index: 1; 
`;

const UserDataSection = styled.div`
    width: 50%;
    height: 33%;
    position: fixed;
    left: 20%;
    top: 65%;
    background-color: white;
    border-radius: 30px;
`;

const DataInputSection = styled.div`
    width: 22%;
    height: 33%;
    position: fixed;
    left: 71%;
    top: 65%;
    background-color: white;
    border-radius: 30px;
`;

const TitleFont = styled.p`
    font-size: 25px;
    font-weight: 700;
    padding: 25px 0 0 30px;
    margin: 0;
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
    margin: 7px 0 0 200px;
`;

const lineOptionHandler = (option) => {
    const newData = [];

    data.forEach((d) => {
        for (const key in d)
        {
            if(key !== option)
            {
                d[key] = 0;
            } 
        }
        newData.push(d);
        console.log(d)
    });
    setData(newData);
    
    
}




return (
<>
    <DashBoard />

    <Filter>
        <div style={{paddingLeft:30, paddingTop:15}}>
            <Select options={selectList}  optionHandler={lineOptionHandler} selectOptionsText="호선 선택" />
            <Select options={selectList2}  selectOptionsText="유저 선택" />
            <Select options={selectList3}  selectOptionsText="고장 유형" />
            <SelectOne options={selectList4} selectOptionsText="일" />
            <SelectOne options={selectList5} selectOptionsText="차트" />
        </div>

    <Button onClick={(handleClick)}>보고서 저장</Button>

    </Filter>
    <LineDataSection>
    <TitleFont>호선별 데이터 입력 건수</TitleFont>
    <InputData data={data}/>
    </LineDataSection>
    <UserDataSection>
    <TitleFont>유저별 데이터 입력 건수</TitleFont>
    <UserData />
    </UserDataSection>

    <DataInputSection>
    <TitleFont>고장 유형별 데이터 입력 통계</TitleFont>
    <TypeData />
    </DataInputSection>
</>
);
};

export default DataView;
