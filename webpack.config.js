import path from 'path';
import webpackNodeExternals from 'webpack-node-externals'; //优化打包不包含node_modules中的包
import WebpackShellPluginNext from 'webpack-shell-plugin-next'; // build 自动启动

const { NODE_ENV = 'development' } = process.env;
let plugins = [];

plugins
  .push
  // new WebpackShellPluginNext({
  //   onBuildEnd: {
  //     scripts: ['yarn dev'],
  //     blocking: false,
  //     parallel: true,
  //   },
  // })
  ();

const config = {
  entry: './server/server.ts',
  mode: NODE_ENV,
  target: 'node',
  experiments: {
    outputModule: true,
  },
  externals: [
    // 'express',
    // webpackNodeExternals({
    //   importType: 'module', // 这个模块要指定使用esm
    // }),
  ],
  output: {
    filename: 'bundle.mjs',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      type: 'module',
    },
    chunkLoading: 'import',
    chunkFormat: 'module',
    clean: true,
  },

  watch: NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {},
};

export default config;
