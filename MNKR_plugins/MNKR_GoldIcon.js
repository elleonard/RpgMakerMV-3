/*:
 * @plugindesc 通貨単位の表示をアイコンに置き換えます
 * @author munokura
 *
 * @param Gold Icon
 * @text 通貨アイコンID
 * @type string
 * @desc 通貨の単位に使用するアイコンID
 * @default 313
 *
 * @help
 * 通貨単位の表示をアイコンに置き換えます。
 *
 * プラグインコマンドはありません。
 *
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function() {
	'use strict';

    var parameters = PluginManager.parameters('MNKR_GoldIcon');
	var goldIcon = parseInt(parameters['Gold Icon'] || 313);

	Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
		this.resetTextColor();
		this.drawText(value, x, y, width - 36 - 6, 'right');
		this.drawIcon(goldIcon, x + width - 36, y);
	};

})();