import * as PIXI from 'pixi.js'
import backgroundImage from "./images/background.png"

export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader

    private pixiWidth = window.innerWidth
    private pixiHeight = window.innerHeight

    constructor() {
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('backgroundTexture', backgroundImage)
        this.loader.load(() => this.loadCompleted())
    }

    loadCompleted(){
        //create background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        background.height = this.pixiHeight;
        background.width = this.pixiWidth;
        this.pixi.stage.addChild(background);
    }

}

let game = new Game()