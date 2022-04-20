(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assets = void 0;
var assets = [{
        id: 'arrow',
        name: 'arrow',
        url: '../game/assets/all/arrow.png'
    }, {
        id: 'sign',
        name: 'sign',
        url: '../game/assets/menu/sign.png'
    }, {
        id: 'continuePack',
        name: 'continuePack',
        url: '../game/assets/menu/continue-pack.png'
    }, {
        id: 'rulesPack',
        name: 'rulesPack',
        url: '../game/assets/menu/rules-pack.png'
    }, {
        id: 'startPack',
        name: 'startPack',
        url: '../game/assets/menu/start-pack.png'
    }, {
        id: 'exitBtn',
        name: 'startPack',
        url: '../game/assets/menu/exit.png'
    }, {
        id: 'settingsBtn',
        name: 'startPack',
        url: '../game/assets/menu/settings.png'
    }, {
        id: 'back',
        name: 'startPack',
        url: '../game/assets/menu/background.png'
    }, {
        id: 'menu',
        name: 'startPack',
        url: '../game/assets/character/menu.png'
    }, {
        id: 'borderTop',
        name: 'startPack',
        url: '../game/assets/character/border-top.png'
    }, {
        id: 'borderBottom',
        name: 'startPack',
        url: '../game/assets/character/border-bottom.png'
    }, {
        id: 'table',
        name: 'startPack',
        url: '../game/assets/character/table.png'
    }, {
        id: 'done',
        name: 'startPack',
        url: '../game/assets/character/done.png'
    }, {
        id: 'rightArrow',
        name: 'startPack',
        url: '../game/assets/character/arr-right.png'
    }, {
        id: 'leftArrow',
        name: 'startPack',
        url: '../game/assets/character/arr-left.png'
    }, {
        id: 'char1',
        name: 'startPack',
        url: '../game/assets/character/char1.png'
    }, {
        id: 'char2',
        name: 'startPack',
        url: '../game/assets/character/char2.png'
    }, {
        id: 'rules',
        name: 'startPack',
        url: '../game/assets/level-1/rules.png'
    }, {
        id: 'lvl1',
        name: 'startPack',
        url: '../game/assets/level-1/lvl1.png'
    }, {
        id: 'startRules',
        name: 'startPack',
        url: '../game/assets/level-1/start.png'
    }, {
        id: 'levelMenu',
        name: 'startPack',
        url: '../game/assets/level-1/menu-btn.png'
    }, {
        id: 'levelHint',
        name: 'startPack',
        url: '../game/assets/level-1/hint.png'
    }, {
        id: 'levelShelf',
        name: 'startPack',
        url: '../game/assets/level-1/shelf.png'
    }, {
        id: 'levelTargets',
        name: 'startPack',
        url: '../game/assets/level-1/targets.png'
    }, {
        id: 'levelBack',
        name: 'startPack',
        url: '../game/assets/level-1/back.png'
    }, {
        id: 'levelCart',
        name: 'startPack',
        url: '../game/assets/level-1/cart.png'
    }, {
        id: 'levelTest',
        name: 'startPack',
        url: '../game/assets/level-1/test.png'
    }];
exports.assets = assets;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CG_1 = require("../../src/CG");
var assets_1 = require("./assets");
window.addEventListener('DOMContentLoaded', function () {
    CG_1.CG.Utils.ImageLoader.loadAssets(assets_1.assets).then(function (assets) {
        var currentChar = true;
        function canvasClickHandler(coords, meta) {
            // canvas.draw(CG.Shapes.Arc({
            //     x: coords.x,
            //     y: coords.y,
            //     radius: 30,
            //     startAngle: 2 * Math.PI,
            //     endAngle: 0
            // }));
            // canvas.draw(CG.Shapes.Rect({
            //     x: coords.x - 25,
            //     y: coords.y - 20,
            //     radius: 30,
            //     height: 40,
            //     width: 50
            // }));
            console.log(meta.shapes);
            for (var _i = 0, _a = meta.shapes; _i < _a.length; _i++) {
                var shape = _a[_i];
                if (shape.getName() == 'startBtn') {
                    shape.update({ x: shape.getShape().x, y: shape.getShape().y - 10 });
                }
                if (shape.getName() == 'arrowRight' || shape.getName() == 'arrowLeft') {
                    var char = canvas.getObjects();
                    char[100].update((currentChar ? { image: assets.char2.image } : { image: assets.char1.image }));
                    currentChar = !currentChar;
                }
                if (shape.getName() == 'startBtn') {
                    initNewScene(initCharaterSelect);
                }
                if (shape.getName() == 'menuButton') {
                    initNewScene(initMenuScreen);
                }
                if (shape.getName() == 'doneButton') {
                    initNewScene(initLevelRules);
                }
                if (shape.getName() == 'levelTest') {
                    shape.update({ x: 100, y: 375 });
                    var objs = canvas.getObjects();
                    objs[30].update({ x: 740 });
                }
                if (shape.getName() == 'level1Done') {
                    initNewScene(initMenuScreen);
                }
                if (shape.getName() == 'startLevel1') {
                    initNewScene(initLevel1);
                }
            }
            // canvas.draw(CG.Shapes.Image({
            //     image: assets[0].image,
            //     x: 0,
            //     y: 0,
            //     height: +meta.target.height,
            //     width: +meta.target.width,
            //     radius: 20
            // }))
        }
        function initMenuScreen() {
            return [CG_1.CG.Shapes.Image({
                    hash: 1,
                    image: assets.back.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }), CG_1.CG.Shapes.Image({
                    image: assets.sign.image,
                    x: 30,
                    y: 50,
                    radius: 20,
                    height: 400,
                    width: 420 * assets.sign.widthToHeight
                }), CG_1.CG.Shapes.Image({
                    image: assets.continuePack.image,
                    x: 240,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.continuePack.widthToHeight
                }), CG_1.CG.Shapes.Image({
                    image: assets.rulesPack.image,
                    x: 400,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.rulesPack.widthToHeight
                }), CG_1.CG.Shapes.Image({
                    image: assets.startPack.image,
                    x: 550,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.startPack.widthToHeight
                }).setName('startBtn'), CG_1.CG.Shapes.Image({
                    image: assets.exitBtn.image,
                    x: 600,
                    y: 20,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.exitBtn.widthToHeight
                }).setName('exitBtn'), CG_1.CG.Shapes.Image({
                    image: assets.settingsBtn.image,
                    x: 600,
                    y: 90,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.settingsBtn.widthToHeight
                }).setName('settingsBtn')];
        }
        function initCharaterSelect() {
            return [
                CG_1.CG.Shapes.Image({
                    hash: 12,
                    image: assets.back.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.menu.image,
                    x: 10,
                    y: 10,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.menu.widthToHeight
                }).setName('menuButton'),
                CG_1.CG.Shapes.Image({
                    image: assets.borderTop.image,
                    x: 200,
                    y: 5,
                    radius: 20,
                    height: 185,
                    width: 185 * assets.borderTop.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.borderBottom.image,
                    x: 10,
                    y: 390,
                    radius: 20,
                    height: 100,
                    width: 100 * assets.borderBottom.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.table.image,
                    x: 40,
                    y: 80,
                    radius: 20,
                    height: 370,
                    width: 370 * assets.table.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.done.image,
                    x: 740,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.done.widthToHeight
                }).setName('doneButton'),
                CG_1.CG.Shapes.Image({
                    hash: 100,
                    image: assets.char1.image,
                    x: 570,
                    y: 100,
                    radius: 20,
                    height: 350,
                    width: 350 * assets.char1.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.rightArrow.image,
                    x: 710,
                    y: 210,
                    radius: 20,
                    height: 60,
                    width: 60 * assets.rightArrow.widthToHeight
                }).setName('arrowRight'),
                CG_1.CG.Shapes.Image({
                    image: assets.leftArrow.image,
                    x: 500,
                    y: 210,
                    radius: 20,
                    height: 60,
                    width: 60 * assets.leftArrow.widthToHeight
                }).setName('arrowLeft'),
            ];
        }
        function initLevelRules() {
            return [
                CG_1.CG.Shapes.Image({
                    hash: 12,
                    image: assets.back.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.rules.image,
                    x: 20,
                    y: 20,
                    radius: 20,
                    height: 400,
                    width: 400 * assets.rules.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.lvl1.image,
                    x: 400,
                    y: 250,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.lvl1.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.menu.image,
                    x: 30,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.menu.widthToHeight
                }).setName('menuButton'),
                CG_1.CG.Shapes.Image({
                    image: assets.startRules.image,
                    x: 640,
                    y: 40,
                    radius: 20,
                    height: 90,
                    width: 90 * assets.startRules.widthToHeight
                }).setName('startLevel1'),
            ];
        }
        function initLevel1() {
            return [
                CG_1.CG.Shapes.Image({
                    hash: 12,
                    image: assets.levelBack.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.levelMenu.image,
                    x: 20,
                    y: 0,
                    radius: 20,
                    height: 65,
                    width: 65 * assets.levelMenu.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    image: assets.levelHint.image,
                    x: 610,
                    y: 10,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelHint.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    hash: 13,
                    image: assets.levelTargets.image,
                    x: 400 - 150,
                    y: 420,
                    radius: 20,
                    height: 90,
                    width: 300
                }),
                CG_1.CG.Shapes.Image({
                    hash: 20,
                    image: assets.levelCart.image,
                    x: 35,
                    y: 325,
                    radius: 20,
                    height: 150,
                    width: 150 * assets.levelCart.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    hash: 15,
                    image: assets.levelShelf.image,
                    x: 400 - 150,
                    y: 100,
                    radius: 20,
                    height: 300,
                    width: 300
                }),
                CG_1.CG.Shapes.Image({
                    hash: 14,
                    image: assets.levelTest.image,
                    x: 400 - 50 * assets.levelTest.widthToHeight / 2,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelTest.widthToHeight
                }),
                CG_1.CG.Shapes.Image({
                    hash: 16,
                    image: assets.levelTest.image,
                    x: 350 - 50 * assets.levelTest.widthToHeight / 2,
                    y: 260,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelTest.widthToHeight
                }).setName('levelTest'),
                CG_1.CG.Shapes.Image({
                    hash: 30,
                    image: assets.done.image,
                    x: 800,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.done.widthToHeight
                }).setName('level1Done'),
            ];
        }
        var gameCursor = CG_1.CG.Shapes.Image({
            image: assets.arrow.image,
            x: 0,
            y: 0,
            height: 40,
            width: 40 * assets.arrow.widthToHeight,
            radius: 20,
            hash: 999999
        });
        var canvasOptions = {
            selector: '#j3r901h390r',
            events: [{
                    type: CG_1.CG.Canvas.Events.click,
                    handler: canvasClickHandler
                }, {
                    type: CG_1.CG.Canvas.Events.mousemove,
                    handler: function (coordinates, meta) {
                        canvas.draw(gameCursor.update({ x: coordinates.x, y: coordinates.y }));
                    }
                }]
        };
        function initNewScene(scene) {
            canvas.clearScene().draw(scene());
        }
        var canvas = CG_1.CG.Canvas.init(document, canvasOptions);
        canvas.draw(initMenuScreen());
        window.testCanvas = canvas;
    });
});
},{"../../src/CG":3,"./assets":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CG = void 0;
var Canvas_1 = require("./CG/canvas/Canvas");
var shapes_lib_1 = require("./CG/shapes.lib");
var canvas_interfaces_1 = require("./interface/canvas.interfaces");
var image_loader_1 = require("./CG/utils/image-loader");
function init(document, options) {
    return new Canvas_1.Canvas(document, options);
}
var CG = {
    Canvas: {
        init: init,
        Events: canvas_interfaces_1.CGCanvasListenEvents
    },
    Shapes: {
        Arc: shapes_lib_1.arc,
        Image: shapes_lib_1.image,
        Rect: shapes_lib_1.rect,
        SType: shapes_lib_1.SType
    },
    Utils: {
        ImageLoader: image_loader_1.ImageLoader
    }
};
exports.CG = CG;
},{"./CG/canvas/Canvas":4,"./CG/shapes.lib":7,"./CG/utils/image-loader":12,"./interface/canvas.interfaces":13}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var Locator_1 = require("./Locator");
var painter_1 = require("./painter");
var LOCATOR = Locator_1.default;
/**
 * CGLib canvas.
 */
