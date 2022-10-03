import React from 'react';
import {
  createMemoryRouter,
} from 'react-router-dom';

import assetTransferService from '../services/assetTransferService';
import { CreateAsset, action as createAction } from '../views/CreateAsset/CreateAsset';
import GetAllAssets from '../views/GetAllAssets/GetAllAssets';
import GetAsset from '../views/GetAsset/GetAsset';
import Landing from '../views/Landing/Landing';
import Navigation from '../views/Navigation/Navigation';
import { TransferAsset, action as transferAction } from '../views/TransferAsset/TransferAsset';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/navigation',
    element: <Navigation />,
  },
  {
    path: '/create-asset',
    element: <CreateAsset />,
    action: createAction,
  },
  {
    path: '/all-assets',
    element: <GetAllAssets />,
    loader: assetTransferService.getAllAssets,
  },
  {
    path: '/get-asset',
    element: <GetAsset />,
  },
  {
    path: '/transfer',
    element: <TransferAsset />,
    action: transferAction,
  },
]);

export default router;
