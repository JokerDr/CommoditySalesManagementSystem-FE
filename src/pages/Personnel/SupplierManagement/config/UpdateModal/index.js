import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ supplierManagement }) => ({
  supplierManagement,
}))
@Form.create()
class UpdateModal extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    dispatch({
      type: 'supplierManagement/update',
      payload: {
        ...getFieldsValue(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'supplierManagement/handleUpdateModal',
        payload: {
          updateModalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'supplierManagement/fetchTableData',
        payload: {
          noCondition: false,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplierManagement/handleUpdateModal',
      payload: {
        updateModalVisible: false,
      },
    });
  };

  render() {
    const { supplierManagement } = this.props;
    const { updateModalVisible, confirmLoading } = supplierManagement.updateModal;
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
