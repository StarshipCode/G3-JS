function G3() {
    this.getImage = (src) => {
        let image = new Image()
        image.src = src
        return image
    }
    this.Sprite = function (image, x, y, ctx) {
        this.image = image

        this.ctx = ctx

        this.x = x
        this.y = y

        this.width = this.image.width
        this.height = this.image.height

        this.clipX = 0
        this.clipY = 0
        this.clipWidth = this.width
        this.clipHeight = this.height

        this.clip = (x = 0, y = 0, width = this.width, height = this.height) => {
            this.clipX = x
            this.clipY = y
            this.clipWidth = width
            this.clipHeight = height
        }

        this.draw = (x = this.x, y = this.y, width = this.width, height = this.height) => {
            this.ctx.drawImage(this.image, this.clipX, this.clipY, this.clipWidth, this.clipHeight, x, y, width, height)
        }
    }
    this.G3_WINDOW = function (element, name) {
        //Element
        this.e = element
        //Full screen
        this.fullScreen = false
        //Background color
        this.background = "#fff"
        //Window name
        this.name = name

        //Graphic context
        this.context = element.getContext("2d")

        //Fill a rectangle
        this.fillRect = (x, y, w, h, color = "#fff") => {
            this.context.fillStyle = color
            this.context.fillRect(x, y, w, h)
            this.context.fillStyle = "black"
        }
        //Clear the display
        this.clear = () => {
            this.context.clearRect(0, 0, this.e.width, this.e.height)
            this.context.fillStyle = this.background
            this.context.fillRect(0, 0, this.e.width, this.e.height)
            this.context.fillStyle = "black"
        }
        //Update display
        this.update = () => {
            //resize canvas to fullscreen
            if (this.fullScreen == true) {
                this.e.width = innerWidth
                this.e.height = innerHeight
            }
            this.clear()
        }
        //Arc
        this.arc = (x, y, radius, startAngle, endAngle, color, fill = true, anticlockwise = false) => {
            this.context.beginPath()
            this.context.strokeStyle = color
            this.context.fillStyle = color
            this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
            if (fill)
                this.context.fill()
            else
                this.context.stroke()
            this.context.strokeStyle = "black"
            this.context.fillStyle = "black"
            this.context.closePath()
        }
        this.drawImage = (sprite) => {
            sprite.draw(this.context)
        }
        this.resize = (width, height) => {
            this.e.width = width

            this.e.height = height
        }
    }
    this.createWindow = (name = "default", width = 100, height = 100) => {
        //Create canvas
        document.write(`<canvas id=${name}></canvas>`)

        //Get canvas
        const e = document.getElementById(name)

        //Instance the window object
        const object = new this.G3_WINDOW(e, name)

        //Resize canvas
        if (width == "full")
            object.fullScreen = true
        else {
            e.width = width
            e.height = height
        }

        //Return window
        return object
    }
    this.KEY = {
        "UP_ARROW": 38,
        "DOWN_ARROW": 40,
        "LEFT_ARROW": 37,
        "RIGHT_ARROW": 39,
        "SPACE": 32,
        "ENTER": 13,
        "W": 87,
        "A": 65,
        "S": 83,
        "D": 68,
    }
    //General events
    this.watchEvent = (event, callback) => {
        document.addEventListener(event, callback)
    }
    this.onKeydown = (callback) => {
        document.addEventListener("keydown", callback)
    }
    this.onClick = (callback) => {
        document.addEventListener("click", callback)
    }
    this.onKeyup = (callback) => {
        document.addEventListener("keyup", callback)
    }
}
