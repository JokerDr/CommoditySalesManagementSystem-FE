import React from 'react';
import { Input, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default [
  {
    itemConf: {
      label: '供应商名称',
    },
    fieldConf: {
      name: 'name',
      rules: [
        {
          required: true,
          message: '供应商名称',
        },
      ],
      content: <Input />,
    },
  },
  {
    // 联系人
    itemConf: {
      label: '供应商姓名',
    },
    fieldConf: {
      name: 'liner',
      rules: [
        {
          required: true,
          message: '联系人',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '性别',
    },
    fieldConf: {
      name: 'sex',
      rules: [
        {
          message: '性别',
        },
      ],
      content: (
        <Select>
          <Option key="male">男</Option>
          <Option key="female">女</Option>
        </Select>
      ),
    },
  },
  {
    itemConf: {
      label: '职务',
    },
    fieldConf: {
      name: 'duties',
      rules: [
        {
          required: true,
          message: '职务',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '手机',
    },
    fieldConf: {
      name: 'phone',
      rules: [
        {
          required: true,
          pattern: /^[\d]{11}$/,
          message: '手机',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '联系电话',
    },
    fieldConf: {
      name: 'tel',
      rules: [
        {
          required: true,
          message: '联系电话',
          pattern: /^[0-9]+$/,
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '邮箱',
    },
    fieldConf: {
      name: 'email',
      rules: [
        {
          required: true,
          message: '邮箱',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: 'qq/wechat',
    },
    fieldConf: {
      name: 'qqWechat',
      rules: [
        {
          required: true,
          message: 'wechat',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '传真',
    },
    fieldConf: {
      name: 'fax',
      rules: [
        {
          required: true,
          message: '传真',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '通讯地址',
    },
    fieldConf: {
      name: 'address',
      rules: [
        {
          required: true,
          message: '通讯地址',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '邮编',
    },
    fieldConf: {
      name: 'zip',
      rules: [
        {
          required: true,
          message: '邮编',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '网址',
    },
    fieldConf: {
      name: 'netAddress',
      rules: [
        {
          required: true,
          message: '网址',
        },
      ],
      content: <Input />,
    },
  },
  {
    itemConf: {
      label: '业务员',
    },
    fieldConf: {
      name: 'saleMan',
      rules: [
        {
          required: true,
          message: '业务员',
        },
      ],
      content: <Input />,
    },
  },
  {
    //   备注
    itemConf: {
      label: '备注',
    },
    fieldConf: {
      name: 'note',
      rules: [
        {
          message: '备注',
        },
      ],
      content: <TextArea />,
    },
  },
];
