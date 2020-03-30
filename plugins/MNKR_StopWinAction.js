/*:ja
 * @plugindesc 指定スイッチがONの場合、戦闘勝利時にSVアクターが指定動作をします。
 * @author munokura
 *
 * @param Switch Id
 * @text 指定スイッチ
 * @type switch
 * @desc 発動させるスイッチID
 * @default 1
 *
 * @param Select Action
 * @text 指定動作
 * @type select
 * @option 前進
 * @value walk
 * @option 通常待機
 * @value wait
 * @option 詠唱待機
 * @value chant
 * @option 防御
 * @value guard
 * @option ダメージ
 * @value damage
 * @option 回避
 * @value evade
 * @option 突き
 * @value thrust
 * @option 振り
 * @value swing
 * @option 飛び道具
 * @value missile
 * @option 汎用スキル
 * @value skill
 * @option 魔法
 * @value spell
 * @option アイテム
 * @value item
 * @option 逃げる
 * @value escape
 * @option 勝利
 * @value victory
 * @option 瀕死
 * @value dying
 * @option 状態異常
 * @value abnormal
 * @option 睡眠
 * @value sleep
 * @option 戦闘不能
 * @value dead
 * @desc スイッチON時の勝利時に行う動作
 * @default dying
 * 
 * @help
 * 指定スイッチがONの場合、戦闘勝利時にSVアクターが指定動作をします。
 *
 * 利用規約
 *   著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	var parameters = PluginManager.parameters('MNKR_StopWinAction');
	var switchId = Number(parameters['Switch Id'] || 1);
	var selectAction = String(parameters['Select Action'] || 'dying');

	var _Game_Actor_performVictory = Game_Actor.prototype.performVictory;
	var _Sprite_Actor_refreshMotion = Sprite_Actor.prototype.refreshMotion;
	Game_Actor.prototype.performVictory = function() {
		if($gameSwitches.value(switchId) && this.canMove()) {
			_Sprite_Actor_refreshMotion = function() {
				var actor = this._actor;
				this.startMotion(selectAction);
			};
		} else {
			_Game_Actor_performVictory.apply(this, arguments);
		};
	};
	
})();
