'use strict';

/**
 * A set of functions called "actions" for `clubsdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::club.club', {
        // populate: {
        //   Thumbnail_Image : true,
        //   ClubSlogan  : false,
        //   Components : false,
        //   Media_Components  :false,
        // },
        populate: ['Thumbnail_Image', 'ClubName', 'Thumbnail_Content'],
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
