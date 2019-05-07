import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import moment from 'moment';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ saleSupply }) => ({
  saleSupply,
}))
@Form.create()
class NewGoods extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue, getFieldValue } = form;
    dispatch({
      type: 'saleSupply/add',
      payload: {
        ...getFieldsValue(),
        supplyDate: moment(getFieldValue('supplyDate')).valueOf(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'saleSupply/handleModal',
        payload: {
          modalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'saleSupply/fetchTableData',
        payload: {},
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'saleSupply/handleModal',
      payload: {
        modalVisible: false,
      },
    });
  };

  render() {
    const { saleSupply } = this.props;
    const { modalVisible, confirmLoading } = saleSupply.modal;
    return (
      <Modal
        className={styles.modal}
        title="Title"
        visible={modalVisible}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        okText=""
        cancelText="取消"
      >
        <NewGoodsForm />
      </Modal>
    );
  }
}

export default NewGoods;
