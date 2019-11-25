In this template are included three HOCs (High Order Components):

The first of them is **withChangeTheme**, designed to inject a theme and a method to change this theme, to the application.

~~~javascript
//props.theme is the current theme
//props.changeTheme is the method to change the theme, receiving a new one 

const Example = props => {
    props.theme
    props.changeTheme(theme)
}

export default withChangeTheme(Example)

~~~

The second one is **withErrorBoundary**, it catches possible errors that come out in a component and display that error.

~~~javascript

const Example = props => {}

export default withErrorBoundary(Example)

~~~

The third one is **withDevice**, allows show different kind of components depending on the type of device, checking device dimensions. 

~~~javascript
//props.device is the property which contains phone, table or desktop 

const Example = props => {
    props.device
}

export default withDevice(Example)

~~~