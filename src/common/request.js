import { ajax } from 'rxjs/ajax';

const XHR2 = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : require('xhr2');

export default options =>  ajax({ createXHR: () => new XHR2(), ...options });


/**
 * @example
 
    request({ url: 'https://api.ipify.org/?format=json' })

 */