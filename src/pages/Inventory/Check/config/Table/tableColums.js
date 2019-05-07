export default () => {
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
      title: '累计采购进货',
      dataIndex: 'purSupplyCumulative',
    },
    {
      title: '查询日期采购进货',
      dataIndex: 'purSupplyDateQuery',
    },
    {
      title: '累计采购退货',
      dataIndex: 'purShipmentCumulative',
    },
    {
      title: '查询日期采购退货',
      dataIndex: 'purShipmentDateQuery',
    },
    {
      title: '累计销售出货',
      dataIndex: 'saleSupplyCumulative',
    },
    {
      title: '查询日期销售出货',
      dataIndex: 'saleSupplyDateQuery',
    },
    {
      title: '累计销售退货',
      dataIndex: 'saleShipmentCumulative',
    },
    {
      title: '查询日期销售退货',
      dataIndex: 'saleShipmentDateQuery',
    },
    {
      title: '当前库存',
      dataIndex: 'inventryCurrent',
    },
    {
      title: '查询日期库存',
      dataIndex: 'inventryDateQuery',
    },
  ];
};
