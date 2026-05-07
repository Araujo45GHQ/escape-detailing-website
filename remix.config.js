import { defineConfig } from '@remix-run/dev';

export default defineConfig({
  appDirectory: 'src',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'build/server/index.js',
});
