# babel-preset-meact

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/babel-preset-meact?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/babel-preset-meact/master/LICENSE)

[![Code Lines](https://img.shields.io/tokei/lines/github/sabertazimi/babel-preset-meact?style=for-the-badge&logo=visualstudiocode)](https://github.com/sabertazimi/babel-preset-meact)
[![Code Size](https://img.shields.io/github/languages/code-size/sabertazimi/babel-preset-meact?logo=visualstudiocode&style=for-the-badge)](https://github.com/sabertazimi/babel-preset-meact)

A babel preset for transforming JavaScript for Meact

Currently contains transforms:

- babel-preset-env
- babel-plugin-transform-object-rest-spread
- babel-plugin-transform-react-jsx
- babel-plugin-transform-meact-jsx

## Installation

```sh
$ npm install -D babel-preset-meact
```

## Usage

### `.babelrc`

**.babelrc**

```json
{
  "presets": ["meact"]
}
```

### Config

```json
{
  "presets": [["meact", {
    "targets": {
      "chrome": 50,
      "explorer": 11,
      "firefox": 45
    }
  }]]
}
```

```json
{
  "presets": [["meact", {
    "targets": {
      "node": 6
    }
  }]]
}
```

```json
{
  "presets": [["meact", {
    "additionalTargets": {
      "chrome": 42,
      "explorer": 8
    }
  }]]
}
```

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)
