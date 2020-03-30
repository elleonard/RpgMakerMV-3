﻿/*:
 * @plugindesc 敵グループの敵キャラをランダムに入れ替えます。
 * @help
 * 敵グループの敵キャラをランダムに入れ替えます。
 *
 * 敵キャラのメモ欄に下記のようにタグを入れてください。
 * <RandomEnemy:敵キャラID>
 * <RandomEnemy:敵キャラID,敵キャラID,敵キャラID>
 * 0は非表示になります。
 *
 * 例
 * <RandomEnemy:0,0,1,1,2,3>
 * 
 * 注意！
 * 下記のタグは無限ループが発生するため、使用しないでください。
 * <RandomEnemy:0>
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function() {
    'use strict';
    
    Game_Troop.prototype.setup = function(troopId) {
        var condition = true;
        while (condition) {
            this.clear();
            this._troopId = troopId;
            this._enemies = [];

            this.troop().members.forEach(function(member) {
                var randomEnemyId = selectEnemyId($dataEnemies[member.enemyId]);
                var enemy = new Game_Enemy(randomEnemyId || member.enemyId, member.x, member.y);
                if (randomEnemyId === 0 || member.hidden) {
                  enemy.hide();
                } else {
                  condition = false;
                };
                this._enemies.push(enemy);
            }, this);
            this.makeUniqueNames();
        };
    };

    function selectEnemyId(arrayData) {
        if (!arrayData.meta.RandomEnemy) {
            return null;
        };
        var pool = JsonEx.parse( `[${arrayData.meta.RandomEnemy}]` );
        return Number(pool[Math.randomInt(pool.length)]);
    };

})();