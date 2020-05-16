var Imported = Imported || {};
Imported['SceneFormation'] = 1.092;

(function () {

    'use strict';

    Window_FormationStatus.prototype.drawParameters = function (x, y) {
        var lineHeight = this.lineHeight();
        var blockWidth = statusBlockWidth / 2 - 6;
        var paramWidth = blockWidth / 3;

        var paramId = 0 + 2;
        var y2 = y + 32 * (0 % 3);
        var x2 = x + Math.floor(0 / 3) * blockWidth;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x2 + (12 * Math.floor(0 / 3)), y2, paramWidth * 2);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x2 + paramWidth * 2 + (12 * Math.floor(0 / 3)), y2, paramWidth, 'right');

        var paramId = 1 + 2;
        var y2 = y + 32 * (1 % 3);
        var x2 = x + Math.floor(1 / 3) * blockWidth;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x2 + (12 * Math.floor(1 / 3)), y2, paramWidth * 2);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x2 + paramWidth * 2 + (12 * Math.floor(1 / 3)), y2, paramWidth, 'right');

        var paramId = 4 + 2;
        var y2 = y + 32 * (2 % 3);
        var x2 = x + Math.floor(2 / 3) * blockWidth;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x2 + (12 * Math.floor(2 / 3)), y2, paramWidth * 2);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x2 + paramWidth * 2 + (12 * Math.floor(2 / 3)), y2, paramWidth, 'right');
    };

})();