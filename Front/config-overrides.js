const path = require('path');

module.exports = function override(config) {
  // 파일 로더 설정 변경
  config.module.rules[2].oneOf.unshift({
    test: /\.png$/,
    loader: 'file-loader',
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  });

  // 절대 경로 설정
  config.resolve.alias = {
    '@': path.resolve(__dirname, 'src/'),
  };

  return config;
};
