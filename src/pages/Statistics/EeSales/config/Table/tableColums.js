export default () => {
  return [
    {
      title: '员工',
      dataIndex: 'employee',
      // render: text => <a onClick={() => previewItem(text)}>{text}</a>,
    },
    {
      title: '销售金额',
      dataIndex: 'saleCount',
    },
    {
      title: '所占百分比',
      dataIndex: 'percent',
    },
  ];
};
