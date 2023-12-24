import { lazy } from 'react';

const Parties = lazy(() => import('../pages/Parties'));
const Chart = lazy(() => import('../pages/Chart'));
const SaleInvoice = lazy(() => import('../pages/Sales/SalesInvoice'));
const SaleInvoiceForm = lazy(() => import('../pages/Sales/SaleInvoiceForm'));
const SalesReturn = lazy(() => import('../pages/Sales/SalesReturn'));
const AddCreditNote = lazy(() => import('../pages/Sales/AddCreditNoteForm'));
const DeliveryChallan = lazy(() => import('../pages/Sales/SalesDeliveryChallan'));
const AddDeliveryChallan = lazy(() => import('../pages/Sales/AddDeliveryChallanForm'));
const SalesPaymentIn = lazy(() => import('../pages/Sales/SalePaymentIn'));
const SalesOrder = lazy(() => import('../pages/Sales/SalesOrder'));
const AddSalesOrderForm = lazy(() => import('../pages/Sales/AddSalesOrderForm'));
const PurchaseInvoice = lazy(() => import('../pages/Purchase/PurchaseInvoice'));
const AddPurchaseInvoice = lazy(() => import('../pages/Purchase/PurchaseInvoiceForm'));
const PurchasePaymentOut = lazy(() => import('../pages/Purchase/PurchasePaymentOut'));
const PurchaseOrder = lazy(() => import('../pages/Purchase/PurchaseOrder'));
const PurchaseOrderForm = lazy(() => import('../pages/Purchase/AddPurchaseOrderForm'));
const PurchaseReturn = lazy(() => import('../pages/Purchase/PurchaseReturn'));
const AddDebitNoteForm = lazy(() => import('../pages/Purchase/AddDebitNoteForm'));
const Items = lazy(() => import('../pages/Items'));
const Report = lazy(() => import('../pages/Report'));
const Expense = lazy(() => import('../pages/Expense/Expense'));
const AddExpense = lazy(() => import('../pages/Expense/AddExpenseForm'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/Parties',
    title: 'Parties',
    component: Parties,
  },
  {
    path: '/Items',
    title: 'Items',
    component: Items,
  },
  {
    path: '/Sales/SaleInvoice',
    title: 'Sales Invoice',
    component: SaleInvoice,
  },
  {
    path: '/Sales/SaleInvoice/SaleInvoiceForm',
    title: 'Sales Invoice Form',
    component: SaleInvoiceForm,
  },
  {
    path: '/Sales/SalesPaymentIn',
    title: 'Sales Payment In',
    component: SalesPaymentIn,
  },
  {
    path: '/Sales/SalesOrder',
    title: 'Sales Order',
    component: SalesOrder,
  },
  {
    path: '/Sales/SalesOrder/AddSalesOrderForm',
    title: 'Sales Order',
    component: AddSalesOrderForm,
  },
  {
    path: '/Sales/DeliveryChallan',
    title: 'Delivery Challan',
    component: DeliveryChallan,
  },
  {
    path: '/Sales/DeliveryChallan/AddDeliveryChallan',
    title: 'Delivery Challan',
    component: AddDeliveryChallan,
  },
  {
    path: '/Sales/SalesReturn',
    title: 'Sales Return',
    component: SalesReturn,
  },
  {
    path: '/Sales/SalesReturn/AddCreditNote',
    title: 'Sales Return',
    component: AddCreditNote,
  },
  {
    path: '/Purchase/PurchaseInvoice',
    title: 'Purchase Invoice',
    component: PurchaseInvoice,
  },
  {
    path: '/Purchase/PurchaseInvoice/PurchaseInvoiceForm',
    title: 'Purchase Invoice',
    component: AddPurchaseInvoice,
  },
  {
    path: '/Purchase/PaymentOut',
    title: 'Purchase Payment Out',
    component: PurchasePaymentOut,
  },
  {
    path: '/Purchase/PurchaseOrder',
    title: 'Purchase Purchase Order',
    component: PurchaseOrder,
  },
  {
    path: '/Purchase/PurchaseOrder/AddPurchaseOrderForm',
    title: 'Purchase Purchase Order form',
    component: PurchaseOrderForm,
  },
  {
    path: '/Purchase/PurchaseReturn',
    title: 'Purchase Purchase Return',
    component: PurchaseReturn,
  },
  {
    path: '/Purchase/PurchaseReturn/AddDebitNote',
    title: 'Purchase Debit Note',
    component: AddDebitNoteForm,
  },
  {
    path: '/Expense',
    title: 'Expense',
    component: Expense,
  },
  {
    path: '/Expense/AddExpense',
    title: 'Expense Form',
    component: AddExpense,
  },
  {
    path: '/Report',
    title: 'Report',
    component: Report,
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
