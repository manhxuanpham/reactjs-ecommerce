import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';

const AddressModal = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <>
            {/* <Button type="primary" onClick={() => setOpen(true)}>
                New Collection
            </Button> */}
            {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
            <Modal
                open={open}
                title="Thêm mới địa chỉ mới"
                okText="Đồng Ý"
                cancelText="Huỷ"
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
                        onFinish={onCreate}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="name"
                    label="Tên người Nhận"
                    rules={[
                        {
                            required: true,
                            message: 'nhập tên người nhận hàng !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="numberPhone" label="Số Điện Thoại" rules={[
                    {
                        required: true,
                        message: 'nhập số điện thoại người nhận!',
                    },
                ]}>
                    <Input type="phone" />
                </Form.Item>
                <Form.Item name="address" label="Địa chỉ nhận hàng" rules={[
                    {
                        required: true,
                        message: 'nhập địa chỉ nhận hàng !',
                    },
                ]}>
                    <Input type="text" />
                </Form.Item>
            </Modal>
        </>
    );
};
export default AddressModal;