import React, { useState } from 'react';
import { Table, Input, Button, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const generateVariations = (variations) => {
    const result = [];

    function helper(arr, variation) {
        if (variation.length === variations.length) {
            result.push(variation);
            return;
        }

        const currentVariation = variations[variation.length];
        for (let option of currentVariation.options) {
            helper(arr, variation.concat([`${currentVariation.name}: ${option}`]));
        }
    }

    helper(variations, []);
    return result;
};

const SkuTable = ({ variations,dataSource,setDataSource }) => {
    
    


};

export default SkuTable