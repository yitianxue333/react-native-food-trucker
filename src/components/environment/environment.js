const ENVIRONMENT = {
  PRODUCTION: { BASE_URL: '' },
  STAGING: { BASE_URL: '' },
  DEVELOPMENT:
  {
    BASE_URL: `https://truckr-backend.herokuapp.com/`,
    LOGIN: `/truckLogin`,
    GET_ORDERS: `/ordersTruck`,
    UPDATE_ORDER_STATE: `/updateOrderState`,
  },
  ORDER_STATUS:
  {
    NEW: {
      ID: 1,
      NAME: 'New',
    },
    IN_PROGRESS: {
      ID: 2,
      NAME: 'In progress',
    },
    READY: {
      ID: 3,
      NAME: 'Ready',
    },
    DELIVERED: {
      ID: 4,
      NAME: 'Delivered',
    },
    REJECTED: {
      ID: 5,
      NAME: 'Rejected',
    }
  },
  STATUSES: [
    {
      ID: 1,
      NAME: 'New',
    },
    {
      ID: 2,
      NAME: 'In progress',
    },
    {
      ID: 3,
      NAME: 'Ready',
    },
    {
      ID: 4,
      NAME: 'Delivered',
    },
    {
      ID: 5,
      NAME: 'Rejected',
    }
  ],
}

export { ENVIRONMENT }