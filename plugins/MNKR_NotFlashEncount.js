﻿/*:
 * @plugindesc エンカウント時のフラッシュを止めます。
 * @author munokura
 *
 * @help
 * エンカウント時のフラッシュを止めます。
 *
 * プラグインコマンドや設定はありません。
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	Scene_Map.prototype.updateEncounterEffect = function() {
		if (this._encounterEffectDuration > 0) {
			this._encounterEffectDuration--;
			var speed = this.encounterEffectSpeed();
			var n = speed - this._encounterEffectDuration;
			var p = n / speed;
			var q = ((p - 1) * 20 * p + 5) * p + 1;
			var zoomX = $gamePlayer.screenX();
			var zoomY = $gamePlayer.screenY() - 24;
			if (n === 2) {
				$gameScreen.setZoom(zoomX, zoomY, 1);
				this.snapForBattleBackground();
			};
			$gameScreen.setZoom(zoomX, zoomY, q);
			if (n === Math.floor(speed / 2)) {
				BattleManager.playBattleBgm();
				this.startFadeOut(this.fadeSpeed());
			};
		};
	};

})();
