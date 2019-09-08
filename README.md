# @promaster-sdk/markdown

[![npm version][version-image]][version-url]
[![travis build][travis-image]][travis-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Promaster Flavored Markdown

## Introduction

This package is needed in order to convert promaster markdown texts to HTML.

The Promaster flavor of markdown is the standard except extensions for:

- Superscript
- Subscript

## Installation

```
npm install --save @promaster-sdk/markdown
```

The library is compiled to ES5 and no polyfills are required.

## Usage

```ts
import { makeHtml } from "@promaster-sdk/markdown";

const markdown = "...";
const html = makeHtml(markdown);
```

## How to publish

```
yarn version --patch
yarn version --minor
yarn version --major
```

[version-image]: https://img.shields.io/npm/v/@promaster-sdk/markdown.svg?style=flat
[version-url]: https://www.npmjs.com/package/@promaster-sdk/markdown
[travis-image]: https://travis-ci.com/promaster-sdk/markdown.svg?branch=master&style=flat
[travis-url]: https://travis-ci.com/promaster-sdk/markdown
[license-image]: https://img.shields.io/github/license/promaster-sdk/markdown.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
