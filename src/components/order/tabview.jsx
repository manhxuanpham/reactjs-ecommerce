import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Tất cả',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Chờ Xác nhận',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Vận Chuyển',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Chờ Giao Hàng',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '3',
        label: 'Vận Chuyển',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '3',
        label: 'Vận Chuyển',
        children: 'Content of Tab Pane 3',
    },
];
const TabView = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabView;