const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const response = new Response();
response.type = 'application/json';
response.body = '{"key":"value"}';
print(response);
