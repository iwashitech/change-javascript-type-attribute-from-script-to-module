export const useJqueryForImport = function() {
  jQuery(function($) {
    $('.baz').css({color: '#f00'});
  });
};