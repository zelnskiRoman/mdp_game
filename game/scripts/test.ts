import {CG} from '../../src/CG';
import {ICanvasOptions} from '../../src/interface/canvas.interfaces';

import {assets} from './assets';

window.addEventListener('DOMContentLoaded', () => {

    CG.Utils.ImageLoader.loadAssets(assets).then(assets => {

        var currentChar = true;

        function canvasClickHandler(coords, meta): void {
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
            for (const shape of meta.shapes) {
                if (shape.getName() == 'startBtn') {
                    shape.update({x: shape.getShape().x, y: shape.getShape().y - 10});
                }

                if (shape.getName() == 'arrowRight' || shape.getName() == 'arrowLeft') {
                    const char = canvas.getObjects();
                    (char[100] as any).update((currentChar ? {image: assets.char2.image} : {image: assets.char1.image}));
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
                    shape.update({x: 100, y: 375});
                    const objs = canvas.getObjects();
                    (objs[30] as any).update({x: 740});
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
            return [CG.Shapes.Image({
                hash: 1,
                image: assets.back.image,
                x: 0,
                y: 0,
                radius: 20,
                height: 500,
                width: 800
            }), CG.Shapes.Image({
                image: assets.sign.image,
                x: 30,
                y: 50,
                radius: 20,
                height: 400,
                width: 420 * assets.sign.widthToHeight
            }), CG.Shapes.Image({
                    image: assets.continuePack.image,
                    x: 240,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.continuePack.widthToHeight
            }), CG.Shapes.Image({
                image: assets.rulesPack.image,
                    x: 400,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.rulesPack.widthToHeight
            }), CG.Shapes.Image({
                    image: assets.startPack.image,
                    x: 550,
                    y: 220,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.startPack.widthToHeight
            }).setName('startBtn'), CG.Shapes.Image({
                    image: assets.exitBtn.image,
                    x: 600,
                    y: 20,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.exitBtn.widthToHeight
            }).setName('exitBtn'), CG.Shapes.Image({
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
                CG.Shapes.Image({
                    hash: 12,
                    image: assets.back.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG.Shapes.Image({
                    image: assets.menu.image,
                    x: 10,
                    y: 10,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.menu.widthToHeight
                }).setName('menuButton'),
                CG.Shapes.Image({
                    image: assets.borderTop.image,
                    x: 200,
                    y: 5,
                    radius: 20,
                    height: 185,
                    width: 185 * assets.borderTop.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.borderBottom.image,
                    x: 10,
                    y: 390,
                    radius: 20,
                    height: 100,
                    width: 100 * assets.borderBottom.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.table.image,
                    x: 40,
                    y: 80,
                    radius: 20,
                    height: 370,
                    width: 370 * assets.table.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.done.image,
                    x: 740,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.done.widthToHeight
                }).setName('doneButton'),
                CG.Shapes.Image({
                    hash: 100,
                    image: assets.char1.image,
                    x: 570,
                    y: 100,
                    radius: 20,
                    height: 350,
                    width: 350 * assets.char1.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.rightArrow.image,
                    x: 710,
                    y: 210,
                    radius: 20,
                    height: 60,
                    width: 60 * assets.rightArrow.widthToHeight
                }).setName('arrowRight'),
                CG.Shapes.Image({
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
                CG.Shapes.Image({
                    hash: 12,
                    image: assets.back.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG.Shapes.Image({
                    image: assets.rules.image,
                    x: 20,
                    y: 20,
                    radius: 20,
                    height: 400,
                    width: 400 * assets.rules.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.lvl1.image,
                    x: 400,
                    y: 250,
                    radius: 20,
                    height: 250,
                    width: 250 * assets.lvl1.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.menu.image,
                    x: 30,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.menu.widthToHeight
                }).setName('menuButton'),
                CG.Shapes.Image({
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
                CG.Shapes.Image({
                    hash: 12,
                    image: assets.levelBack.image,
                    x: 0,
                    y: 0,
                    radius: 20,
                    height: 500,
                    width: 800
                }),
                CG.Shapes.Image({
                    image: assets.levelMenu.image,
                    x: 20,
                    y: 0,
                    radius: 20,
                    height: 65,
                    width: 65 * assets.levelMenu.widthToHeight
                }),
                CG.Shapes.Image({
                    image: assets.levelHint.image,
                    x: 610,
                    y: 10,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelHint.widthToHeight
                }),
                CG.Shapes.Image({
                    hash: 13,
                    image: assets.levelTargets.image,
                    x: 400 - 150,
                    y: 420,
                    radius: 20,
                    height: 90,
                    width: 300
                }),
                CG.Shapes.Image({
                    hash: 20,
                    image: assets.levelCart.image,
                    x: 35,
                    y: 325,
                    radius: 20,
                    height: 150,
                    width: 150 * assets.levelCart.widthToHeight
                }),
                CG.Shapes.Image({
                    hash: 15,
                    image: assets.levelShelf.image,
                    x: 400 - 150,
                    y: 100,
                    radius: 20,
                    height: 300,
                    width: 300
                }),
                CG.Shapes.Image({
                    hash: 14,
                    image: assets.levelTest.image,
                    x: 400 - 50 * assets.levelTest.widthToHeight / 2,
                    y: 440,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelTest.widthToHeight
                }),
                CG.Shapes.Image({
                    hash: 16,
                    image: assets.levelTest.image,
                    x: 350 - 50 * assets.levelTest.widthToHeight / 2,
                    y: 260,
                    radius: 20,
                    height: 50,
                    width: 50 * assets.levelTest.widthToHeight
                }).setName('levelTest'),
                CG.Shapes.Image({
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
    
        const gameCursor = CG.Shapes.Image({
            image: assets.arrow.image,
            x: 0,
            y: 0,
            height: 40,
            width: 40 * assets.arrow.widthToHeight,
            radius: 20,
            hash: 999999
        });

        const canvasOptions: ICanvasOptions = {
            selector: '#j3r901h390r',
            events: [{
                type: CG.Canvas.Events.click,
                handler: canvasClickHandler
            }, {
                type: CG.Canvas.Events.mousemove,
                handler: (coordinates, meta) => {
                    canvas.draw(gameCursor.update({x: coordinates.x, y: coordinates.y}));
                }
            }]
        };

        function initNewScene(scene) {
            canvas.clearScene().draw(scene());
        }
    
        const canvas = CG.Canvas.init(document, canvasOptions);
        canvas.draw(initMenuScreen());

        (window as any).testCanvas = canvas;
    });
});