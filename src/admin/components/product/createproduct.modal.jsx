import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Button, Form, Input, Card, Modal, Space, Select, Upload, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import JoditEditor from 'jodit-react';
import MyUploadComponent from './upload';
import { useSelector } from 'react-redux';
import { getAllCategory } from './../../../service/category.service';
const CreateProductModal = ({ open, onCreate, onCancel, placeholder }) => {
    const [form] = Form.useForm();
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const user = useSelector((state) => state.auth.login?.currentUser) || null;
    const accessToken = user?.data.tokens.accessToken
    const shopId = user?.data.shop._id
    const [category, setCategory] = useState([])
    const [optionsCategory, setOptionsCategory] = useState([])
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typings...'
    }), [placeholder]);


    useEffect(() => {
        async function fetchAllCategory() {
            const res = await getAllCategory();
            console.log(res.data)
            let resOptions = res.data.map(element => {
                return {
                    value: element.category_id,
                    label: element.category_name
                }
            })
            console.log("restoption", resOptions)
            setOptionsCategory(resOptions)
        }
        fetchAllCategory();
    }, [])
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            {/* <Button type="primary" onClick={() => setOpen(true)}>
                New Collection
            </Button> */}
            {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
            <Modal
                open={open}
                title="Thêm mới sản phẩm"
                okText="Tiếp Tục"
                cancelText="Huỷ"
                width={1200}
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

                        // clearOnDestroy
                        onFinish={onCreate}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="product_name"
                    label="Tên sản phẩm"
                    rules={[
                        {
                            required: true,
                            message: 'nhập tên sản phẩm!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="product_price" label="Giá sản phẩm" rules={[
                    {
                        required: true,
                        message: 'nhập giá sản phẩm!',
                    },
                ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="product_thumb" label="Hình ảnh">
                    <Input placeholder='url hình ảnh'/>
                </Form.Item>
                <Form.Item>
                    <MyUploadComponent accessToken={accessToken} userId={shopId} />
                </Form.Item>
                <Form.Item name="product_description" label="Mô tả sản phẩm" rules={[
                    {
                        required: true,
                        message: 'nhập mô tả sản phẩm !',
                    },
                ]}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    // onChange={newContent => {setContent(newContent) }}
                    />
                </Form.Item>
                {/* select category */}
                <Form.Item name="product_category" label="Danh mục">  
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Chọn danh mục"
                            // value="category_id"
                            onChange={handleChange}
                            options={optionsCategory}
                            filterOption={(input, option) =>
                                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        />
                </Form.Item>
                {/* Dynamic Form Item Example */}
                <div style={{ fontWeight: 'bold' }}>Thuộc Tính </div>
                <Form.List
                    label="Thuộc tính"
                    name="product_attributes">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'attribute_name']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing attribute_name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Tên Thuộc Tính" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'attribute_value']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing attribute_value',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Giá Trị thuộc tính" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />

                                </Space>

                            ))}

                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Thêm Thuộc tính
                            </Button>


                        </>
                    )}

                </Form.List>
                <div style={{ fontWeight: 'bold' }}>Biến thể sản phẩm </div>

                <Form.List name="product_variations">
                    {(fields, { add, remove }) => (
                        <div
                            style={{
                                display: 'flex',
                                rowGap: 16,
                                flexDirection: 'column',
                            }}
                        >
                            {fields.map((field) => (
                                <Card
                                    size="small"
                                    title={`Biến thể ${field.name + 1}`}
                                    key={field.key}
                                    extra={
                                        <CloseOutlined
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    }
                                >
                                    <Form.Item label="Tên" name={[field.name, 'name']}>
                                        <Input placeholder='Tên biến thể ví dụ (Màu Sắc, Kích thước ...)' />
                                    </Form.Item>

                                    {/* Nest Form.List */}
                                    <Form.Item label="Giá Trị">
                                        <Form.List name={[field.name, 'options']}>
                                            {(subFields, subOpt) => (
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        rowGap: 16,
                                                    }}
                                                >
                                                    {subFields.map((subField) => (
                                                        <Space key={subField.key}>
                                                            <Form.Item noStyle name={[subField.name, 'value']}>
                                                                <Input placeholder="Đỏ,Vàng , S, M ..." />
                                                            </Form.Item>
                                                            <Form.Item label="url ảnh" noStyle name={[subField.name, 'images']}  >
                                                                <Input placeholder="Chèn url ảnh" />
                                                            </Form.Item>
                                                            <MyUploadComponent userId={shopId} accessToken={accessToken}></MyUploadComponent>
                                                            <CloseOutlined
                                                                onClick={() => {
                                                                    subOpt.remove(subField.name);
                                                                }}
                                                            />

                                                        </Space>
                                                    ))}
                                                    <Button type="dashed" onClick={() => subOpt.add()} block>
                                                        + Thêm giá trị
                                                    </Button>

                                                </div>
                                            )}
                                        </Form.List>

                                    </Form.Item>
                                </Card>
                            ))}

                            <Button type="dashed" onClick={() => add()} block>
                                + Thêm Biến Thể
                            </Button>
                        </div>
                    )}
                </Form.List>
            </Modal>
        </>
    );
};
export default CreateProductModal;