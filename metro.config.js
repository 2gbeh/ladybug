const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@/': path.resolve(__dirname, 'src/'),
      // '@/components': path.resolve(__dirname, 'src/components'),
      // '@/constants': path.resolve(__dirname, 'src/constants'),
      // '@/screens': path.resolve(__dirname, 'src/screens'),
      // '@/utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};

module.exports = mergeConfig(
  getDefaultConfig(__dirname),
  wrapWithReanimatedMetroConfig(config),
);
