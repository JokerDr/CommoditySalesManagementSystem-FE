import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ customerManagement }) => ({
  customerManagement,
}))
@Form.create()
class UpdateModal extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    dispatch({
      type: 'customerManagement/update',
      payload: {
        ...getFieldsValue(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'customerManagement/handleUpdateModal',
        payload: {
          updateModalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'customerManagement/fetchTableData',
        payload: {
          noCondition: false,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'customerManagement/handleUpdateModal',
      payload: {
        updateModalVisible: false,
      },
    });
  };

  render() {
    const { customerManagement } = this.props;
    const { updateModalVisible, confirmLoading } = customerManagement.updateModal;
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
