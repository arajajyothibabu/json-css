/**
 * Created by jyothi on 30/5/17.
 */
let chai = require('chai'), path = require('path');

chai.should();

let JsonCSS = require(path.join(__dirname, '../lib', 'jsoncss.min'));

const json = {
    h1: {
        color: '#F1F1F1',
        background: 'black'
    }
};

const css = `
    h1 {
        color: '#F1F1F1';
        background: 'black';
    }
`;

describe('CSStoJSON', () => {
    let jsonCSS = new JsonCSS();

    describe('toJSON', () => {

        /*beforeEach(() => {

         });*/

        it('returns the JSON', () => {
            jsonCSS.toJSON(css).h1.color.should.equal(`'${json.h1.color}'`);
        });

        /*it('only accepts numerical values', () => {

        });*/
    });

    describe('toCSS', () => {

        it('returns the CSS', () => {
            jsonCSS.toCSS(json).length.should.equal(42);
        });

    });

});