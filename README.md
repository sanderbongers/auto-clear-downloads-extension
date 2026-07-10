# Auto-clear Downloads

A minimal browser extension that removes each download from the downloads history shortly after it finishes.

[**Install for Firefox**](https://addons.mozilla.org/firefox/addon/auto-clear-downloads/)

## How it works

A non-persistent background script is loaded on demand to handle a `downloads.onChanged` event and unloaded while idle. When a download's state flips to `complete`, it waits a short, per-download delay for the toolbar button to show its completion animation. It then clears the download from the download list, which in the case of Firefox means: from the Downloads panel and the history in the Library window.

Note: it does not delete the download on disk, only its history entry.

## Browser support

Built on Manifest V3 for:

- Firefox (Gecko 142+)
- Chromium-based browsers (Chrome 121+)

## FAQ

**Another one?**

Yes, all existing alternatives continuously poll the download history on a fixed timer. This one is event-driven rather than polling.

## Development

```sh
npm install
npm start      # Run the extension in a temporary Firefox profile
npm run lint   # Validate the manifest and source
npm run build  # Package the extension into web-ext-artifacts/
```
