import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.png';

import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';
import Translator from '@/components/I18n/Translator';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            // style={{ margin: "0 auto 40px", display: "block" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />
          )}
        </div>
        <Menu mode="inline">
          <Menu.Item key={'Dashboard'} icon={<DashboardOutlined />}>
            <Link to={'/'} />
            <Translator path="navigation.menu.dashboard"/>
          </Menu.Item>
          <Menu.Item key={'Customer'} icon={<CustomerServiceOutlined />}>
            <Link to={'/customer'} />
            <Translator path="navigation.menu.customer"/>
          </Menu.Item>
          <Menu.Item key={'Invoice'} icon={<FileTextOutlined />}>
            <Link to={'/invoice'} />
            <Translator path="navigation.menu.invoice"/>
          </Menu.Item>
          <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
            <Link to={'/quote'} />
            <Translator path="navigation.menu.quote"/>
          </Menu.Item>
          <Menu.Item key={'PaymentInvoice'} icon={<CreditCardOutlined />}>
            <Link to={'/payment/invoice'} />
            <Translator path="navigation.menu.paymentInvoice"/>
          </Menu.Item>
          <Menu.Item key={'Employee'} icon={<UserOutlined />}>
            <Link to={'/employee'} />
            <Translator path="navigation.menu.employee"/>
          </Menu.Item>
          <Menu.Item key={'Admin'} icon={<TeamOutlined />}>
            <Link to={'/admin'} />
            <Translator path="navigation.menu.admin"/>
          </Menu.Item>
          <SubMenu key={'Settings'} icon={<SettingOutlined />} title={'Settings'}>
            <Menu.Item key={'PaymentMode'}>
              <Link to={'/payment/mode'} />
              <Translator path="navigation.menu.paymentMode"/>
            </Menu.Item>
            <Menu.Item key={'Role'}>
              <Link to={'/role'} />
              <Translator path="navigation.menu.role"/>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
