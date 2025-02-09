
import DashboardLayout from '@/layouts/dashboard-layout';

import Booking from '@/pages/dashboard/booking';
import Dashboard from '@/pages/dashboard/dashboard';

import Service from '@/pages/dashboard/service';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([

  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'service',
        element: <Service />,
      },
      
      {
        path: 'booking',
        element: <Booking />,
      },
  
    ],
  },
]);