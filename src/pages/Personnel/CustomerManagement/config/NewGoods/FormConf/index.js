import React, { PureComponent } from 'react';
import { connect } from 'dva';
import confs from './config';
import { Form } from 'antd';
import FormItemsCreate from '@/commonView/FormItemsCreate';

// return conf.map(item => createFormItem(item));

@connect(({ customerManagement, loading }) => ({
  customerManagement,
  loading: loading.models.customerManagement,
}))
class NewGoodsForm extends PureComponent {
  render() {
    let key = 0;
    // eslint-disable-next-line no-plusplus
    return (
      <Form>
        {confs.map(item => (
          // eslint-disable-next-line no-plusplus
          <FormItemsCreate key={String(key++)} item={item} />
        ))}
      </Form>
    );
  }
}

export default NewGoodsForm;
