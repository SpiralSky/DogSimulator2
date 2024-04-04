const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from('path/to/your/image.png');
app.stage.addChild(sprite);