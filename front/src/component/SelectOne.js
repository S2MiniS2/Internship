import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
const SelectWrapper = styled.div`
position: relative;
display: inline-block;
z-index: 1;
`;

const DropdownToggle = styled.button`
padding: 10px 15px;
background-color: #f0f0f0;
border: none;
border-radius: 20px;
width: 150px;
cursor: pointer;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-right: 50px;
font-size: 18px;
`;

const DropdownMenu = styled.ul`
position: absolute;
top: 36px;
left: 0;
display: ${({ open }) => (open ? "block" : "none")};
margin-top: 5px;
padding: 0;
list-style: none;
background-color: #ffffff;
border: 1px solid #ccc;
border-radius: 4px;
max-height: 200px;
overflow-y: auto;
z-index: 2;
border-radius: 20px;
width: 150px;

`;

const DropdownItem = styled.li`
padding: 10px 15px;
cursor: pointer;
&:hover {
background-color: #f0f0f0;
}
`;

const DatePickerWrapper = styled.div` //달력
position: absolute;
top: 100%;
left: 0;
padding: 10px;
background-color: #ffffff;
border: 1px solid #ccc;
border-radius: 4px;
z-index: 3;
`;

const SelectOne = ({ options, onSelect }) => {
const [isOpen, setIsOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState(null);

const handleOptionClick = (option) => {
setSelectedOption(option);
setIsOpen(false);
if (typeof onSelect === "function") {
    onSelect(option);
}
};

const handleToggleClick = () => {
setIsOpen(!isOpen);
};

const handleDatePickerChange = (event) => {
setSelectedOption(event.target.value);
setIsOpen(false);
if (typeof onSelect === "function") {
    onSelect(event.target.value);
}
};

const handleOutsideClick = (event) => {
    if (isOpen.current && !isOpen.current.contains(event.target)) {
        setSelectedOption(false);
    }
    };
useEffect(() => {
document.addEventListener("mousedown", handleOutsideClick);
return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
};
}, []);

return (
<SelectWrapper>
    <DropdownToggle onClick={handleToggleClick}>
    {selectedOption || "옵션 선택" }
    </DropdownToggle>
    {isOpen && (
    <DropdownMenu open={isOpen}>
       
        {options.map((option) => (
        <DropdownItem
            key={option}
            onClick={() => handleOptionClick(option)}
        >
            {option}
        </DropdownItem>
        ))}
    </DropdownMenu>
    )}
</SelectWrapper>
);
};

export default SelectOne;
