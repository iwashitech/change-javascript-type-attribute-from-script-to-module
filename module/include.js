import {insert} from "./insert.js";

export const container = function() {
  function show(msg) {
    console.log(msg);
  }
  
  show('foo');

  insert();

  function echo(msg) {
    console.log(msg);
  }
  
  echo('bar');
};