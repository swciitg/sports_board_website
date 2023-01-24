module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/eventdata',
     handler: 'eventdata.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
