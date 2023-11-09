import { lazy } from 'react';

const Parties = lazy(() => import('../pages/Parties'));
const Chart = lazy(() => import('../pages/Chart'));
const SaleInvoice = lazy(() => import('../pages/Sales/SalesInvoice'));
const SalesReturn = lazy(() => import('../pages/Sales/SalesReturn'));
const DeliveryChallan = lazy(() => import('../pages/Sales/SalesDeliveryChallan'));
const SalesPaymentIn = lazy(() => import('../pages/Sales/SalePaymentIn'));
const SalesOrder = lazy(() => import('../pages/Sales/SalesOrder'));
const PurchaseInvoice = lazy(() => import('../pages/Purchase/PurchaseInvoice'));
const PurchasePaymentOut = lazy(() => import('../pages/Purchase/PurchasePaymentOut'));
const PurchaseOrder = lazy(() => import('../pages/Purchase/PurchaseOrder'));
const PurchaseReturn = lazy(() => import('../pages/Purchase/PurchaseReturn'));
const Items = lazy(() => import('../pages/Items'));
const Report = lazy(() => import('../pages/Report'));
const Tables = lazy(() => import('../pages/Tables'));
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
    path: '/Sales/DeliveryChallan',
    title: 'Delivery Challan',
    component: DeliveryChallan,
  },
  {
    path: '/Sales/SalesReturn',
    title: 'Sales Return',
    component: SalesReturn,
  },
  {
    path: '/Purchase/PurchaseInvoice',
    title: 'Purchase Invoice',
    component: PurchaseInvoice,
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
    path: '/Purchase/PurchaseReturn',
    title: 'Purchase Purchase Return',
    component: PurchaseReturn,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
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
