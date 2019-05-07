import React from 'react';
import { Form } from 'antd';

const { Item } = Form;

export default Form.create()(itemProps => {
  const { form, item } = itemProps;
  const { getFieldDecorator } = form;
  const { itemConf, fieldConf } = item;
  const { name, rules, content } = fieldConf;

  return (
    <Item {...itemConf}>
      {getFieldDecorator(name, {
        rules,
      })(content)}
    </Item>
  );
});
