/**
 * Created by jyothi on 30/5/17.
 */
let chai = require('chai'), path = require('path');

chai.should();

let CSStoJSON = require(path.join(__dirname, '../lib', 'csstojson.min'));

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
    let csstoJSON = new CSStoJSON();

    describe('toJSON', () => {

        /*beforeEach(() => {

         });*/

        it('returns the JSON', () => {
            csstoJSON.toJSON(css).h1.color.should.equal(`'${json.h1.color}'`);
        });

        /*it('only accepts numerical values', () => {

        });*/
    });

    describe('toCSS', () => {

        it('returns the CSS', () => {
            csstoJSON.toCSS(json).length.should.equal(42);
        });

    });

});