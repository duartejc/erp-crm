export default {
  translations: {
    navigation: {
      menu: {
        dashboard: 'Dashboard',
        customer: 'Customer',
        invoice: 'Invoice',
        quote: 'Quote',
        paymentInvoice: 'Payment',
        employee: 'Employee',
        admin: 'Admin',
        paymentMode: 'Payment Mode',
        role: 'Role',
      },
    },
    components: {
      datatable: {
        refresh: 'Refresh'
      },
    },
    invoice: {
      list: {
        title: 'Invoices list',
        add: 'Add invoice',
        columns: {
          client: 'Client',
          creationDate: 'Date',
          dueDate: 'Due date',
          total: 'Total',
          balance: 'Balance',
          status: 'Status',
          statusLabel: {
            draft: 'draft',
            sent: 'sent',
            pending: 'pending',
          },
          payment: 'Payment',
          paymentStatus: {
            unpaid: 'unpaid',
            paid: 'paid',
            overdue: 'overdue',
            partially: 'partially',
          }
        },
      }
    }
  }
}