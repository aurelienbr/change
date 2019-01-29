module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          reducers: './src/reducers',
          constants: './src/constants',
          navigators: './src/navigators',
          containers: './src/containers',
          assets: './src/assets',
          lang: './src/lang',
          types: './src/types',
          utils: './src/utils',
          sagas: './src/sagas',
          services: './src/services',
          lib: './src/lib',
          screens: './src/screens'
        }
      }
    ]
  ]
};
