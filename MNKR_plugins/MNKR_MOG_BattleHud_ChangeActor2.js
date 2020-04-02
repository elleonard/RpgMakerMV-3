/*:
 * @plugindesc 発動スイッチがONの時、アクターの表示画像を指定番号画像に切り替えます。
 * @author munokura
 *
 * @param Change Face
 * @text 変更組合せ
 * @desc 変更組合せ
 * @type struct<changeFaceList>[]
 * @default
 *
 * @help
 * MOG_BattleHud (v5.04)用のパッチプラグインです。
 * 動作にはMOG_BattleHudが必要です。
 * このプラグインはプラグイン管理でMOG_BattleHudの下に配置してください。
 * 
 * 発動スイッチがONの時、アクターの表示画像を指定番号画像に切り替えます。
 *
 * 利用規約
 *   MOG_BattleHudの利用規約と同等とします。
 *   https://atelierrgss.wordpress.com/about/
 */
 /*~struct~changeFaceList:
 * @param switchId
 * @text 発動スイッチID
 * @type switch
 * @desc 発動させるスイッチID
 * @default
 *
 * @param beforeFaceId
 * @text 変更前アクター画像ID
 * @type number
 * @desc 変更前アクター画像ID
 * @default
 *
 * @param afterFaceId
 * @text 変更後アクター画像ID
 * @type number
 * @desc 変更後アクター画像ID
 * @default
 */

(function(){
	'use strict';

	var parameters =    PluginManager.parameters('MNKR_MOG_BattleHud_ChangeActor');

	var param = JSON.parse(JSON.stringify(parameters, function(key, value) {
        try {
            return JSON.parse(value);
        } catch (e) {
            try {
                return eval(value);
            } catch (e) {
                return value;
            }
        }
    }));

    var changeFaceList = param.changeFaceList || [];

	function changeFace(faceId) {
        var faceList;
        var count = changeFaceList.length;
        for (var i = 0; i < count; i++) {
            faceList = changeFaceList[i];
            if (faceList && faceList.beforeFaceId === faceId && faceList.afterFaceId) {
                return "Face_" + afterFaceId;
            };
		};
		return "Face_" + faceId;
	};

//==============================
// * Create Face
//==============================
	Battle_Hud.prototype.create_face = function() {
		if (String(Moghunter.bhud_face_visible) != "true") {
			return;
		};

		this.removeChild(this._face);

		if (!this._battler) {
			return;
		};

		var actorFace = this._battler._actorId;
		var changeFaceId = changeFace(actorFace);
		this._face = new Sprite(ImageManager.loadBHud(changeFaceId));
		this._face.anchor.x = 0.5;
		this._face.anchor.y = 0.5;
		this._face_data = [0,0,false,false,false,-1];
		this._face.ph = 0;
		this._face.animation = [-1,0,0,0,0,0,0,0,0];
		this._face.breathEffect = this._battler._bhud.faceBreath;
		this._face.scaleY = 0;

		if (String(Moghunter.bhud_face_shake) === "true") {
			this._face_data[2] = true;
		};

		if (String(Moghunter.bhud_face_animated) === "true") {
			this._face_data[4] = true;
		};

		this._battler._bhud_face_data = [0,0,0,1];
		this.addChild(this._face);
	};

})();