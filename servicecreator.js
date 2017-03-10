function createTaxonomyDataService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function TaxonomyDataService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(TaxonomyDataService, factoryCreator, require('./storagedescriptor'));
  
  TaxonomyDataService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  TaxonomyDataService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return TaxonomyDataService;
}

module.exports = createTaxonomyDataService;
