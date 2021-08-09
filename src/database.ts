import {Cities, City} from './types';

const cities:Cities = require('../data/citymap.json');


export function getResults(name:string):City[] {
    

    const _results = cities.cities.filter(__c => __c.city.toLowerCase() === name.toLowerCase());

    if(!_results || !_results.length ){
        throw new Error('no city found in db, try a more populated city nearby');
    }

    return _results;

 
    
}

export function getIanaCode(name:string, country:string):City {

    const _result = cities.cities.find(__c =>  __c.city.toLowerCase() === name.toLowerCase() && __c.country.toLowerCase() === country.toLowerCase());      


    if(!_result){
        throw new Error(`No iana code found for ${name}, ${country}`);
    }

    return _result;

}

export function getIanaCodeByIso(name:string, iso_code:string):City {

    const _result = cities.cities.find(__c =>  __c.city.toLowerCase() === name.toLowerCase() && __c.iso2 === iso_code);      


    if(!_result){
        throw new Error(`No iana code found for ${name}, ${iso_code}`);
    }

    return _result;

}