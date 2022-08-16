import React from 'react';
import dayjs from 'dayjs';
import { Tag } from 'antd';
import InvoiceModule from '@/modules/InvoiceModule';
import { useMoney } from '@/settings';
import Translator from '@/components/I18n/Translator';

export default function Invoice() {
  const { moneyRowFormatter } = useMoney();

  const entity = 'invoice';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
  };
  const entityDisplayLabels = ['number', 'client.company'];
  const dataTableColumns = [
    {
      title: '#N',
      dataIndex: 'number',
    },
    {
      title: <Translator path="invoice.list.columns.client"/>,
      dataIndex: ['client', 'company'],
    },
    {
      title: <Translator path="invoice.list.columns.creationDate"/>,
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: <Translator path="invoice.list.columns.dueDate"/>,
      dataIndex: 'expiredDate',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: <Translator path="invoice.list.columns.total"/>,
      dataIndex: 'total',
      render: (amount) => moneyRowFormatter({ amount }),
    },
    {
      title: <Translator path="invoice.list.columns.balance"/>,
      dataIndex: 'credit',
      render: (amount) => moneyRowFormatter({ amount }),
    },
    {
      title: <Translator path="invoice.list.columns.status"/>,
      dataIndex: 'status',
      render: (status) => {
        let color = status === 'draft' ? 'cyan' : status === 'sent' ? 'magenta' : 'gold';
        
        const statusPath = `invoice.list.columns.statusLabel.${status}`;
        return <Tag color={color}>{status && <Translator path={statusPath} />}</Tag>;
      },
    },
    {
      title: <Translator path="invoice.list.columns.payment"/>,
      dataIndex: 'paymentStatus',
      render: (paymentStatus) => {
        let color =
          paymentStatus === 'unpaid'
            ? 'volcano'
            : paymentStatus === 'paid'
            ? 'green'
            : paymentStatus === 'overdue'
            ? 'red'
            : 'purple';

        const paymentStatusPath = `invoice.list.columns.paymentStatus.${paymentStatus}`;
        return <Tag color={color}>{paymentStatus && <Translator path={paymentStatusPath} /> }</Tag>;
      },
    },
  ];

  const PANEL_TITLE = 'invoice';
  const dataTableTitle = <Translator path="invoice.list.title"/>;
  const ADD_NEW_ENTITY = <Translator path="invoice.list.add"/>;
  const DATATABLE_TITLE = <Translator path="invoice.list.title"/>;
  const ENTITY_NAME = 'invoice';
  const CREATE_ENTITY = 'Save invoice';
  const UPDATE_ENTITY = 'Update invoice';

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return <InvoiceModule config={config} />;
}
