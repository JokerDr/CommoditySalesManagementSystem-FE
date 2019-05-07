import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ supplierManagement }) => ({
  supplierManagement,
}))
@Form.create()
class NewGoods extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    // const {} =
    dispatch({
      type: 'supplierManagement/add',
      payload: {
        ...getFieldsValue(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'supplierManagement/handleModal',
        payload: {
          modalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'supplierManagement/fetchTableData',
        payload: {
          noCondition: true,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplierManagement/handleModal',
      payload: {
        modalVisible: false,
      },
    });
  };

  render() {
    const { supplierManagement } = this.props;
    const { modalVisible, confirmLoading } = supplierManagement.modal;
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
