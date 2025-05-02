import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import dayjs from 'dayjs';
import custom from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(custom);

export const prerender = true;

import app from '@app/configs/app';

export async function GET(context: { site: string | URL }) {
  return rss({
    title: app.name,
    description: app.description,
    site: context.site,
    items: [
      ...(await getCollection('news')).map((x) => {
        x.data.title += ` • ${x.id}`;
        x.data.description += ` • ${x.id}`;
        return {
          ...x.data,
          pubDate: dayjs(x.id, 'YY-MM-DD').toDate(),
          link: `/news/${x.id}`
        };
      })
    ],

    trailingSlash: false
  });
}
