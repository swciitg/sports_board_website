'use strict';

/**
 * A set of functions called "actions" for `clubsdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::club.club', {
        populate: ['Thumbnail_Image', 'ClubName', 'Thumbnail_Content'],
      });
      ctx.body += await strapi.entityService.findOne('api::club-list.club-list', 1, {
        populate: {
          carousel : true,
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
