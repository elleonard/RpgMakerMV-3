/*:
 * @plugindesc プラグインコマンドで、リンク先を新しいウィンドウに開きます。
 * @author munokura
 *
 * @help
 * プラグインコマンド
 * MNKR_NewWindow http://fungamemake.com/
 *   リンク先を新しいウィンドウに開きます。
 *
 * 謝辞
 *   コードの主要部分はトリアコンタン氏が公開しているコードです。
 *   https://gist.github.com/triacontane/8992baccfb35f985ec93107b8ced6c30
 *   トリアコンタン氏の活動に感謝申し上げます。
 * 
 * 利用規約
 *   作者としての著作権を放棄します。
 *   パブリックドメインです。
 */

(function(){
	'use strict';

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
		if (command === 'MNKR_NewWindow') this.newWindow(args);
	};

	Game_Interpreter.prototype.newWindow = function(args) {
		var url = String(args[0]);
		if (Utils.isNwjs()) {
			var exec = require('child_process').exec;
			switch (process.platform) {
				case 'win32':
					exec('rundll32.exe url.dll,FileProtocolHandler  "' + url + '"');
					break;
				default:
					exec('open "' + url + '"');
					break;
			}
		} else {
			window.open(url);
		}
	};
	
})();