Entitite.SpriteSystem = function(game, preallocatedInstanceCount) {
  Entitite.InstanceSystem.call(this, preallocatedInstanceCount);

  this.game = game;
};

Entitite.SpriteSystem.prototype = Object.create(Entitite.InstanceSystem.prototype);
Entitite.SpriteSystem.prototype.constructor = Entitite.SpriteSystem;

Entitite.SpriteSystem.mixin({
  
  _name: 'sprite',

  initInstance: function(instance, params) {
    var spriteImage = params.sprite;
    var x = params.x || 0;
    var y = params.y || 0;
    
    instance.sprite = new Phaser.Sprite(this.game, x, y, spriteImage);  

    instance.sprite.rotation = params.rotation || 0;
    instance.sprite.pivot = params.pivot || new Phaser.Point();
    instance.sprite.renderOrder = params.renderOrder || 0;

    this.game.world.add(instance.sprite);
  },

  updateInstance: function(instance) {
    instance.sprite.rotation += 0.01;
  }

});