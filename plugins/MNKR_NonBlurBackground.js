/*:
 * @plugindesc メインメニューの背景を鮮明に表示します。
 * @author munokura
 *
 * @help
 * メインメニューの背景を鮮明に表示します。
 * 戦闘背景がマップの場合も鮮明になります。
 *
 * プラグインコマンドや設定はありません。
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	SceneManager.snapForBackground = function() {
		this._backgroundBitmap = this.snap();
	};

})();
