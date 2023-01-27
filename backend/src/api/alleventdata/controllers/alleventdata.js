'use strict';

/**
 * A set of functions called "actions" for `alleventdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::event.event', {
        populate: ['Thumbnail_Image', 'EventName', 'Thumbnail_Content'],
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
