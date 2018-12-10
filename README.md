# Webpack-demo

This is the learning node for a demo app using vue & webpack

## Installation

### Start a Project
```
mkdir ___ & cd ___
npm init -y
```

### Local Installation 
`npm install --save-dev webpack`

If using webpack v4 or later, webpack CLI is required:

`npm install --save-dev webpack-cli`

## Asset Management
## Output Management
## Development
To enable development mode, in configeration file: `webpack.config.js`, add:

```
...

module.exports = {
	...
	mode: 'development',
	...
}
```

### Development tools
To setup development tool, for example **_inline-source-map_**, in config file `webpack.config.js`:

```
...

module.export = {
	...
	devtool: 'inline-source-map'
	...
}
```

### Other Development Tools
To avoid run `npm run build` every time, below tools are for automatically compiling code whenever it changes:

  1. webpack's Watch Mode
  2. webpack-dev-server
  3. webpack-dev-middleware

#### Using Watch Mode
Add npm script to `package.json`:

```
"scripts": {
	...
	"watch": "webpack --watch",
	...
}
```

#### Using webpack-dev-middleware
Install `webpack-dev-middleware` and `express`:

```
npm install --save-dev express webpack-dev-middleware
```
In `webpack.config.js` add:

```
output: {
	...
	publicPath: '/'
	...
}
```

#### Using webpack-dev-server
Installation: `npm install --dave-dev webpack-dev-server`

Configuration:

* `webpack.config.js`:

```
module.exports = {
	...
	devServer: {
		contentBase: './dist'
	},
	...
}
```

* `package.json`:
```
"scripts": {
	"start": "webpack-dev-server --open"
}
```

This will open `localhost:8080`

### Hot Module Replacement
Setup `webpack.config.js`:

Setup `index.js`:

Setup `print.js`:

* Alternative: Using `webpack-dev-middleware` with `webpack-hot-middleware`

#### Example 1: Change 'print.js'

#### Example 2: HMR with Stylesheets