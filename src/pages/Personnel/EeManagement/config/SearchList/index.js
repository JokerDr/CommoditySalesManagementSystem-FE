/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Input, Button } from 'antd';

import styles from '../../EeManagement.less';

const FormItem = Form.Item;
/* eslint react/no-multi-comp:0 */
@connect(({ eeManagement, loading }) => ({
  eeManagement,
  loading: loading.models.eeManagement,
}))
@Form.create()
class SearchList extends PureComponent {
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // 重置状态
    dispatch({
      type: 'eeManagement/handleSearchList',
      payload: {
        formValues: {},
      },
    });
    // 拉取远程数据,更新table
    dispatch({
      type: 'eeManagement/fetchTableData',
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
        type: 'eeManagement/handleSearchList',
        payload: {
          formValues: fieldsValue,
        },
      });

      dispatch({
        type: 'eeManagement/fetchTableData',
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
            <FormItem label="请输查询人">
              {getFieldDecorator('condition')(<Input placeholder="不填则查询所有人" />)}
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
