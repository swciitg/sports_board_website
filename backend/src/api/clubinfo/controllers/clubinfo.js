'use strict';

/**
 * A set of functions called "actions" for `clubinfo`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::club.club', {
        filters: {
          ClubName: 
              {
                $containsi: ctx.request.query["page"],
              },
        },
        populate: {
          Components : {
            populate : {Component_Image : true,},
          }, 
          Thumbnail_Image : true,
          Background_Image : true, 
          Media_Components : {
            populate : { Images : true, }
          }
        },
      });
      ctx.body += await strapi.entityService.findOne('api::club-list.club-list', 1, {
        populate: ['carousel'],
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
