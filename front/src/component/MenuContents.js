import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Sort,Settings } from "@material-ui/icons";
import { Dns, FilterAlt,StackedLineChart,Troubleshoot, Logout } from "@mui/icons-material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
root: {
width: "80%",
maxWidth: 280,
},
nested: {
paddingLeft: theme.spacing(4)
},
nestedSecondLevel: {
paddingLeft: theme.spacing(8)
}

}));

const Setting=styled.div`
    position: fixed;
    bottom: 300px;
    color: grey;
`;

const LogOut=styled.div`
    position:fixed;
    bottom: 20px;
    color: grey;
`;
const Line = styled.div`
    width: 220px;
    border-bottom: 1px solid #444444;
    margin-bottom:25px;
`;

const Icon = styled.div`
    padding-right:10px;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
`;
export default function MenuContents() {
const classes = useStyles();
const [open, setOpen] = React.useState(true);
const [openSecondLevel, setOpenSecondLevel] = React.useState(true);
const handleClick = () => {
setOpen(!open);
};

const handleClickSecondLevel = () => {
setOpenSecondLevel(!openSecondLevel);
};

const handleLogout = () => {
    alert("Logout");
    location.href='/'
}
return (
<List>
<List
    component="nav"
    className={classes.root}
>
    <ListItem button onClick={handleClick}>
    <List>
        <Icon><Dns/></Icon>
    </List>
    <ListItemText primary="Overview" />
    {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Collapse in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>

    <StyledLink to='/SummaryView'>
        <ListItem
        button
        className={classes.nested}
      
        >
         <Icon><Sort/></Icon>
        <ListItemText primary="Summary"/>
        </ListItem>
    </StyledLink>

        <ListItem
        button
        className={classes.nested}
        onClick={handleClickSecondLevel}
        >
        <Icon><FilterAlt/></Icon>
        <ListItemText primary="Custom view" />
        {openSecondLevel ? <ExpandLess /> : <ExpandMore />}
        </ListItem>


        <Collapse in={openSecondLevel} timeout="auto" unmountOnExit>
        <StyledLink to ='/DataView'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecondLevel}>
            <Icon> <StackedLineChart/></Icon>
                <ListItemText primary="Data" />
                </ListItem>
            </List>
        </StyledLink>
        </Collapse>
        </List>
        <Collapse in={openSecondLevel} timeout="auto" unmountOnExit>
        <StyledLink to='/AnalyticsView'>
            <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecondLevel}>
                <Icon><Troubleshoot/></Icon>
                <ListItemText primary="Analytics" />
                </ListItem>
            </List>
        </StyledLink>
        </Collapse>
    </Collapse>

    <Setting>
    <Line></Line>
        <StyledLink to='/Settings' style={{color:"grey"}}>
        <ListItem
        button
        component="div"
        >
        <Icon><Settings/></Icon>
        <ListItemText primary="Settings" />
        </ListItem>
        </StyledLink>
    </Setting>
   
        </List>
    <LogOut>
        <ListItem
        button
        component="div"
        onClick={handleLogout}
        >
        <Icon><Logout/></Icon>
        <ListItemText primary="Log out"/>
        </ListItem>
    </LogOut>

</List>
);
}
