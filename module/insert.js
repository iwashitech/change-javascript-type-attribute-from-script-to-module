export const insert = function() {
  function show(msg) {
    console.log(
      "%c" + msg,
      "color:white; background-color: lime; padding:2px 4px; border-radius:4px;"
    );
  }
  
  show('insert');

  function echo(msg) {
    console.log(
      "%c" + msg,
      "color:white; background-color: aqua; padding:2px 4px; border-radius:4px;"
    );
  }
  
  echo('insert');
};