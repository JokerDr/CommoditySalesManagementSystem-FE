import React, { Fragment } from 'react';
import UpdateModal from '../UpdateModal';
// import moment from 'moment';
// import router from 'umi/router';

// const status = ['关闭', '运行中', '已上线', '异常'];
// const statusMap = ['default', 'processing', 'success', 'error'];

// const  previewItem = id => {
//     router.push(`/profile/basic/${id}`);
//   };

export default handle => {
  return [
    {
      title: '商品大类',
      dataIndex: 'goodsCategories',
      // render: text => <a onClick={() => previewItem(text)}>{text}</a>,
    },
    {
      title: '商品名称',
      dataIndex: 'goodsName',
    },
    {
      title: '商品规格',
      dataIndex: 'specifications',
      // sorter: true,
      // render: val => `${val} 万`,
      // // mark to display a total number
      // needTotal: true,
    },
    {
      title: '商品编码',
      dataIndex: 'goodsCode',
    },
    {
      title: '出货日期',
      dataIndex: 'supplyDate',
    },
    {
      title: '出货数量',
      dataIndex: 'supplyCount',
    },
    {
      title: '出货单价',
      dataIndex: 'supplyPrice',
    },
    {
      title: '合计',
      dataIndex: 'totle',
    },
    {
      title: '已付金额',
      dataIndex: 'paid',
    },
    {
      title: '欠款金额',
      dataIndex: 'notPaid',
    },
    {
      title: '客户',
      dataIndex: 'supplier',
    },
    {
      title: '出货人',
      dataIndex: 'executor',
    },
    {
      title: '备注',
      dataIndex: 'note',
    },
    {
      title: '操作',
      dataIndex: '_id',
      render: (text, record) => {
        const handleUpdateClick = () => {
          handle.update(record);
        };
        const handleRemoveClick = () => {
          handle.remove(
            // eslint-disable-next-line no-underscore-dangle
            [record._id]
          );
        };

        return (
          <Fragment>
            <a
              onClick={handleUpdateClick()}
              // eslint-disable-next-line no-script-url
              href="javascript: void(0)"
            >
              更新
            </a>
            <a
              onClick={handleRemoveClick()}
              // eslint-disable-next-line no-script-url
              href="javascript: void(0)"
            >
              删除
            </a>
            <UpdateModal />
          </Fragment>
        );
      },
    },
  ];
};
