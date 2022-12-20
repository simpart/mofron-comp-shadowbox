/**
 * @file mofron-comp-shadowbox/index.js
 * @brief shadow box component for mofron
 * @license MIT
 */
const SelectBox = require('mofron-comp-selectbox');
const HovShadow = require('mofron-effect-hovshadow');
const Dent      = require('mofron-effect-dent');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends SelectBox {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("shadowbox");
            
	    /* init config */
	    this.shortForm('value');
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            this.effect([
                new HovShadow(),
                new Dent({ direct: new ConfArg(true,true) })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try {
            return this.effect({ modname: 'hovshadow' }).value(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    dent (prm) {
        try {
	    let susp = prm;
	    if ('boolean' === typeof prm) {
                susp = !susp;
	    }
            return this.effect({ modname: 'dent' }).suspend(susp);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
