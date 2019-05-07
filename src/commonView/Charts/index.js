import React, { PureComponent } from 'react';
import Charts from '@/components/Charts';
import { Select } from 'antd';

const { Option } = Select;
const { Bar, Pie, yuan } = Charts;

class ShowCharts extends PureComponent {
  state = {
    type: '',
    selectConf: [
      {
        key: 'bar',
        text: '柱状图',
      },
      {
        key: 'pie',
        text: '饼图',
      },
    ],
  };

  static defaultProps = {
    hasLegend: true,
    title: '标题',
    subTitle: '子标题', // pie
    data: [],
    height: 294,
  };

  handleChange = val => {
    this.setState({
      type: val,
    });
  };

  chartTypeSelect = () => {
    const { selectConf } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        size="large"
        style={{ minWidth: '100px', marginBottom: 12 }}
        defaultValue={selectConf[0].key}
      >
        {selectConf.map(item => (
          <Option key={item.key} value={item.key}>
            {' '}
            {item.text}{' '}
          </Option>
        ))}
      </Select>
    );
  };

  typeChoose = () => {
    const {
      hasLegend,
      title,
      subTitle,
      data,
      height,
      // total,
      // valueFormat
    } = this.props;
    const { type } = this.state;

    const barConf = {
      height,
      title,
      data,
    };
    const pieConf = {
      hasLegend,
      title,
      subTitle,
      // total,
      data,
      // valueFormat,
      height,
      total: () => (
        <span
          dangerouslySetInnerHTML={{
            __html: yuan(data.reduce((pre, now) => now.y + pre, 0)),
          }}
        />
      ),
      valueFormat: val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />,
    };

    const tC = {
      bar: <Bar {...barConf} />,
      pie: <Pie {...pieConf} />,
    };
    return type !== '' ? tC[type] : tC.bar;
  };

  render() {
    return (
      <div>
        {this.chartTypeSelect()}
        {this.typeChoose()}
      </div>
    );
  }
}
export default ShowCharts;
