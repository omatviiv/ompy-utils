A collection of util extensions.

# Install
```
npm i ompy-utils
```
Library is not bundled, it is provided in raw form as is
The project that is going to use this library should bundle it, here are
the instructions for webpack and babel:
```webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/ompy-utils'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            ...
          },
        },
      },
    ],
  },
  ...
};
```
You can also use [omtv-template-react](https://github.com/omatviiv/omtv-template-react)
for your project, it's webpack/babel config is compatible with this approach.

# Static type checking
Component contains [Flow Comment Types](https://flow.org/en/docs/types/comments/)
that allows either to use flow static typechecking or simply ignore it.

# Usage

# Improve
