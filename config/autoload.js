module.exports = function (compound) {
  var defaultModules = [
      'jugglingdb',
      'co-assets-compiler'
    ], developmentModules = [];

  if ('development' === compound.app.get('env')) {
    developmentModules = [
      'jade-ext',
      'seedjs',
      'compound-passport',
      'co-generators'
    ]
  }

  if (typeof window === 'undefined') {
    return defaultModules.concat(developmentModules).map(require);
  } else {
    return []
  }
};
