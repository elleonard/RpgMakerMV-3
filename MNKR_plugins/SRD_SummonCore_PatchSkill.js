/*:ja
 * @plugindesc SRD_SummonCoreで召喚されたアクターがレベルに合わせたスキルを習得しないのを習得するように変更するパッチプラグイン
 * @author munokura
 * 
 * @help
 * Summon Core Version 1.05 用のパッチプラグインです。
 * 動作にはSummon Coreが必要です。
 * http://sumrndm.site/summon-core/
 * 
 * プラグイン管理で、このプラグインをSRD_SummonCoreの下側に配置してください。
 * 
 * Summon Core では召喚アクターのレベルを指定できますが、
 * レベル毎の習得スキルを設定していて、初期レベルが1の場合、
 * レベル1の習得スキルのみを習得した状態で召喚されます。
 * 
 * このパッチプラグインは、この問題を解決します。
 * 召喚レベルに合わせてスキルを習得した状態で召喚されます。
 * 
 * 注意点
 * Summon Core Version 1.05 では、
 * データベースで召喚されるアクターの初期レベルを99等の高レベルに設定していて、
 * 低いレベルで召喚した場合、初期レベルで習得済みの全スキルを習得した状態で召喚されます。
 * この問題はこのパッチプラグインでも解消していません。
 * よって、データベースで召喚されるアクターの初期レベルは1にしておくことをお勧めします。
 * 
 * 利用規約
 *   検討中
*/
(function (_, N) {

    "use strict";

    const _Game_Summon_initialize = Game_Summon.prototype.initialize;
    Game_Summon.prototype.initialize = function (actorId, level, turns, introAni, exitAni, masterId) {
        var ret = _Game_Summon_initialize.apply(this, arguments);
        this.currentClass().learnings.forEach(function (learning) {
            if (learning.level <= this._level) {
                this.learnSkill(learning.skillId);
            }
        }, this);
        return ret;
    };
})(SRD.SummonCore, SRD.NotetagGetters);