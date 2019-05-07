/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Form, Input, Button, Icon } from 'antd';

import styles from '../../EnterpriseManagement.less';

const FormItem = Form.Item;
/* eslint react/no-multi-comp:0 */
@connect(({ enterpriseManagement, loading }) => ({
  enterpriseManagement,
  loading: loading.models.enterpriseManagement,
}))
@Form.create()
class SearchList extends PureComponent {
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // 重置状态
    dispatch({
      type: 'enterpriseManagement/handleSearchList',
      payload: {
        formValues: {},
      },
    });
    // 拉取远程数据,更新table
    dispatch({
      type: 'enterpriseManagement/fetchTableData',
      payload: {
        noCondition: true,
      },
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'enterpriseManagement/handleSearchList',
        payload: {
          formValues: fieldsValue,
        },
      });

      dispatch({
        type: 'enterpriseManagement/fetchTableData',
        payload: {
          noCondition: false,
          fieldsValue,
        },
      });
    });
  };

  renderButtonGroups() {
    return (
      <span style={{ marginBottom: 24 }}>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
          重置
        </Button>
      </span>
    );
  }

  renderForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="请输入查询内容">
              {getFieldDecorator('condition')(
                <Input placeholder="可根据来往单位姓名、联系人、公司名称、手机、邮件、qq/wechat、业务员来进行模糊搜索" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            {this.renderButtonGroups()}
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    return <div className={styles.tableListForm}>{this.renderForm()}</div>;
  }
}

export default SearchList;
