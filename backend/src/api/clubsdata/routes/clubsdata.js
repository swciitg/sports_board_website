module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/clubsdata',
     handler: 'clubsdata.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
