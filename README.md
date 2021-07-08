# CCY Icons

[View icons](https://ccy-icons.netlify.app/)

A set of 330+ meticulously combed currency icons (fiat and crypto) so that they:

- Render in a uniform, consistently sized manner.
- Use `currentColor` so that they can be easily colored using CSS `color` property.
- Don't contain excess junk.

SVGs can be directly used, or they can be used as React components for example:

```js
// Your build needs an .svg loader (many such as CRA have it built in).
import btcIcon from 'ccy-icons/icons/btc.svg' // And render it <img src={btcIcon} />

// Or in React:
import { BTC } from 'ccy-icons' // and render the component <BTC />
```

**Important:** icons don't set a width and height, you should set one or both with CSS, or allow the icon to fill its container.

## Contributing

1. Fork the repo.
2. Run your SVG through https://jakearchibald.github.io/svgomg/ and then add it to `src/icons`.
3. `yarn install`, `yarn build`, `yarn link`.
4. `cd www`, `yarn install`, `yarn link ccy-icons`, `yarn start`.
5. Check that your icon looks correct (uses currentColor so switching theme works, has a viewBox, has no width or height attributes). If it doesn't then import your icon into Sketch or Figma, re-export (with trim transparent pixels), and re-run your svg through SVGOMG.
6. Once happy raise a PR **including a screenshot** of the icon in-situ.

### Dev notes

To batch optimize/clean SVGs:

```bash
cd icons
svgo *.svg --config=svgo.yml
```
