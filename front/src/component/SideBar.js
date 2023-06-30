import { styled } from "styled-components";
import { useRef, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { Component }  from 'react';


const SideBar = ({ width=280, children }) => {
    
    const [isOpen, setOpen] = useState(true); //초깃값 false
    const [xPosition, setX] = useState(0); //메뉴 닫기
    const side = useRef();
    


const toggleMenu = () => {

if (xPosition > 0) {
    setX(0)
    setOpen(true);
} else {
    setX(width);
    setOpen(false);
}
};

const SideBox = styled.div`
    background-color: #E3ECF1;
`;
const Sidebar = styled.div`
    background-color: #202123;
    border-right: 4px solid #202020;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 100;
    transition: 0.4s ease;
    color: #202120;
    height: 100%;
    z-index: 99;
`;
const OpenButton = styled.button`
    position: relative;
    left: 270px;
    top: 850px;
    width: 40px;
    height: 40px;
    z-index: 99;
    transition: 0.8s ease;
    border: 2px solid #202020;
    border-radius: 12px;
    background-color: #202123;
    overflow: hidden;
`;
const Content = styled.div`
    padding: 10px 40px 20px 28px;
    position: relative;
    width: 100%;
`;

const Foldbar = styled.div`
    color:white;
`;

    return(
        <SideBox>
            <Sidebar ref={side} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
            <OpenButton  onClick={() => toggleMenu()}>
                
            {isOpen ? 
            <KeyboardArrowLeft style={{color: "white"}} /> : <KeyboardArrowRight style={{color: "white"}} />
        }
        </OpenButton>
        <Content>{children}</Content> 
        {/* 사이드바 컴포넌트 내부 값이 구현되는 위치 */}
            </Sidebar>
        </SideBox>
    );
};

export default SideBar;