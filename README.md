# gatsby-remark-gemoji-to-emoji

[![Build Status](https://travis-ci.org/winkey728/gatsby-remark-gemoji-to-emoji.svg?branch=master)](https://travis-ci.org/winkey728/gatsby-remark-gemoji-to-emoji)
[![codecov](https://codecov.io/gh/winkey728/gatsby-remark-gemoji-to-emoji/branch/master/graph/badge.svg)](https://codecov.io/gh/winkey728/gatsby-remark-gemoji-to-emoji)

Transform Gemoji shortcodes to Unicode emoji using [remark-gemoji-to-emoji](https://github.com/jackycute/remark-gemoji-to-emoji)

## Install

```bash
npm install --save gatsby-remark-gemoji-to-emoji
```

## How to use

In your `gatsby-config.js`

```javascript
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        "gatsby-remark-gemoji-to-emoji"
      ],
    },
  },
];
```

# License

[MIT](https://github.com/winkey728/gatsby-remark-gemoji-to-emoji/blob/master/LICENSE)
