'use strict';

/**
 * A set of functions called "actions" for `eventdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::event.event', {
        filters: {
          Event_Name: 
              {
                $containsi: ctx.request.query["page"],
              },
        },
        populate: {
          Component : {
            populate : {Component_Image : true,},
          }, 
          // Thumbnail_Image : true,
          // Background_Image : true, 
          Media_Component : {
            populate : { Images : true, }
          }
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
