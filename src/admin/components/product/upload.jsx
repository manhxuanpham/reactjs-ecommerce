import React, { useState } from 'react';

import { Modal, Button, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CopyOutlined } from '@ant-design/icons';

const MyUploadComponent = ({ accessToken, userId }) => {
    
    const headers = {
        'authorization': accessToken,
        'x-client-id': userId,
        'x-api-key': 'c3c39a25885c11cb8c8b5797897bf5eb20c8589b2b78f40a19a7a241d2f37d126f1cfe6891eac4d19e4c8168e88ddc36289402e7533f476336e966771747ffdd', // Thay thế bằng x- api - key
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const handleUploadChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.response.data.standard_url} file uploaded successfully`);
            setIsModalVisible(true);
            setImageUrl(info.file.response.data.standard_url);

         
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(imageUrl)
            .then(() => message.success('URL copied to clipboard!'))
            .catch(err => message.error('Failed to copy URL: ', err));
    };  
    return (
    <>
        <Upload
            action="http://localhost:3052/v1/api/upload/product" // Thay thế bằng URL của API bạn
            headers={headers}
            onChange={handleUploadChange}
            listType="picture"
            name="file"
            multiple={true}
        >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Modal
            title="Image Upload Successful"
            visible={isModalVisible}
            onOk={() => setIsModalVisible(false)}
            onCancel={() => setIsModalVisible(false)}
            footer={[
                <Button key="copy" icon={<CopyOutlined />} onClick={handleCopy}>
                    Copy URL
                </Button>,
                <Button key="close" onClick={() => setIsModalVisible(false)}>
                    Close
                </Button>
            ]}
        >
            <Input value={imageUrl} readOnly />
        </Modal>
    </>
        
    );
};

export default MyUploadComponent;
