'use strict';

/**
 * A set of functions called "actions" for `homepagedata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findOne('api::home-page.home-page', 1, {
        populate: {
          Component : {
            populate : {Component_Image : true,},
          },
          Media_Component : {
            populate : { Images : true, }
          },
          Event : {
            populate : { Event_Image : true, }
          },
          carousel : true,
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
