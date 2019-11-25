## API FOLDER

This template contains an example of how should be implemented the API calls.

## FETCH File
Custom implementation of the fetch function, created to make API calls through axios library.
The FETCH function receives the following parameters:

* method: GET, POST, PUT, DELETE 
* endpoint: final part of the URL
* payload: information that we need to make the API call
* url: it is used when we need to make API calls to external services (by default is null)

~~~javascript
const response = FETCH('post', exampleRoutes.add, payload)

const response = FETCH('post', null, payload, externalURL)

//to see the complete example go to services folder
~~~

## ROUTES
This folder includes the file (or files) with the API routes that are going to be used in the services classes to make the API calls.

~~~javascript
export const exampleRoutes = {
    add: 'route',
    get: 'route'
}
~~~
## SERVICES
It contains methods where is implemented the function FETCH per each API Route, this methods are going to be dispatched later on the redux implementation.

~~~javascript
export class ExampleService {
  async add(payload) {
    try {
      return await FETCH('post', exampleRoutes.add, payload)
    } catch (error) {
      return error;
    }
  }
~~~