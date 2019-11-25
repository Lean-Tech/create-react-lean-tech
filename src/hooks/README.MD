In this template are included three customized hooks like an alternative to the previos HOCs:

The first of them is **useChangeTheme**, it has the same functionality that **withChangeTheme**.

~~~javascript
//const theme is the current theme
//const changeTheme is the method to change the theme, receiving a new one 

const Example = props => {
   const [theme, changeTheme] = useChangeTheme()
}
~~~

The second one is **useSetState**, it is an alternative to **this.setState** without replacing the elements that we are not updating

~~~javascript
//const state: current state
//const setState: method to change the state

const Example = props => {
    const [state, setState] = useSetState(initialState)
}
~~~

The third one is **useDevice**, it has the same functionality that **withDevice**.

~~~javascript
//cosnt device: it is the property which contains phone, table or desktop 

const Example = props => {
    const device = useDevice()
}
~~~