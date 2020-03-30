/*:
 * @plugindesc エンカウント時にマップイベントが表示されたままになります。
 * @author munokura
 *
 * @help
 * プラグインコマンドはありません。
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	Scene_Map.prototype.startEncounterEffect = function() {
		this._encounterEffectDuration = this.encounterEffectSpeed();
	};

})();