var Canvas = /** @class */ (function () {
    function Canvas(document, options) {
        this.CanvasDOMElement = null;
        this.Painter = null;
        this.DOM = null;
        this.objects = {};
        this.DOM = document;
        if (options.selector) {
            this.CanvasDOMElement = this._initFromSelector(options.selector);
            this.Painter = new painter_1.default(this.getContext2D());
        }
        if (options.events) {
            this._subscribeOnClick(options.events[0].handler);
            this._subscribeOnMouseOver(options.events[1].handler);
        }
        this.startPainter();
    }
    /**
     * Init reference on existing canvas with custom selector.
     * @param selector - css selector for target canvas
     * @private
     */
    Canvas.prototype._initFromSelector = function (selector) {
        return this.DOM.querySelector(selector);
    };
    /**
     * Creates subscription on click event.
     * @param handler - custom callback function.
     * @private
     */
    Canvas.prototype._subscribeOnClick = function (handler) {
        var _this = this;
        this.CanvasDOMElement.addEventListener('click', function (event) {
            if (!LOCATOR.isCrossing(event, _this.CanvasDOMElement))
                return;
            var coordinates = LOCATOR.getCanvasCoordinates(event, _this.CanvasDOMElement);
            var crossedShapes = [];
            for (var _i = 0, _a = Object.keys(_this.objects); _i < _a.length; _i++) {
                var hash = _a[_i];
                var shape = _this.objects[hash];
                var size = shape.getShape();
                if ((size.x <= coordinates.x && size.x + size.width >= coordinates.x) &&
                    (size.y <= coordinates.y && size.y + size.height >= coordinates.y)) {
                    crossedShapes.push(shape);
                }
            }
            handler(coordinates, {
                event: event,
                target: _this.CanvasDOMElement,
                shapes: crossedShapes
            });
        });
    };
    /**
     * Creates subscription on click event.
     * @param handler - custom callback function.
     * @private
     */
    Canvas.prototype._subscribeOnMouseOver = function (handler) {
        var _this = this;
        this.CanvasDOMElement.addEventListener('mousemove', function (event) {
            if (!LOCATOR.isCrossing(event, _this.CanvasDOMElement))
                return;
            var coordinates = LOCATOR.getCanvasCoordinates(event, _this.CanvasDOMElement);
            var shapes = [];
            handler(coordinates, {
                event: event,
                target: _this.CanvasDOMElement,
                shapes: shapes
            });
        });
    };
    /**
     * Checks if class has reference on canvas element.
     * @private
     */
    Canvas.prototype._isExecutable = function () {
        return !!this.CanvasDOMElement;
    };
    /**
     * Get canvas 2DContext.
     * @private
     */
    Canvas.prototype.getContext2D = function () {
        return this.CanvasDOMElement.getContext('2d');
    };
    Canvas.prototype.startPainter = function () {
        this.getContext2D().clearRect(0, 0, this.CanvasDOMElement.width, this.CanvasDOMElement.height);
        for (var _i = 0, _a = Object.keys(this.objects); _i < _a.length; _i++) {
            var hash = _a[_i];
            this.Painter.drawShape(this.objects[hash]);
        }
        requestAnimationFrame(this.startPainter.bind(this));
    };
    Canvas.prototype.draw = function (shape) {
        if (Array.isArray(shape)) {
            for (var _i = 0, shape_1 = shape; _i < shape_1.length; _i++) {
                var obj = shape_1[_i];
                this.draw(obj);
            }
        }
        else {
            this.objects[shape.getHash()] = shape;
        }
    };
    Canvas.prototype.clearScene = function () {
        this.objects = {};
        return this;
    };
    Canvas.prototype.getObjects = function () {
        return this.objects;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
},{"./Locator":5,"./painter":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOMLocator = /** @class */ (function () {
    function DOMLocator() {
    }
    DOMLocator.isCrossing = function (event, element) {
        var rect = element.getBoundingClientRect();
        var canvasSize = {
            width: element.width,
            height: element.height
        };
        var scroll = this.getScrollPosition();
        return (Math.ceil(rect.y) + scroll.y <= event.pageY && event.pageY <= Math.ceil(rect.y) + scroll.y + canvasSize.height) &&
            (Math.ceil(rect.x) + scroll.x <= event.pageX && event.pageX <= Math.ceil(rect.x) + scroll.x + canvasSize.width);
    };
    DOMLocator.getCanvasCoordinates = function (event, canvas) {
        var scroll = this.getScrollPosition();
        return {
            x: event.pageX - Math.ceil(canvas.getBoundingClientRect().x) - scroll.x,
            y: event.pageY - Math.ceil(canvas.getBoundingClientRect().y) - scroll.y
        };
    };
    DOMLocator.getScrollPosition = function () {
        return {
            x: Math.ceil(window.scrollX),
            y: Math.ceil(window.scrollY)
        };
    };
    return DOMLocator;
}());
exports.default = DOMLocator;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shapes_lib_1 = require("../shapes.lib");
var CGPainter = /** @class */ (function () {
    function CGPainter(ctx) {
        this.context = ctx;
    }
    CGPainter.prototype.drawArc = function (arc) {
        var size = arc.getShape();
        this.context.beginPath();
        this.context.arc(size.x, size.y, size.radius, size.startAngle, size.endAngle);
        this.context.stroke();
    };
    CGPainter.prototype.drawRect = function (rect) {
        var size = rect.getShape();
        this.context.beginPath();
        this.context.rect(size.x, size.y, size.width, size.height);
        this.context.stroke();
    };
    CGPainter.prototype.drawImage = function (image) {
        var size = image.getShape();
        this.context.beginPath();
        this.context.drawImage(size.image, size.x, size.y, size.width, size.height);
        this.context.stroke();
    };
    CGPainter.prototype.drawShape = function (shape) {
        switch (shape.getType()) {
            case shapes_lib_1.SType.arc:
                this.drawArc(shape);
                return;
            case shapes_lib_1.SType.rect:
                this.drawRect(shape);
                return;
            case shapes_lib_1.SType.image:
                this.drawImage(shape);
                return;
        }
    };
    return CGPainter;
}());
exports.default = CGPainter;
},{"../shapes.lib":7}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rect = exports.image = exports.arc = exports.SType = exports.Rect = exports.Image = exports.Arc = exports.Shape = void 0;
var shape_1 = require("./shapes/shape");
Object.defineProperty(exports, "Shape", { enumerable: true, get: function () { return shape_1.CGShape; } });
Object.defineProperty(exports, "SType", { enumerable: true, get: function () { return shape_1.ShapeType; } });
var arc_1 = require("./shapes/arc");
Object.defineProperty(exports, "Arc", { enumerable: true, get: function () { return arc_1.CGArc; } });
var image_1 = require("./shapes/image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return image_1.CGImage; } });
var rectangle_1 = require("./shapes/rectangle");
Object.defineProperty(exports, "Rect", { enumerable: true, get: function () { return rectangle_1.CGRect; } });
function arc(options) {
    return new arc_1.CGArc(options);
}
exports.arc = arc;
function image(options) {
    return new image_1.CGImage(options);
}
exports.image = image;
function rect(options) {
    return new rectangle_1.CGRect(options);
}
exports.rect = rect;
},{"./shapes/arc":8,"./shapes/image":9,"./shapes/rectangle":10,"./shapes/shape":11}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGArc = void 0;
var shape_1 = require("./shape");
var CGArc = /** @class */ (function (_super) {
    __extends(CGArc, _super);
    function CGArc(shape) {
        var _this = _super.call(this, {
            x: shape.x,
            y: shape.y
        }, shape.hash) || this;
        _this.type = shape_1.ShapeType.arc;
        _this.shape = shape;
        return _this;
    }
    CGArc.prototype.getShape = function () {
        return this.shape;
    };
    return CGArc;
}(shape_1.CGShape));
exports.CGArc = CGArc;
},{"./shape":11}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGImage = void 0;
var rectangle_1 = require("./rectangle");
var shape_1 = require("./shape");
var CGImage = /** @class */ (function (_super) {
    __extends(CGImage, _super);
    function CGImage(imageOptions) {
        var _this = _super.call(this, imageOptions) || this;
        _this.type = shape_1.ShapeType.image;
        _this.image = imageOptions;
        return _this;
    }
    CGImage.prototype.getShape = function () {
        return this.image;
    };
    CGImage.prototype.update = function (newSize) {
        this.image = Object.assign(this.image, newSize);
        return this;
    };
    return CGImage;
}(rectangle_1.CGRect));
exports.CGImage = CGImage;
},{"./rectangle":10,"./shape":11}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGRect = void 0;
var shape_1 = require("./shape");
// interface ICGRectShape {
//     height: RectHeight;
//     width: RectWidth;
//     radius: RectRadius;
// }
// type RectHeight = number;
// type RectWidth = number;
// type RectRadius = number;
var CGRect = /** @class */ (function (_super) {
    __extends(CGRect, _super);
    function CGRect(rectOptions) {
        var _this = _super.call(this, {
            x: rectOptions.x,
            y: rectOptions.y
        }, rectOptions.hash) || this;
        _this.type = shape_1.ShapeType.rect;
        _this.shape = rectOptions;
        return _this;
    }
    CGRect.prototype.getShape = function () {
        return this.shape;
    };
    return CGRect;
}(shape_1.CGShape));
exports.CGRect = CGRect;
},{"./shape":11}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeType = exports.CGShape = void 0;
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["arc"] = 0] = "arc";
    ShapeType[ShapeType["rect"] = 1] = "rect";
    ShapeType[ShapeType["image"] = 2] = "image";
})(ShapeType || (ShapeType = {}));
exports.ShapeType = ShapeType;
var CGShape = /** @class */ (function () {
    function CGShape(coords, hash) {
        if (hash === void 0) { hash = 0; }
        this.hash = Math.floor(Math.random() * (3000 - 100 + 1) + 100);
        this.coordinates = coords;
        if (hash && hash > 0) {
            this.hash = hash;
        }
    }
    CGShape.prototype.getHash = function () {
        return this.hash;
    };
    CGShape.prototype.getType = function () {
        return this.type;
    };
    CGShape.prototype.getCoordinates = function () {
        return this.coordinates;
    };
    CGShape.prototype.getShape = function () {
        return;
    };
    CGShape.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CGShape.prototype.getName = function () {
        return this.name;
    };
    return CGShape;
}());
exports.CGShape = CGShape;
},{}],12:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageLoader = void 0;
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    ImageLoader.prepareAssets = function (assets) {
        return assets.map(function (asset) {
            var prom = new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    resolve({
                        id: asset.id,
                        name: asset.name,
                        img: img
                    });
                };
                img.src = asset.url;
            });
            return prom;
        });
    };
    ImageLoader.loadAssets = function (assets) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseArray, loadedAssests;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseArray = ImageLoader.prepareAssets(assets);
                        return [4 /*yield*/, Promise.all(promiseArray)];
                    case 1:
                        loadedAssests = _a.sent();
                        return [2 /*return*/, ImageLoader.formatLoadedAssests(loadedAssests)];
                }
            });
        });
    };
    ImageLoader.formatLoadedAssests = function (loadAssets) {
        var result = {};
        for (var _i = 0, loadAssets_1 = loadAssets; _i < loadAssets_1.length; _i++) {
            var asset = loadAssets_1[_i];
            result[asset.id] = {
                name: asset.name,
                image: asset.img,
                widthToHeight: asset.img.width / asset.img.height
            };
        }
        return result;
    };
    return ImageLoader;
}());
exports.ImageLoader = ImageLoader;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGCanvasListenEvents = void 0;
/**
 * Available canvas event listeners.
 */
var CGCanvasListenEvents;
(function (CGCanvasListenEvents) {
    /**
     * Canvas clicked.
     */
    CGCanvasListenEvents["click"] = "click";
    CGCanvasListenEvents["mousemove"] = "mousemove";
})(CGCanvasListenEvents || (CGCanvasListenEvents = {}));
exports.CGCanvasListenEvents = CGCanvasListenEvents;
},{}]},{},[2])