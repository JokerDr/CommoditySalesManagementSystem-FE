import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'my blog',
          title: <Icon type="github" />,
          href: 'https://blog.yuanqinglong.cn/',
          blankTarget: true,
        },
        {
          key: 'my github',
          title: <Icon type="github" />,
          href: 'https://github.com/JokerDr/CommoditySalesManagementSystem/',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 数据科学与技术学院 袁庆龙
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
