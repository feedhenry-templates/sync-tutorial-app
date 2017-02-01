window.datasetId = 'myShoppingList';
window.datasetHash;

// var $ = require('jquery');
var syncAdmin = require('./admin.js');
var syncUser = require('./user.js');

$(document).ready(function() {
  $("[rel='popover']").popover();

  //Bind tab events
  $('a[data-toggle="tab"]').on('shown', function (e) {
    e.target // activated tab
    e.relatedTarget // previous tab

    if(e.target.id == 'tabCollision' ) {

      syncAdmin.reloadCollisions();
    }
  });

  syncUser.init();
  syncAdmin.init();
});