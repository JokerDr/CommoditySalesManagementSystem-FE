import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import moment from 'moment';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ saleShipment }) => ({
  saleShipment,
}))
@Form.create()
class NewGoods extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue, getFieldValue } = form;
    dispatch({
      type: 'saleShipment/add',
      payload: {
        ...getFieldsValue(),
        shipmentDate: moment(getFieldValue('shipmentDate')).valueOf(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'saleShipment/handleModal',
        payload: {
          modalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'saleShipment/fetchTableData',
        payload: {},
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'saleShipment/handleModal',
      payload: {
        modalVisible: false,
      },
    });
  };

  render() {
    const { saleShipment } = this.props;
    const { modalVisible, confirmLoading } = saleShipment.modal;
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
