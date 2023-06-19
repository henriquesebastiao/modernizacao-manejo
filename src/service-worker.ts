/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { build, files, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: any;

if (typeof self !== 'undefined') {
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
}

precacheAndRoute([
  ...build.map(f => {
    return {
      url: f,
      revision: null
    }
  }),
  ...files.map(f => {
    return {
      url: f,
      revision: `${version}`
    }
  })
]);

registerRoute(
  ({ url }) => url.origin === self.location.origin,
  new StaleWhileRevalidate()
);