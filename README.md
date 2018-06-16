# babel-preset-meact

A babel preset for transforming JavaScript for Meact

Currently contains transforms:

- babel-preset-env
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