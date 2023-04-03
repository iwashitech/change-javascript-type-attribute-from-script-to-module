import {insert} from "./insert.js";
import {useJqueryForImport} from "./use-jquery-for-import.js";

export const container = function() {
  useJqueryForImport();

  function show(msg) {
    console.log(msg);
  }
  
  show('foo');

  insert();

  function echo(msg) {
    console.log(msg);
  }
  
  echo('bar');

  jQuery(function($) {
    console.log($('.baz').text());
  });
};