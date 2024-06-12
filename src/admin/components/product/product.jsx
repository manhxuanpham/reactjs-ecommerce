import { Table, Space } from "antd"
import { useEffect, useState, useRef } from "react"
import { getAllProductByShop } from "../../../service/product.service"
import { useSelector } from "react-redux"
import { Button, Form, Input, Modal, Radio } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import CreateProductModal from './createproduct.modal'
import CreateSkuModal from './createsku.modal';
import _ from 'lodash';
import { createSPU } from './../../../service/product.service';
const Product = () => {
    const [data, setData] = useState([])
    const user = useSelector((state) => state.auth.login?.currentUser) || null;
    const accessToken = user?.data.tokens.accessToken
    const shopId = user?.data.shop._id

    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(false);
    const [isSkuModalOpen, setIsSkuModalOpen] = useState(false);
    const [variationsData, setVariationsData] = useState([]);
    const [productData, setProductData] = useState({});
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const onCreate = (values) => {
        console.log('Received values of form product: ', values);

        const convertedVariations = values.product_variations.map(variation => ({
            image: variation.options.map(option => option.images), // Collect all images from options
            name: variation.name,
            options: variation.options.map(option => option.value)
        }));

        const convertedData = {
            ...values,
            product_variations: convertedVariations
        };

        console.log(convertedData);

        setVariationsData(convertedData.product_variations);
        setProductData(convertedData);
        //  setFormValues(values);
        setOpen(false);
        setIsSkuModalOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const handleCancelv2 = () => {
        setOpen(true);
        setIsSkuModalOpen(false);
    };
    const handleSkuSubmit = (skudata) => {
        console.log("Processing SKU data...", skudata);
        const totalquantity = skudata.reduce((total, sku) => total + sku.sku_stock, 0);
        const data = { ...productData, product_quantity: totalquantity, sku_list: skudata.map(sku => _.omit(sku, ['key', 'description'])) }
        // setProductData((prevData) => ({ ...prevData, product_quantity: totalquantity, sku_list:skudata.map(sku => _.omit(sku, ['key', 'description'])) }));
        console.log("productData", data);
        //create produuct
        createSPU(shopId, accessToken, data)
        setIsSkuModalOpen(false);
    };

    const columns = [
        {
            title: 'Mã sản phẩm',
            dataIndex: 'product_id',
            key: 'product_id'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'product_thumb',
            key: 'product_thumb',
            render: product_thumb => <img src={product_thumb} alt="Profile" style={{ width: 70, height: 70 }} />
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
            ...getColumnSearchProps('product_name'),

        },
        {
            title: 'Giá sản phẩm',
            dataIndex: 'product_price',
            key: 'product_price',
            sorter: (a, b) => a.product_price - b.product_price,
            render: product_price => `${new Intl.NumberFormat().format(product_price)} đ `
        },
        {
            title: 'Ngày Tạo',
            dataIndex: 'createdAt',
            sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
            render: createdAt => new Date(createdAt).toLocaleDateString()
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]



    useEffect(() => {
        async function fetchAllProductByShop() {
            const response = await getAllProductByShop(shopId, accessToken)
            setData(response.data)
        }
        fetchAllProductByShop()
    }, [])
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Thêm mới sản phẩm
            </Button>
            <CreateProductModal open={open} onCreate={onCreate} onCancel={handleCancel} placeholder="Start typings..."  ></CreateProductModal>
            <CreateSkuModal open={isSkuModalOpen} onCreate={handleSkuSubmit} onCancel={handleCancelv2} variationsData={variationsData} ></CreateSkuModal>
            <Table columns={columns} dataSource={data} onChange={onChange} />

        </>


    )
}

export default Product