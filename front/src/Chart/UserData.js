
import { ResponsiveBar } from '@nivo/bar'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
const [data, setData] = useState(null);

useEffect(() => {
    axios.get('http://localhost:8080/members/getAll', { withCredentials: true })
        .then(response => {
        const data = response.data;
        const transformedData = transformData(data); // 데이터 구조 변경
        setData(transformedData); // 변경된 데이터 설정
        console.log("UsertransformedData",transformedData);
        })
        .catch(error => {
        console.error('데이터를 가져오는 동안 오류가 발생했습니다:', error);
        });
    }, []);

    const transformData = (data) => {
        const transformedData = data.map(item => ({
            User : item.id,
            CS: item.cs,
            RAMS: item.rams,
            TEST: item.test,
            ADMIN: item.admin,
        }));
        console.log(transformedData);
        return transformedData;
    };
    
    if (data === null) {
        return <div>Loading...</div>;
        }
        return(


    <ResponsiveBar
        data={data}
        keys={[
            'RAMS', 'CS', 'TEST','ADMIN'
        ]}
        
        indexBy="User"
        margin={{ top: 0, right: 100, bottom: 100, left: 90 }}
        padding={0.3}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '3호선'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '2호선'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'User',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in User: "+e.indexValue}
    />
        )
    }

export default UserData;