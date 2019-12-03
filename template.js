// Template must be loaded using require.resolve!
const template = require('marko').load(require.resolve('./src/layouts/index.marko'));

module.exports = async (ctx) => {
  const stream = template.stream({
    params: ctx.params,
  });
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(chunks.join('')));
  });
};
