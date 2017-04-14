/**
 * Created by jyothi on 15/4/17.
 */
(function () {
    var StylesConverter = window.CSSToJSON || {};
    StylesConverter = function (input) {

    };

    /**
     * return JSON output for CSS string
     * @param text {String}
     * @returns {Object}
     */
    StylesConverter.prototype.toJSON = function (text) {
        if(typeof text !== 'string'){
            new Error("Need a CSS string but given ", typeof text);
            return {};
        }
        var output = {}, lastKey, term;
        text.split("{").map(function(item){
            term = item.trim();
            if(term.indexOf("}") === -1){
                output[term] = {}; //it's a selector
                lastKey = term;
            }else{ //contains styles and next selector
                var styles = term.substring(0, term.indexOf("}")).split(":");
                for(var i = 0; i < styles.length; i+=2){
                    output[lastKey][styles[i].trim()] = this.trimSemiColon(styles[i+1].trim()); //for new style
                }
                try { //may be End of Styles
                    lastKey = term.split("}")[1].trim();
                    output[lastKey] = {}; //for new selector
                }catch(e){
                    //no more selectors for our life
                }
            }
        });
        return output;
    };

    
    StylesConverter.prototype.trimSemiColon = function (text) {
        return text.slice(-1) === ';' ? text.slice(0, this.length - 1) : text;
    }
})();