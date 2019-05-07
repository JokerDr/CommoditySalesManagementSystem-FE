import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

const { Option } = Select;

@connect(({ purchaseSupply, loading }) => ({
  purchaseSupply,
  fetching: loading.effects['purchaseSupply/fetchSuppliers'],
}))
class SupplierSelect extends PureComponent {
  componentWillMount() {
    this.getSuppliers();
  }

  getSuppliers() {
    const { dispatch } = this.props;
    dispatch({
      type: 'purchaseSupply/fetchSuppliers',
      payload: {},
    });
  }

  renderOptions() {
    const { fetching, purchaseSupply } = this.props;
    const { suppliers } = purchaseSupply;

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

export default SupplierSelect;
