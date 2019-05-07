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
class NewGoodsForm extends PureComponent {
  render() {
    let key = 0;
    // eslint-disable-next-line no-plusplus
    return (
      <Form>
        {confs.map(item => (
          <FormItemsCreate key={String(key++)} item={item} />
        ))}
      </Form>
    );
  }
}

export default NewGoodsForm;
