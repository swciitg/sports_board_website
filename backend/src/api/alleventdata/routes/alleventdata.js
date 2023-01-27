module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/alleventdata',
     handler: 'alleventdata.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
