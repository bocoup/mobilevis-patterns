define(function(require) {

  var $ = require('jquery');
  require('jquery-cookie');
  var _ = require('lodash');

  var container = $('#about');

  // has someone seen the welcome sign already? if so, don't show it.
  var welcomeSeen = $.cookie('welcomeSeen');

  if (typeof welcomeSeen === "undefined") {
    container.html(JST.welcome());

    container.find('.close').on('click', function() {
      $.cookie('welcomeSeen', true);
      container.fadeOut();
    });
  }

});