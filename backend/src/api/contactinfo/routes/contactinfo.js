module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/contactinfo',
     handler: 'contactinfo.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
