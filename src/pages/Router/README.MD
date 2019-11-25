In this folder you can find two customized components to handle private and public routes.

In the **PrivateRoute** component it is validated if the user is **authenticated**, if the authentication is missing, the user is going to be redirected to login page.

~~~javascript
    <PrivateRoute path="/example" component="ExampleComponent">
~~~

In the **PublicRoute** component, if the user is **authenticated** avoids the user to enter to public routes, redirecting to the initial page on the application (e.g. dashboad) 

~~~javascript
    <PublicRoute path="/example" component="ExampleComponent">
~~~