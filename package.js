Package.describe({
    name: 'my-package',
  });
  
  Package.onUse(function (api) {
  
    api.use([
      'vulcan:core@1.8.1',
      'vulcan:forms@1.8.1',
      'vulcan:accounts@1.8.1',
    ]);
  
    api.addFiles('lib/stylesheets/bootstrap.min.css');
  
    api.mainModule('lib/server/main.js', 'server');
    api.mainModule('lib/client/main.js', 'client');
  
  });