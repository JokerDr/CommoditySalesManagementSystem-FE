import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ customerManagement }) => ({
  customerManagement,
}))
@Form.create()
class NewGoods extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    // const {} =
    dispatch({
      type: 'customerManagement/add',
      payload: {
        ...getFieldsValue(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'customerManagement/handleModal',
        payload: {
          modalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'customerManagement/fetchTableData',
        payload: {
          noCondition: true,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'customerManagement/handleModal',
      payload: {
        modalVisible: false,
      },
    });
  };

  render() {
    const { customerManagement } = this.props;
    const { modalVisible, confirmLoading } = customerManagement.modal;
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
