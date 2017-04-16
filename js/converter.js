/**
 * Created by jyothi on 15/4/17.
 */
var StylesConverter = window.StylesConverter || {};

StylesConverter = function (input) {
    //some bootstrap id needed
};

/**
 * return JSON output for CSS string
 * @param text {String}
 * @returns {Object}
 */
StylesConverter.prototype.toJSON = function (text) {
    if(typeof text !== 'string'){
        console.error("Need a CSS string but given ", typeof text, text);
        return "Not a valid CSS..!";
    }
    var output = {}, lastKey, term, style, _this = this;
    try {
        text.split("{").every(function (item) {
            term = item.trim();
            if (term) {
                if (term.indexOf("}") === -1) {
                    output[term] = {}; //it's a selector
                    lastKey = term;
                } else { //contains styles and next selector
                    term.substring(0, term.indexOf("}")).split(";").forEach(function (keyValue) {
                        style = keyValue.split(":");
                        if (style && style.length === 2) {
                            output[lastKey][style[0].trim().replace(/^\"|\"$/g, '')] = _this.trimSemiColon(style[1].trim().replace(/^\"|\"$/g, '')); //for new style
                        }
                    });
                    try { //may be End of Styles
                        lastKey = term.split("}")[1].trim();
                        if (lastKey) {
                            output[lastKey] = {}; //for new selector
                        }
                    } catch (e) {
                        //no more selectors for our life
                    }
                }
            }
        });
    }catch(e){
        return "Not a valid CSS..!";
    }
    return output;
};

/**
 *
 * @param json {Object}
 * @returns {string}
 */
StylesConverter.prototype.toCSS = function (json) {
    if(typeof json !== 'object'){
        console.error("Need a JSON object but given ", typeof json, json);
        return "Not a valid JSON..!";
    }
    var output = "";
    try {
        for (var selector in json) {
            if (json.hasOwnProperty(selector)) {
                output += selector + ' {\n';
                for (var style in json[selector]) {
                    if (json[selector].hasOwnProperty(style)) {
                        output += style + ': ' + json[selector][style] + ';\n';
                    }
                }
                output += '}\n';
            }
        }
    }catch(e){
        return "Not a valid JSON..!";
    }
    return output;
};

StylesConverter.prototype.trimSemiColon = function (text) {
    return text.slice(-1) === ';' ? text.slice(0, this.length - 1) : text;
};