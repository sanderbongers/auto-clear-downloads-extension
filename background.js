const api = globalThis.browser ?? globalThis.chrome;

const CLEAR_DELAY_MS = 2000;

// Erase each download from the list shortly after it completes.
// The timer is per-download, measured from that download's own completion.
// It's only removed from the history entry, it never deletes the file on disk.
api.downloads.onChanged.addListener((delta) => {
  if (delta.state?.current === "complete") {
    setTimeout(() => {
      api.downloads.erase({ id: delta.id }).catch(() => {});
    }, CLEAR_DELAY_MS);
  }
});
