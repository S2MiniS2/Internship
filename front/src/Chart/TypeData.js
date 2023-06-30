import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';

const TypeData = () => {
const [data, setData] = useState(null);

useEffect(() => {
axios.get('http://localhost:8080/FailureType/getAll', { withCredentials: true })
    .then(response => {
    const data = response.data;
        console.log("response.data",response.data);
    const transformedData = transformData(data);
    setData(transformedData);
    console.log("transformedData",transformedData);

    })
    .catch(error => {
    console.error('데이터를 가져오는 동안 오류가 발생했습니다:', error);
    });
}, []);

const transformData = (data) => {
    const transformedData = [
    {
        id: '일반 고장',
        label: '일반 고장',
        value: data[0].generalfailure,
    },
    {
        id: '서비스 고장',
        label: '서비스 고장',
        value: data[0].servicefailure,
    },
    {
        id: '고장 내역',
        label: '고장 내역',
        value: data[0].breakdown,
    },
    {
        id: '개선사항',
        label: '개선사항',
        value: data[0].improvements,
    },
    {
        id: '점검',
        label: '점검',
        value: data[0].inspection,
    },
    {
        id: '기타',
        label: '기타',
        value: data[0].etc,
    }
];


return transformedData;
};

if (data === null) {
return <div>Loading...</div>;
}

return (
<ResponsivePie  onClick={()=>console.log(data)}
    data={data}
    margin={{ top: 40, right: 80, bottom: 90, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'nivo' }}
    borderWidth={1}
    borderColor={{
    from: 'color',
    modifiers: [['darker', 0.2]]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
    from: 'color',
    modifiers: [['darker', 2]]
    }}
    defs={[
    {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
    },
    {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
    }
    ]}
    fill={[
    {
        match: {
        id: '개선사항'
        },
        id: 'lines'
    }
    ]}
/>
);
};

export default TypeData;
