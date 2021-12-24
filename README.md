# G3 Javascript
Javascript engine to make fast games. 
#### Example code below:
```js
const g3 = new G3()

const Window = g3.createWindow("Window1", 700, 700)

const mineSprite = new g3.Sprite(g3.getImage("./download.png"), 0, 0, Window.context)

Window.background = "#373"

function loop() {
    Window.clear()
    Window.fillRect(400, 400, 20, 20, "#fff")
    mineSprite.draw()
    requestAnimationFrame(loop)
}

loop()

g3.onClick(e => {
    console.log("Hello")
})
```
#### Result:

![Preview image](./assets/preview.png)
