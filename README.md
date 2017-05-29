# css-to-json | json-to-css

##### Utility to convert Cascading Style Sheets (CSS) to JSON objects and vice versa.

### [TRY HERE](https://arajajyothibabu.github.io/css-to-json/)

- Yet to support media queries

#### Import:

- Installing with NPM

        npm install css-to-json --save
        
- Import in es6

        import CSStoJSON from 'css-to-json';
        
- Import through `require` in es5

        var CSStoJSON = require('css-to-json');
        
#### Usage

- to JSON with CSS as input type `string`

        CSStoJSON.toJSON(`
            h1 {
                color: #F1F1F1;
            }
        `);
        
- to CSS with JSON as input type `object`

        CSStoJSON.toCSS({
            h1: {
                color: "#F1F1F1"
            }
        });
 