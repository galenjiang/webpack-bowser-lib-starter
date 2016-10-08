require.ensure(['./common/a'], (require) => {
  // a();
  require('./common/b');
});
// require('./common/b');
console.log(12);
console.log('build');
