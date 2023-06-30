import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import React from 'react'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ width: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
                centered
                scrollButtons='auto'
                //variant='scrollable'
                //            orientation='vertical'
            >
                <Tab
                    label={props.data ? props.data[0] : 'Item One'}
                    {...a11yProps(0)}
                />
                <Tab
                    label={props.data ? props.data[1] : 'Item One'}
                    {...a11yProps(1)}
                />
                <Tab
                    label={props.data ? props.data[2] : 'Item One'}
                    {...a11yProps(2)}
                />
                <Tab
                    label={props.data ? props.data[3] : 'Item One'}
                    {...a11yProps(3)}
                />
                <Tab
                    label={props.data ? props.data[4] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[5] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[6] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[7] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[8] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[9] : 'Item One'}
                    {...a11yProps(4)}
                />
                <Tab
                    label={props.data ? props.data[10] : 'Item One'}
                    {...a11yProps(4)}
                />
            </Tabs>

            <TabPanel value={value} index={0}>
                <img alt="img" src='img/Bom.jpg' className='Bom_img'></img>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <img alt="img" src='img/femc.jpg' className='femc_img'></img>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <img alt="img" src='img/RBD.jpg' className='RBD_img'></img>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <img alt="img" src='img/FTA2.jpg' className='FTA2_img'></img>
            </TabPanel>

            <TabPanel value={value} index={4}>
                <img alt="img" src='img/logo512.png'></img>
            </TabPanel>
        </>
    );
}

export default BasicTabs;
