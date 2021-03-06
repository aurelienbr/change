/* eslint-disable */
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
          '~fonts': './src/assets/fonts',
          '~images': './src/assets/images',
          '~styles': './src/assets/styles',
          '~components': './src/components',
          '~constants': './src/constants',
          '~lang': './src/lang',
          '~lib': './src/lib',
          '~navigation': './src/navigation',
          '~actions': './src/redux/actions',
          '~containers': './src/redux/containers',
          '~reducers': './src/redux/reducers',
          '~sagas': './src/redux/sagas',
          '~screens': './src/screens',
          '~services': './src/services',
          '~types': './src/types',
          '~utils': './src/utils'
        }
      }
    ]
  ]
};
