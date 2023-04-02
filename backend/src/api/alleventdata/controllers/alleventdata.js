'use strict';

/**
 * A set of functions called "actions" for `alleventdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      var data = await strapi.entityService.findMany('api::event.event', {
        populate: ['Thumbnail_Image', 'EventName', 'Thumbnail_Content'],
      });
      var images = await strapi.entityService.findOne('api::event-list.event-list', 1, {
        populate: {
          carousel : true,
        },
      });
      ctx.body = {
        data : data,
        images : images
      }
    } catch (err) {
      ctx.body = err;
    }
  }
};
