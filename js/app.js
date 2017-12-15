// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x >= 505) {
        this.x = -101;
        this.y = Math.random() * (225 - 27) + 27;
        this.speed = Math.random() * (300-50) + 50;
    }

    //Check if enemy crushed olayer after all movement iteration
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. 
};

Enemy.prototype.checkCollisions = function(enemy) {
    // Check the intersection of two rectangles (player and this enemy)
    if (   

        (((player.x + 17 >= enemy.x) && (player.x + 17 <= enemy.x +101)) || ((enemy.x >= player.x +17) && (enemy.x <= player.x +84)))&&
        (((player.y +63 >= enemy.y + 77) && (player.y +63<= enemy.y +142)) || ((enemy.y + 142>= player.y +63) && (enemy.y +77 <= player.y +140)))

        ) {
            player.x = 202;
            player.y = 400;
            console.log('Crushed');
    }

    // Chech if player in the top
    if (player.y <= 0) {        
        player.x = 202;
        player.y = 400;
        console.log('Gongrats');
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    if (this.x > 404) {
        this.x = 404; 
    }
    if (this.y > 435) {
        this.y = 435;
    }
    if (this.x < -0 ) {
        this.x = 0;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and


// A handleInput() method.
Player.prototype.handleInput = function (keyCode){
    switch (keyCode) {
    case 'up':
        player.y -= player.speed;
        break;
    case 'right':
        player.x += player.speed;
        break;
    case 'down':
        player.y += player.speed;
        break;
    case 'left':
        player.x -= player.speed;
        break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// Start player position
var player = new Player(202,400,50);


// Enemies array
allEnemies = [];
for (i=0; i<4; i++){
    var enemy = new Enemy(-101, Math.random() * (225 - 27) + 27, Math.random() * (300-50) + 50);
    allEnemies.push(enemy);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
