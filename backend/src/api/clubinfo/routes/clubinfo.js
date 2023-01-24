module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/clubinfo',
     handler: 'clubinfo.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
