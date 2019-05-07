import React, { PureComponent } from 'react';
import { Input, Select, DatePicker } from 'antd';
import { connect } from 'dva';

const { Option } = Select;
const { TextArea } = Input;

@connect(({ purchaseShipment, loading }) => ({
  purchaseShipment,
  fetching: loading.effects['purchaseShipment/fetchSuppliers'],
}))
class SupplierSelect extends PureComponent {
  componentWillMount() {
    this.getSuppliers();
  }

  getSuppliers() {
    const { dispatch } = this.props;
    dispatch({
      type: 'purchaseShipment/fetchSuppliers',
      payload: {},
    });
  }

  renderOptions() {
    const { fetching, purchaseShipment } = this.props;
    const { suppliers } = purchaseShipment;
    // console.log(fetching,purchaseShipment);
    return (
      fetching &&
      suppliers.length !== 0 &&
      suppliers.map(item => {
        return (
          <Option
            // eslint-disable-next-line no-underscore-dangle
            key={String(item._id)}
          >
            {item.name}
          </Option>
        );
      })
    );
  }

  render() {
    return <Select>{this.renderOptions()}</Select>;
  }
}

export default [
  {
    // 商品大类（必填）
    itemConf: {
      label: '商品大类',
    },
    fieldConf: {
      name: 'goodsCategories',
      rules: [
        {
          required: true,
          message: '商品大类',
          min: 2,
          max: 10,
        },
      ],
      content: <Input />,
    },
  },
  {
    // 商品名称（必填）
    itemConf: {
      label: '商品名称',
    },
    fieldConf: {
      name: 'goodsName',
      rules: [
        {
          required: true,
          message: '商品名称',
        },
      ],
      content: <Input />,
    },
  },
  {
    // 规格型号（型号颜色）
    itemConf: {
      label: '规格型号',
    },
    fieldConf: {
      name: 'specifications',
      rules: [
        {
          message: '规格型号',
        },
      ],
      content: <Input />,
    },
  },
  {
    // 商品编码（必填）
    itemConf: {
      label: '商品编码',
    },
    fieldConf: {
      name: 'goodsCode',
      rules: [
        {
          required: true,
          message: '商品编码',
        },
      ],
      content: <Input />,
    },
  },
  {
    //   退货数量
    itemConf: {
      label: '退货数量',
    },
    fieldConf: {
      name: 'shipmentCount',
      rules: [
        {
          required: true,
          message: '退货数量',
        },
      ],
      content: <Input />,
    },
  },
  {
    //   退货单价
    itemConf: {
      label: '退货单价',
    },
    fieldConf: {
      name: 'shipmentPrice',
      rules: [
        {
          required: true,
          message: '退货单价',
          pattern: /^[0-9]+$/,
        },
      ],
      content: <Input />,
    },
  },
  {
    //   合计总额
    itemConf: {
      label: '合计总额',
    },
    fieldConf: {
      name: 'totle',
      rules: [
        {
          required: true,
          message: '合计总额',
          pattern: /^[0-9.]+$/,
        },
      ],
      content: <Input />,
    },
  },
  {
    //   供货商
    itemConf: {
      label: '供货商',
    },
    fieldConf: {
      name: 'supplier',
      rules: [
        {
          required: true,
          message: '供货商',
          pattern: /^[0-9.]+$/,
        },
      ],
      content: <SupplierSelect />,
    },
  },
  {
    //   退货日期
    itemConf: {
      label: '退货日期',
    },
    fieldConf: {
      name: 'shipmentDate',
      rules: [
        {
          required: true,
          message: '退货日期',
        },
      ],
      content: (
        <DatePicker
          style={{ width: '100%' }}
          showTime
          format="YYYY-MM-DD HH:mm:ss "
          placeholder="退货日期"
        />
      ),
    },
  },
  {
    //   退货人
    itemConf: {
      label: '退货人',
    },
    fieldConf: {
      name: 'execcutor',
      rules: [
        {
          required: true,
          message: '退货人',
        },
      ],
      content: <Input />,
    },
  },
  {
    //   备注
    itemConf: {
      label: '备注',
    },
    fieldConf: {
      name: 'note',
      rules: [
        {
          message: '备注',
        },
      ],
      content: <TextArea />,
    },
  },
];
