/*:
 * @plugindesc 発動スイッチがONの時、アクターの表示画像を指定番号画像に切り替えます。
 * @author munokura
 *
 * @param Switch Id 1
 * @text 発動スイッチID
 * @type switch
 * @desc 発動させるスイッチID
 * @default 11
 *
 * @param Before Face Id 1
 * @text 変更前アクター画像ID
 * @type number
 * @desc 変更前アクター画像ID
 * @default 1
 *
 * @param After Face Id 1
 * @text 変更後アクター画像ID
 * @type number
 * @desc 変更後アクター画像ID
 * @default 3
 *
 * @param Switch Id 2
 * @text 発動スイッチID
 * @type switch
 * @desc 発動させるスイッチID
 * @default 12
 *
 * @param Before Face Id 2
 * @text 変更前アクター画像ID
 * @type number
 * @desc 変更前アクター画像ID
 * @default 2
 *
 * @param After Face Id 2
 * @text 変更後アクター画像ID
 * @type number
 * @desc 変更後アクター画像ID
 * @default 4
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

(function(){
	'use strict';

	var parameters =    PluginManager.parameters('MNKR_MOG_BattleHud_ChangeActor');
	var switchId1 =     Number(parameters['Switch Id 1'] || 11);
	var beforeFaceId1 = Number(parameters['Before Face Id 1'] || 1);
	var afterFaceId1 =  String(parameters['After Face Id 1'] || 3);
	var switchId2 =     Number(parameters['Switch Id 2'] || 11);
	var beforeFaceId2 = Number(parameters['Before Face Id 2'] || 1);
	var afterFaceId2 =  String(parameters['After Face Id 2'] || 3);

	function changeFace(faceId) {
		if ($gameSwitches.value(switchId1) && (faceId === beforeFaceId1)) {
			return "Face_" + afterFaceId1;
		} else if ($gameSwitches.value(switchId2) && (faceId === beforeFaceId2)) {
			return "Face_" + afterFaceId2;
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