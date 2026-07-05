"use strict";

const api = globalThis.browser ?? globalThis.chrome;

const CLEAR_DELAY_MS = 2000;

api.downloads.onChanged.addListener((delta) => {
  if (delta.state?.current !== "complete") {
    return;
  }

  setTimeout(async () => {
    const [item] = await api.downloads.search({ id: delta.id }).catch(() => []);

    await api.downloads.erase({ id: delta.id }).catch(() => {});

    if (!item) {
      return;
    }

    for (const url of new Set([item.url, item.finalUrl].filter(Boolean))) {
      await api.history?.deleteUrl({ url }).catch(() => {});
    }
  }, CLEAR_DELAY_MS);
});
