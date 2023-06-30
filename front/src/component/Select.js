import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
    margin-right:50px;
    font-size:18px;

`;

const DropdownMenu = styled.ul`
    position: absolute;
    top: 40px;
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
    &::-webkit-scrollbar {
        width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 50px;
            background: #ccc;

        }`;

const DropdownItem = styled.li`
    padding: 15px 15px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
        }`;

    export default function Select({
    options,
    optionHandler,
    selectAllText = "전체 선택",
    selectOptionsText = "Select options",
    }) {
        
    const [selected, setSelected] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        if (option === "all") {
            if (selected.length === options.length) {
            setSelected([]);
            } else {
            setSelected(options);
            
            }
        } else {
            const selectedIndex = selected.indexOf(option);
            if (selectedIndex > -1) {
            setSelected(selected.filter((item) => item !== option));
            } else {
                setSelected([...selected, option]);
            }
        }
        optionHandler(option);  
        
        };


const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
};

const handleOutsideClick = (event) => {
if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdownOpen(false);
}
};

useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
};
}, []);

const renderSelectedOptions = () => {
    const sortedSelected = selected.slice().sort((a, b) => {
        return options.indexOf(a) - options.indexOf(b);
});

    if (sortedSelected.length === options.length) {
        return selectAllText;
    } else if (sortedSelected.length === 0) {
        return selectOptionsText;
    } else if (sortedSelected.length <= 2) {
        return sortedSelected.join(", ");
    } else {
        return `${sortedSelected.slice(0, 2).join(", ")}...`;
    }
    };

const handleItemClick = (event, item) => {
    event.stopPropagation();
    handleSelect(item);
};

const handleSelectAll = (option) => {
    if (selected.length === options.length) {
    setSelected([]);
    } else {
    setSelected(options);
}

};

return (
<SelectWrapper>
    <DropdownToggle onClick={handleDropdownToggle}>
    {renderSelectedOptions()}
    </DropdownToggle>
    {isDropdownOpen && (
    <DropdownMenu open={isDropdownOpen} ref={dropdownRef}>
        <DropdownItem>
        <label>
            <input
            type="checkbox"
            checked={selected.length === options.length}
            onChange={handleSelectAll}
            />
            {selectAllText}
        </label>
        </DropdownItem>
        {options.map((item) => (
        <DropdownItem
            key={item}
            onClick={(e) => handleItemClick(e, item)}
        >
            <label>
            <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => {}}
            />
            {item}
            </label>
        </DropdownItem>
        ))}
    </DropdownMenu>
    )}
</SelectWrapper>
);
}
