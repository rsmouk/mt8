// Get the current URL
const url = new URL(window.location.href);

// Get the value of the 'param' parameter
const paramValue = url.searchParams.get('param');

console.log(paramValue); // This will output '33' if the URL parameter is present
