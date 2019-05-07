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
class UpdateModal extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue, getFieldValue } = form;
    dispatch({
      type: 'saleShipment/update',
      payload: {
        ...getFieldsValue(),
        shipmentDate: moment(getFieldValue('shipmentDate')).valueOf(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'saleShipment/handleUpdateModal',
        payload: {
          updateModalVisible: false,
          confirmLoading: false,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'saleShipment/handleUpdateModal',
      payload: {
        updateModalVisible: false,
      },
    });
    dispatch({
      type: 'saleShipment/fetchTableData',
      payload: {},
    });
  };

  render() {
    const { saleShipment } = this.props;
    const { updateModalVisible, confirmLoading } = saleShipment.updateModal;
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
