const style = [
  "padding: 2px 4px",
  "border-radius: 4px",
  "background-color: lime",
  "color: white",
  "text-transform: capitalize",
  "font-size: 1rem",
  "display: flex;",
  "font-weight: bold"
];

export const insert = function() {
  function show(msg) {
    console.log(
      `%c${msg}`,
      [...style].join(';')
    );
  }
  
  show('insert');

  function echo(msg) {
    console.log(
      `%c${msg}`,
      [...style, "background-color:aqua"].join(';')
    );
  }
  
  echo('insert');
};