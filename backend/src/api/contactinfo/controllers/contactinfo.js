'use strict';

/**
 * A set of functions called "actions" for `contactinfo`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = await strapi.entityService.findMany('api::contact-us.contact-us', {
        populate: {
          Image : true,
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
