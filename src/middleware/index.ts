import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  if (!context.isPrerendered) {
    context.session?.set('lastVisit', new Date());
    context.session?.set('referrer', context.request.referrer);
  }
  return next();
});
