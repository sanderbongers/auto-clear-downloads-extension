# Auto-clear Downloads

A minimal browser extension that removes each download from the downloads list shortly after it finishes.

## How it works

A single non-persistent background listener watches `downloads.onChanged`. When a download's state flips to `complete`,
it waits a short, per-download delay, so the toolbar button can show its completion checkmark, and then calls
`downloads.erase({ id })`. It does not delete files on disk, only the history entry is erased.
