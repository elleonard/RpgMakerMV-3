/*:
 * @plugindesc スキルの連続回数が2回以上の場合、戦闘アニメーション再生回数を1回にします。
 * @author munokura
 *
 * @help
 * スキルの連続回数が2回以上の場合、戦闘アニメーション再生回数を1回にします。
 *
 * プラグインコマンドや設定はありません。
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	Game_Battler.prototype.startAnimation = function(animationId, mirror, delay) {
	    var data = { animationId: animationId, mirror: mirror, delay: delay };
	    if (this._animations.length === 0) {
	    	this._animations.push(data);
	    };
	};

})();
