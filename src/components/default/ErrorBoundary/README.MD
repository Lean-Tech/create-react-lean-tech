This component is designed to catch and handle errors avoiding a total collapse in the application. "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed"

For more information go to: https://reactjs.org/docs/error-boundaries.html

~~~javascript
<ErrorBoundary>
    <ExampleComponent/>
</ErrorBoundary>

~~~