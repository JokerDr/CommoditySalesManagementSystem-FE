export default () => {
  return [
    {
      title: '员工',
      dataIndex: 'employee',
      // render: text => <a onClick={() => previewItem(text)}>{text}</a>,
    },
    {
      title: '销售数量合计',
      dataIndex: 'saleCount',
    },
    {
      title: '销售金额合计',
      dataIndex: 'saleProfit',
      // sorter: true,
      // render: val => `${val} 万`,
      // // mark to display a total number
      // needTotal: true,
    },
    // {
    //   title: '业绩利润',
    //   dataIndex: 'profit',
    // },
  ];
};
