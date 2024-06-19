const codeRun = () => {
  const htmlInput = document.querySelector("#html-input").value;
  const cssInput = document.querySelector("#css-input").value;
  const jsInput = document.querySelector("#js-input").value;
  const output = document.querySelector("#output");

  output.contentDocument.body.innerHTML = `${htmlInput}<style>${cssInput}</style>`;
  output.contentWindow.eval(jsInput);
};
