/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Form, Button } from 'antd';

import styles from '../../EeSales.less';

const { MonthPicker } = DatePicker;

const FormItem = Form.Item;
/* eslint react/no-multi-comp:0 */
@connect(({ eeSales, loading }) => ({
  eeSales,
  loading: loading.models.eeSales,
}))
@Form.create()
class SearchList extends PureComponent {
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // 重置状态
    dispatch({
      type: 'eeSales/handleSearchList',
      payload: {
        expandForm: false,
        formValues: {},
      },
    });
    // 拉取远程数据,更新table
    dispatch({
      type: 'eeSales/fetchTableData',
      payload: {},
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'eeSales/handleSearchList',
        payload: {
          formValues: fieldsValue,
        },
      });

      dispatch({
        type: 'eeSales/fetchTableData',
        payload: fieldsValue,
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
            <FormItem label="查询日期">
              {getFieldDecorator('date')(
                <MonthPicker
                  style={{ width: '100%' }}
                  // showTime
                  format="YYYY-MM"
                  placeholder="选择查询日期"
                />
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
