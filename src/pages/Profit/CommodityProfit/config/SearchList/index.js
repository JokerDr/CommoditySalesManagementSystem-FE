/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Form, Input, Button } from 'antd';

import styles from '../../CommodityProfit.less';

const { MonthPicker } = DatePicker;

const FormItem = Form.Item;
/* eslint react/no-multi-comp:0 */
@connect(({ commodityProfit, loading }) => ({
  commodityProfit,
  loading: loading.models.commodityProfit,
}))
@Form.create()
class SearchList extends PureComponent {
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // 重置状态
    dispatch({
      type: 'commodityProfit/handleSearchList',
      payload: {
        expandForm: false,
        formValues: {},
      },
    });
    // 拉取远程数据,更新table
    dispatch({
      type: 'commodityProfit/fetchTableData',
      payload: {},
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'commodityProfit/handleSearchList',
        payload: {
          formValues: fieldsValue,
        },
      });

      dispatch({
        type: 'commodityProfit/fetchTableData',
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

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="商品名称">
              {getFieldDecorator('goodsName')(<Input placeholder="请输入商品名称" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="商品种类">
              {getFieldDecorator('goodsCategories')(
                <Input style={{ width: '100%' }} placeholder="请输入商品种类" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="查询日期">{getFieldDecorator('queryDate')(<MonthPicker />)}</FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规格型号">
              {getFieldDecorator('specifications')(<Input placeholder="请输入规格型号" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="商品编码">
              {getFieldDecorator('goodsCode')(<Input placeholder="输入商品编码" />)}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginBottom: 24 }}>{this.renderButtonGroups()}</Row>
      </Form>
    );
  }

  renderForm() {
    return this.renderAdvancedForm();
  }

  render() {
    return <div className={styles.tableListForm}>{this.renderForm()}</div>;
  }
}

export default SearchList;
