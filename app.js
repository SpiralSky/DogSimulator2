const app = new PIXI.Application({ width: 800, height: 600 , backgroundColor: 0x2980b});
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from('path/to/your/image.png');
app.stage.addChild(sprite);