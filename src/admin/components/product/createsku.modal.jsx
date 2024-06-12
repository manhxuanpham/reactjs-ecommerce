import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Table, Input, Button,Modal, Form, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SkuTable from './skutable';

const CreateSkuModal = ({ open, onCreate, onCancel, variationsData }) => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const convertSkuIndx = (variationsData) => {
        const options1 = variationsData[0]?.options || null;
        const options2 = variationsData[1]?.options || null;
        const skuindx = []
        if (options1 && options2) {
            options1.map((e, i) => {
                options2.map((f, j) => {
                    skuindx.push({
                        sku_tier_idx: [i, j],
                        name: `${variationsData[0].name}: ${e} - ${variationsData[1].name}: ${f}`,
                        sku_price: 0,
                        sku_stock: 0
                    })

                })
            })
        }
        console.log("skuindx", skuindx)
        return skuindx
    }

    useEffect(()=> {
        const dataconvert = convertSkuIndx(variationsData)
            setDataSource(dataconvert.map((variant, index) => ({
                key: index,
                description: variant.name,
                sku_tier_idx: variant.sku_tier_idx,
                sku_price: null,
                sku_stock: null
            })));

    }, [variationsData])
   


    const columns = [
        {
            title: 'Tên',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Giá',
            dataIndex: 'sku_price',
            key: 'sku_price',
            render: (_, record) => (
                <Input
                    value={record.sku_price}
                    onChange={(e) => {
                        const newDataSource = [...dataSource];
                        const index = dataSource.findIndex(item => item.key === record.key);
                        newDataSource[index].sku_price = +e.target.value;
                        setDataSource(newDataSource);
                    }}
                />
            )
        },
        {
            title: 'Số lượng kho',
            dataIndex: 'sku_stock',
            key: 'sku_stock',
            render: (_, record) => (
                <Input
                    value={record.sku_stock}
                    onChange={(e) => {
                        const newDataSource = [...dataSource];
                        const index = dataSource.findIndex(item => item.key === record.key);
                        newDataSource[index].sku_stock = +e.target.value;
                        setDataSource(newDataSource);
                    }}
                />
            )
        }

    ];
    const handleFinish = () => {
        onCreate(dataSource);
        form.resetFields(); // Reset form sau khi submit
    };    
    return (
        <>
            <Modal
                open={open}
                title="Nhập Sku cho sản phẩm"
                okText="Đồng Ý"
                cancelText="Quay Lại"
                okButtonProps={{
                    autoFocus: true,
                    htmlType: 'submit',
                }}
                onCancel={onCancel}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                        }}
                        clearOnDestroy
                        onFinish={handleFinish}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Table dataSource={dataSource} columns={columns} pagination={false} />
        
            </Modal>
        </>
    );
};
export default CreateSkuModal;