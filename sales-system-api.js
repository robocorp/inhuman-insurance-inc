const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const request = new XMLHttpRequest();
request.open(
  'GET',
  'https://robocorp.github.io/inhuman-insurance-inc/RS_246.json'
);
request.responseType = 'json';
request.send();
request.onload = function () {
  print(request.response);
};
