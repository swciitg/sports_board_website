module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/homepagedata',
     handler: 'homepagedata.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
