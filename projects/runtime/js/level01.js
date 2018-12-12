var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y =  groundY-10;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/tubleweed.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        createSawBlade(700, 290);
        createSawBlade(1200, 290);
        createSawBlade(2000, 290);
        createSawBlade(2500, 290);
        createSawBlade(3000, 290);
        createSawBlade(4000, 290);
        createSawBlade(4500, 290);
        createSawBlade(5000, 290);
        createSawBlade(525000, 290);
        
        function createEnemy(x, y) {
        var enemy =  game.createGameItem('enemy',25);
        //var redSquare = draw.rect(50,50,'red');
        //redSquare.x = -25;
        //redSquare.y = -25;
        //enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = groundY-50;
        game.addGameItem(enemy);
        var enemyImage = draw.bitmap('img/bandit.png');
        enemy.addChild(enemyImage);
        enemyImage.x = -90;
        enemyImage.y = -90;
        enemy.velocityX = -1.25;
        enemy.onPlayerCollision = function() {
            console.log('The enemy has hit Halle');
            game.changeIntegrity(-30);
            enemy.shrink();
        };
        enemy.onProjectileCollision = function() {
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            enemy.fadeOut();
        };
        };
        createEnemy(2000, 290);
        createEnemy(2850, 290);
        createEnemy(3800, 290);
        createEnemy(4500, 290);
        
        function createReward(x, y) {
            var reward =  game.createGameItem('enemy',12);
            reward.x = x;
            reward.y =  groundY-150;
            game.addGameItem(reward);
            var rewardImage = draw.bitmap('img/coin.png');
            reward.addChild(rewardImage);
            rewardImage.x = -11;
            rewardImage.y = -11;
            reward.velocityX = -1.5;
            reward.onPlayerCollision = function() {
                console.log('Halle has collected a coin');
                game.increaseScore(100);
                reward.shrink();
            };
        };
        createReward(800, 200);
        createReward(1200, 200);
        createReward(1800, 200);
        createReward(2600, 200);
        createReward(2900, 200);
        createReward(4000, 200);
        createReward(4700, 200);
        
    };
   
};
 
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}