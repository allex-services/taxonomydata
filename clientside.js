function createClientSide(execlib) {
  'use strict';
  var execSuite = execlib.execSuite,
    ParentServicePack = execSuite.registry.get('allex_dataservice');

  return {
    SinkMap: require('./sinkmapcreator')(execlib, ParentServicePack)
  };
}

module.exports = createClientSide;
