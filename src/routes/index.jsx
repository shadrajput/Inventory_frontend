import { lazy } from 'react';

const Parties = lazy(() => import('../pages/Parties'));
const Chart = lazy(() => import('../pages/Chart'));
const SaleInvoice = lazy(() => import('../pages/Sales/SalesInvoice'));
const SalesReturn = lazy(() => import('../pages/Sales/SalesReturn'));
const DeliveryChallan = lazy(() => import('../pages/Sales/SalesDeliveryChallan'));
const SalesPaymentIn = lazy(() => import('../pages/Sales/SalePaymentIn'));
const SalesOrder = lazy(() => import('../pages/Sales/SalesOrder'));
const Items = lazy(() => import('../pages/Items'));
const Settings = lazy(() => import('../pages/Settings'));
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
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
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
