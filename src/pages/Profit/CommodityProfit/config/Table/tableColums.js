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
    },
    {
      title: '商品编码',
      dataIndex: 'goodsCode',
    },
    {
      title: '累计进货数',
      dataIndex: 'purSupplyCumulative',
    },
    {
      title: '查询日期进货数',
      dataIndex: 'purSupplyDateQuery',
    },
    {
      title: '累计进货金额',
      dataIndex: 'purShipmentMyCumulative',
    },
    {
      title: '查询日期进货金额',
      dataIndex: 'purShipmentMyDateQuery',
    },
    {
      title: '累计出货数',
      dataIndex: 'saleSupplyCumulative',
    },
    {
      title: '查询日期出货数',
      dataIndex: 'saleSupplyDateQuery',
    },
    {
      title: '累计出货金额',
      dataIndex: 'saleShipmentMyCumulative',
    },
    {
      title: '查询日期出货金额',
      dataIndex: 'saleShipmentMyDateQuery',
    },
    {
      title: '累计利润',
      dataIndex: 'profitCumulative',
    },
    {
      title: '查询日期利润',
      dataIndex: 'saleShipmentDateQuery',
    },
    // {
    //   title: '利润率',
    //   dataIndex: 'profitRate',
    // },
    {
      title: '当前库存数',
      dataIndex: 'inventory',
    },
    {
      title: '查询日期库存数',
      dataIndex: 'inventoryDateQuery',
    },
    {
      title: '当前库存金额',
      dataIndex: 'inventryMoney',
    },
    {
      title: '查询日期库存金额',
      dataIndex: 'inventryMyDateQuery',
    },
  ];
};
