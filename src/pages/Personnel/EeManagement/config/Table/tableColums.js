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
      title: '员工',
      dataIndex: 'name',
      // render: text => <a onClick={() => previewItem(text)}>{text}</a>,
    },
    {
      title: '采购权限',
      dataIndex: 'purchase',
    },
    {
      title: '销售权限',
      dataIndex: 'sale',
      // sorter: true,
      // render: val => `${val} 万`,
      // // mark to display a total number
      // needTotal: true,
    },
    {
      title: '库存权限',
      dataIndex: 'inventry',
    },
    {
      title: '利润权限',
      dataIndex: 'profit',
    },
    {
      title: '人事管理权限',
      dataIndex: 'personnel_Manage',
    },
    {
      title: '统计权限',
      dataIndex: 'statistics',
    },

    {
      title: '操作',
      dataIndex: '_authorId',
      render: (text, record) => {
        const handleUpdateClick = () => {
          handle.update(record);
        };
        const handleRemoveClick = () => {
          handle.remove(
            // eslint-disable-next-line no-underscore-dangle
            [record._authorId]
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
