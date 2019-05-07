import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Form } from 'antd';
import NewGoodsForm from './FormConf';
import styles from './style.less';

@connect(({ enterpriseManagement }) => ({
  enterpriseManagement,
}))
@Form.create()
class NewGoods extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props;
    const { getFieldsValue } = form;
    // const {} =
    dispatch({
      type: 'enterpriseManagement/add',
      payload: {
        ...getFieldsValue(),
      },
    });

    setTimeout(() => {
      dispatch({
        type: 'enterpriseManagement/handleModal',
        payload: {
          modalVisible: false,
          confirmLoading: false,
        },
      });
      dispatch({
        type: 'enterpriseManagement/fetchTableData',
        payload: {
          noCondition: true,
        },
      });
    }, 1000);
  };

  handleCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'enterpriseManagement/handleModal',
      payload: {
        modalVisible: false,
      },
    });
  };

  render() {
    const { enterpriseManagement } = this.props;
    const { modalVisible, confirmLoading } = enterpriseManagement.modal;
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
