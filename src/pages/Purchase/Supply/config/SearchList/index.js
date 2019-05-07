/* eslint-disable class-methods-use-this */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Form, Input, Button, Icon } from 'antd';

import styles from '../../Supply.less';
import SupplierSelect from '@/commonView/SuppliersSelector';

const FormItem = Form.Item;
/* eslint react/no-multi-comp:0 */
@connect(({ purchaseSupply, loading }) => ({
  purchaseSupply,
  loading: loading.models.purchaseSupply,
}))
@Form.create()
class SearchList extends PureComponent {
  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    // 重置状态
    dispatch({
      type: 'purchaseSupply/handleSearchList',
      payload: {
        expandForm: false,
        formValues: {},
      },
    });
    // 拉取远程数据,更新table
    dispatch({
      type: 'purchaseSupply/fetchTableData',
      payload: {},
    });
  };

  toggleForm = () => {
    const { purchaseSupply, dispatch } = this.props;
    dispatch({
      type: 'purchaseSupply/handleSearchList',
      payload: {
        expandForm: !purchaseSupply.searchList.expandForm,
      },
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'purchaseSupply/handleSearchList',
        payload: {
          formValues: fieldsValue,
        },
      });

      dispatch({
        type: 'purchaseSupply/fetchTableData',
        payload: fieldsValue,
      });
    });
  };

  renderButtonGroups() {
    const { purchaseSupply } = this.props;
    const { expandForm } = purchaseSupply.searchList;
    return (
      <span style={{ marginBottom: 24 }}>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
          重置
        </Button>
        <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
          {expandForm ? '收起' : '展开'}
          {expandForm ? <Icon type="up" /> : <Icon type="down" />}
        </a>
      </span>
    );
  }

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="商品名称">
              {getFieldDecorator('goodsName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="进货日期">
              {getFieldDecorator('supplyDate')(
                <DatePicker
                  style={{ width: '100%' }}
                  // showTime
                  format="YYYY-MM-DD"
                  placeholder="选择进货日期"
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
            <FormItem label="进货日期">
              {getFieldDecorator('supplyDate')(
                <DatePicker
                  style={{ width: '100%' }}
                  // showTime
                  format="YYYY-MM-DD"
                  placeholder="选择进货日期"
                />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="商品种类">
              {getFieldDecorator('goodsCategories')(
                <Input style={{ width: '100%' }} placeholder="请输入商品种类" />
              )}
            </FormItem>
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
          <Col md={8} sm={24}>
            <FormItem label="供货商">{getFieldDecorator('supplier')(<SupplierSelect />)}</FormItem>
          </Col>
        </Row>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              收起 <Icon type="up" />
            </a>
          </div>
        </div>
      </Form>
    );
  }

  renderForm() {
    const { purchaseSupply } = this.props;
    const { expandForm } = purchaseSupply.searchList;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  render() {
    return <div className={styles.tableListForm}>{this.renderForm()}</div>;
  }
}

export default SearchList;
