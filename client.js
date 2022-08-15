const request = require("supertest");

export function client() {
  return request(
    "https://duckduckgo.com/?q=simpsons%20characters&format=json&pretty=1"
  );
  console.log(request);

}
