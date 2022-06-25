const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@highlight-color': '#ffffff',
              '@text-color': '#ffffff',
              '@heading-color': '#ffffff',
              '@primary-color': '#55addf',
              '@btn-primary-bg': 'linear-gradient(90deg, #55A8DC 0%, #5360A6 100%)',
              '@btn-default-border': 'none',
              '@input-bg': '#606371'
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};