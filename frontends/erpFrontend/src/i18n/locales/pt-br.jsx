export default {
  translations: {
    navigation: {
      menu: {
        dashboard: 'Painel',
        customer: 'Cliente',
        invoice: 'Fatura',
        quote: 'Orçamento',
        paymentInvoice: 'Pagamento',
        employee: 'Funcionário',
        admin: 'Admin',
        paymentMode: 'Forma de Pagamento',
        role: 'Perfil',
      },
    },
    components: {
      datatable: {
        refresh: 'Atualizar'
      },
    },
    invoice: {
      list: {
        title: 'Lista de faturas',
        add: 'Adicionar fatura',
        columns: {
          client: 'Cliente',
          creationDate: 'Data',
          dueDate: 'Vencimento',
          total: 'Total',
          balance: 'Saldo',
          status: 'Situação',
          statusLabel: {
            draft: 'rascunho',
            sent: 'enviado',
            pending: 'pendente',
          },
          payment: 'Pagamento',
          paymentStatus: {
            unpaid: 'não pago',
            paid: 'pago',
            overdue: 'atrasado',
            partially: 'pago parcialmente',
          }
        },
      }
    }
  }
}