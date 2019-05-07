import React, { PureComponent } from 'react';
import { connect } from 'dva';
import confs from './config';
import { Form } from 'antd';
import FormItemsCreate from '@/commonView/FormItemsCreate';

// return conf.map(item => createFormItem(item));

@connect(({ enterpriseManagement, loading }) => ({
  enterpriseManagement,
  loading: loading.models.enterpriseManagement,
}))
@Form.create()
class NewGoodsForm extends PureComponent {
  componentDidMount() {
    const {
      enterpriseManagement: {
        updateModal: { curtData },
      },
      form: { setFieldsValue },
    } = this.props;
    Reflect.ownKeys(curtData).forEach(key => setFieldsValue({ key: curtData[key] }));
  }

  render() {
    let key = 0;
    // eslint-disable-next-line no-plusplus
    return (
      <Form>
        {confs.map(item => (
          <FormItemsCreate
            // eslint-disable-next-line no-plusplus
            key={String(key++)}
            item={item}
          />
        ))}
      </Form>
    );
  }
}

export default NewGoodsForm;
