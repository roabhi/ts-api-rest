import {Cities, City} from './types';

const cities:Cities = require('../data/citymap.json');


export function getResults(name:string):City[] {
    

    const _results = cities.cities.filter(__c => __c.city === name);

    if(!_results || !_results.length ){
        throw new Error('no match')
    }

    return _results;

 
    
}