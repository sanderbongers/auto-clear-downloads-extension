# Auto-clear Downloads

A minimal browser extension that removes each download from the downloads history shortly after it finishes.

## How it works

A non-persistent background script is loaded on demand to handle a `downloads.onChanged` event and unloaded while idle. When a download's state flips to `complete`, it waits a short, per-download delay for the toolbar button to show its completion animation. It then clears the download from the download list, which in the case of Firefox means: from the Downloads panel and the history in the Library window.

Note: it does not delete the download on disk, only its history entry.

## Browser support

Built on Manifest V3 for:

- Firefox (Gecko 142+)
- Chromium-based browsers (Chrome 121+)

## Development

```sh
npm install
npm start      # Run the extension in a temporary Firefox profile
npm run lint   # Validate the manifest and source
npm run build  # Package the extension into web-ext-artifacts/
```
