# G3 Javascript
Basic javascript engine to make fast games. 
#### Example code:
```js
const g3 = new G3()

const Window = g3.createWindow("Window1", 700, 700)

const mineSprite = new g3.Sprite(g3.getImage("./texture.png"), 0, 0, Window.context)

Window.background = "#373"

function loop() {
    Window.clear()
    Window.fillRect(400, 400, 20, 20, "#fff")
    mineSprite.draw()
    requestAnimationFrame(loop)
}

loop()
```
#### Result:

![Preview image](/assets/example.png)

#### Supported events:

- onKeydown
```js
g3.onKeydown(e => {
    console.log("Hello")
})
```
- onClick
```js
g3.onClick(e => {
    console.log("Hello")
})
```
#### General event listener:

```js
g3.watchEvent("keydown", e => {
    console.log("Hello")
})
```

#### Create window (canvas):

```js
let name = "Window1"
let width = 700 // px
let height = 700 // px

g3.createWindow(name, width, height)
```

#### getImage :
Returns an Image instance

```js
let src = "./example.png"
let image = g3.getImage(src)
```

## Sprite methods and properties

Example code:
```js
   let Window = g3.createWindow("Window", 700, 700)

   let x = 0
   let y = 0
   let image = g3.getImage("./example.png")
   
   let Sprite = new g3.Sprite(image, x, y, Window.context)
```

####  Clip method:

#### Clipping next image (100 x 100):

![Exampleimage](/assets/example 2.png)

```js
    let clipX = 0
    let clipY = 0
    let clipWidth = 50
    let clipHeight = 50
    
    Sprite.clip(clipX, clipY, clipWidth, clipHeight)
```
#### Result:
![Exampleimage 2](/assets/example 3.png)
