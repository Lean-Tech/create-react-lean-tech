# Text component

This component works to be as customizable as possible. You can pass an in-line style modify the component or use the default custom props of the component. This custom props allow the user to just access a predefined font style, weight, theme, family and its font-size. This works to create any kind of text and even you can wrap a p tag in it

### Props recieved 

- className: Sets a new css class the text component allowing a more custom style
- fontFamily: Allows to choose one of the different types of font-family thet the developer predefined for the project. An example is to add Roboto to your project and use it as the default text font-family
- fontStyle: Set the font-style of the text content(options:NORMAL,ITALIC)
- fontWeight: Set the font-weight of the text component(options: THIN, LIGHT, REGULAR, MEDIUM, BOLD, BLACK)
- fontColor: set the color of the text content depending of the selected theme property
- fontSize: set the font-size of the text content
- contentKey: set the Text content unique key. This is used to automatically transalate one text to another
- content: set the Text content
- title: set the title to be shown when the text component is hover
- avoid: A boolean to indicated if this text content should be registered in the file with all the texts of the application

### Styled component styles

Within the Text folder ther is a styles.js file. You can change its default style everytime you want but remember that this will change the component styles. So try to use a custom className to set new styles or override another for one o more components from the same clase 

### Example

~~~javascript
<Text
    avoid
    style={{
        //Any style that you want to add
        //To change anything referred to the font do it by the props of below
    }}
    title={'title'}
    contentKey={'test'}
    fontFamily={"TEXT"}
    fontStyle={"NORMAL"}
    fontWeight={"BOLD"}
    fontColor={"black"}
    fontSize={"20px"}
    content={'Test'}
/>
~~~

