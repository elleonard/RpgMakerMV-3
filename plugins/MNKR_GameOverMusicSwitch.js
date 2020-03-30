/*:ja
 * @plugindesc 指定スイッチがONの場合、ゲームオーバー時に直前のBGMが流れ続けます
 * @author munokura
 *
 * @param Switch Id
 * @text スイッチID
 * @type switch
 * @desc 発動させるスイッチID
 * @default 1
 *
 * @help
 * スイッチがONの場合、
 * ゲームオーバー時に直前のBGMが流れ続ます。
 *
 * 利用規約
 *   著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	var parameters = PluginManager.parameters('MNKR_GameOverMusic');
	var switchId = Number(parameters['Switch Id'] || 1);

	var _Scene_Gameover_playGameoverMusic = Scene_Gameover.prototype.playGameoverMusic
	Scene_Gameover.prototype.playGameoverMusic = function() {
		if($gameSwitches.value(switchId)) {
			};
	};

})();
