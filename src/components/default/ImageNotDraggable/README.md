# Text component

This image component was created to avoid the user to drag and select it. This works for url or images/icons from export.js file in assets.

### Props recieved 

- className: Sets a new css class the image component allowing a more custom style
-imageKey: key of the image/icon from export.js file
-externalImage: URL from a external image. If this props is set, you don't need to send the imageKey, because this will override the src of the ImageNotDraggable component
-alt: set the alt property of the img tag to set an alternate text for the image
-width: Width of the image
-height:  Height of the image

Note: If a width or height is setted is better that the other props is set in auto

### Styled component styles

Within the Text folder ther is a styles.js file. You can change its default style everytime you want but remember that this will change the component styles. So try to use a custom className to set new styles or override another for one o more components from the same clase 

### Example

~~~javascript
<ImageNotDraggable 
    imageKey={/* The key of the image in the export.js file in assets folder */}
    externalImage={/* Set a image URL to be displayed instead the imageKey prop*/}
    width={/* Width of the image */}
    height={/* Height of the image */}
/>
~~~