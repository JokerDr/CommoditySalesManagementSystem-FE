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
      title: '供应商简称',
      dataIndex: 'name',
      // render: text => <a onClick={() => previewItem(text)}>{text}</a>,
    },
    {
      title: '主联系人',
      dataIndex: 'liner',
    },
    {
      title: '公司名',
      dataIndex: 'companyName',
      // sorter: true,
      // render: val => `${val} 万`,
      // // mark to display a total number
      // needTotal: true,
    },
    {
      title: '手机',
      dataIndex: 'phone',
    },
    {
      title: '联系电话',
      dataIndex: 'tel',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '传真',
      dataIndex: 'fax',
    },
    {
      title: '通讯地址',
      dataIndex: 'address',
    },
    {
      title: '邮编',
      dataIndex: 'zip',
    },
    {
      title: '联系人性别',
      dataIndex: 'sex',
    },
    {
      title: '职务',
      dataIndex: 'Duties',
    },
    {
      title: 'qq/wechat',
      dataIndex: 'qqWechat',
    },
    {
      title: '网址',
      dataIndex: 'netAddress',
    },
    {
      title: '业务员',
      dataIndex: 'saleMan',
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
