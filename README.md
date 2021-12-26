# G3 Javascript
Basic javascript engine to make fast games and write clean code. 🕹️
#### Example code:
```js

const g3 = new G3()

const Window = g3.createWindow("Window1", 700, 700)

const mineSprite = new g3.Sprite(g3.getImage("./texture.png"), 0, 0, Window.context)

Window.background = "#373"

function loop() {
    Window.update()
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

- onKeyup
```js
g3.onKeyup(e => {
    console.log("Hello")
})
```
#### General event listener:

```js

g3.watchEvent("keydown", e => {
    console.log("Hello")
})
```
#### Key constants
- g3.KEY.DOWN_ARROW
- g3.KEY.UP_ARROW
- g3.KEY.LEFT_ARROW
- g3.KEY.RIGHT_ARROW
- g3.KEY.W
- g3.KEY.A
- g3.KEY.S
- g3.KEY.D
- g3.KEY.ENTER
- g3.KEY.SPACE

#### createWindow():

If your canvas must have an specific width and height use this example:
```js

let name = "Window1"
let width = 700 // px
let height = 700 // px

g3.createWindow(name, width, height)
```
If you want a fullscreen canvas:
```js

let name = "Window1"

g3.createWindow(name, "full")
```
#### getImage() :
Returns an Image instance

```js

let src = "./example.png"
let image = g3.getImage(src)
```
#### saveData():
This method save an object to localStorage that you can load using the loadData() method. You can usit to save games.
```js
let key = "Save 1"

let object = {
    name:"Gamer",
    age:17,
    speed:100,
    inventory:["Apple", "Backpack"]
}
g3.saveData(key, object)
```
#### loadData():
Following the last example of saveData()
```js
let key = "Save 1"

let object = g3.loadData(key)

console.log(object)
```
```
Output: {
    name:"Gamer",
    age:17,
    speed:100,
    inventory:["Apple", "Backpack"]
}
```

## maths object methods and properties:

#### distanceBetweenPoints():
```js
const x1 = 0
const y1 = 0
const x2 = 10
const y2 = 10

g3.maths.distanceBetweenPoints(x1, y1, x2, y2) 
```
#### toRadians():
convert from degrees to radians
```js
const degrees = 360

g3.maths.toRadians(degrees)
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

####  clip():

Clipping next image (100 x 100):

![Example image](/assets/example2.png)

```js

    let clipX = 0
    let clipY = 0
    let clipWidth = 50
    let clipHeight = 50
    
    Sprite.clip(clipX, clipY, clipWidth, clipHeight)
```
Result:

![Example image 2](/assets/example3.png)
## Window methods:
#### clear():
Clear the canvas for the next frame.
```js
Window.clear()
```

#### fillRect():
Fill's a rectangle in x and y position with an specific width and height.
```js
let x = 0
let y = 0
let width = 70
let height = 70

Window.fillRect(x, y, width, height)
```
#### arc():
With this method you can choose whether to fill or draw an arc.
```js
let x = 0
let y = 0
let radius = 10
let startAngle = 0
let endAngle = Math.PI * 2 // 360°
let color = "#fff"
let fill = false // false to stroke rect and true to fill. By default fill is set true.
let anticlockwise = false // By default is set to false

Window.arc(x , y, radius, startAngle, endAngle, color, fill, anticlockwise)
```
#### line():
Stroke a line 
```js
let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let color = "#fff" // Optional. By default #fff
let lineWidth = 2 // This an optional argument. By default is set 1

Window.line(x1, y1, x2, y2, color, lineWidth)
```
#### update():
This method clear the display and resize canvas to fullscreen if you set the size to "full" in createWindow()
```js
function loop(){
    Window.update()
    requestAnimationFrame(loop)
}
loop()
```
## Window properties:

#### background
Fill's the background of the canvas with an specific color.
```js
Window.background = "#faf"
```

