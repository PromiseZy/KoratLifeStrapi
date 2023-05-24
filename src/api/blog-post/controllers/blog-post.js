'use strict';

/**
 * blog-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post');

async function logView(ctx) {
    const { slug } = ctx.params;
    try {
      const article = await strapi.services.article.findOne({ slug });
      await strapi.services.article.update(
        { id: article.id },
        { views: parseInt(article.views) + 1 }
      );
      return ctx.send({
        success: true,
      });
    } catch (error) {
      console.error(error);
      return ctx.send({
        success: false,
      });
    }
}