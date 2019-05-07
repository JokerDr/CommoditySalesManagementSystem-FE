import React, { PureComponent } from 'react';
import { connect } from 'dva';
import confs from './config';
import { Form } from 'antd';
import FormItemsCreate from '@/commonView/FormItemsCreate';

// return conf.map(item => createFormItem(item));

@connect(({ saleSupply, loading }) => ({
  saleSupply,
  loading: loading.models.saleSupply,
}))
@Form.create()
class NewGoodsForm extends PureComponent {
  render() {
    const {
      saleSupply: {
        updateModal: { curtData },
      },
      form: { setFieldsValue },
    } = this.props;
    let key = 0;
    Reflect.ownKeys(curtData).forEach(key => setFieldsValue({ key: curtData[key] }));
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
