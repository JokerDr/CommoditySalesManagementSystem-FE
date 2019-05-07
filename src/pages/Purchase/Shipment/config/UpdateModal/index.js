import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import moment from 'moment';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ purchaseShipment }) => ({
  purchaseShipment,
}))
@Form.create()
class UpdateModal extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue, getFieldValue } = form;
    dispatch({
      type: 'purchaseShipment/update',
      payload: {
        ...getFieldsValue(),
        shipmentDate: moment(getFieldValue('shipmentDate')).valueOf(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'purchaseShipment/handleUpdateModal',
        payload: {
          updateModalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'purchaseShipment/fetchTableData',
        payload: {},
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'purchaseShipment/handleUpdateModal',
      payload: {
        updateModalVisible: false,
      },
    });
  };

  render() {
    const { purchaseShipment } = this.props;
    const { updateModalVisible, confirmLoading } = purchaseShipment.updateModal;
    return (
      <Modal
        className={styles.updateModal}
        title="Title"
        visible={updateModalVisible}
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

export default UpdateModal;
