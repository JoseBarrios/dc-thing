'use strict'

const assert = require('assert');
const colors = require('colors');
const lodash = require('lodash');
const EMPTY = '';
const TYPE = 'Thing';
let muteErrors = false;

class Thing {

  /////////////////////
  //
  // Static Methods
  //
  /////////////////////
  static isNumber(value){ return lodash.isNumber(value); }
  static isString(value){ return lodash.isString(value); }
  static isBoolean(value){ return lodash.isBoolean(value); }
  static isArray(value){ return lodash.isArray(value); }
  static isObject(value){ return lodash.isObject(value); }
  static isPlainObject(value){ return lodash.isPlainObject(value); }
  static isNull(value){ return lodash.isNull(value); }
  static isUndefined(value){ return lodash.isUndefined(value); }
  static isEmpty(value){
    let isEmpty = false;
    if(Thing.isArray(value) || Thing.isObject(value)){ isEmpty = lodash.isEmpty(value); }
    if(value === ''){ isEmpty = true; }
    if(value === undefined){ isEmpty = true; }
    if(value === null){ isEmpty = true; }
    return isEmpty;
  }
  static model(thing){ return thing.computed; }

  static keys(thing){
    let propertyNames = [];
    lodash.forIn(thing.computed, (value, key) => {
        propertyNames.push(key);
    })
    return propertyNames;
  }

  static values(thing){
    let propertyValues = [];
    lodash.forIn(thing.computed, value => {
        propertyValues.push(value);
    })
    return propertyValues;
  }

  static unsetProperties(thing, format='array'){
    format = format.toLowerCase();
    var unsetProperties = null;

    switch(format){

      case 'array':
        unsetProperties = [];
        lodash.forIn(thing.computed, (value, key) => {
          if(Thing.isEmpty(value)){
            unsetProperties.push(key);
          }
        })
        break;

      case 'object':
        unsetProperties = {};
        lodash.forIn(thing.computed, (value, key) => {
          if(Thing.isEmpty(value)){
            unsetProperties[key] = value;
          }
        })
        break;

      default:
        console.log('unsetProperties format not supported')
    }

    return unsetProperties;
  }

  static assignedProperties(thing, format='object'){
    format = format.toLowerCase();
    var assignedProperties = null;

    switch(format){

      case 'array':
        assignedProperties = [];
        lodash.forIn(thing.computed, (value, key) => {
          if(!Thing.isEmpty(value)){
            assignedProperties.push(key);
          }
        })
        break;

      case 'object':
        assignedProperties = {};
        lodash.forIn(thing.computed, (value, key) => {
          if(!Thing.isEmpty(value)){
            assignedProperties[key] = value;
          }
        })
        break;

      default:
        console.log('assignedProperties format not supported')
    }

    return assignedProperties;
  }


  static isValidJSONInput(value){
    return Thing.isNumber(value)  ||
      Thing.isString(value)       ||
      Thing.isBoolean(value)      ||
      Thing.isArray(value)        ||
      Thing.isObject(value)       ||
      Thing.isNull(value);
  }

  static isURL(value){
    let isString = Thing.isString(value);
    let URL = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    return  isString && URL.test(value);
  }

  static logError(error, type){
    if(muteErrors && type !== 'fatal') return;
    type = type || 'default';
    type = type.toLowerCase();
    switch(type){
      case 'type':
        console.error(new TypeError(error.red));
        break;
      case 'fatal':
        throw new TypeError(error.red.inverse);
        break;
      default:
        console.error(new Error(error.red));
    }
  }

  static isInstance(object){ return object.type === Thing.type; }
  static get type(){ return TYPE; }
  static get utils(){
    return lodash;
  }


  constructor(model){
    model = model || {};
    //Initialize computed props
    this.computed = {};
    //Assign properties
    this.additionalType = model.additionalType;
    this.alternateName = model.alternateName;
    this.description = model.description;
    this.disambiguatingDescription = model.disambiguatingDescription;
    this.identifier = model.identifier;
    this.image = model.image;
    this.mainEntityOfPage = model.mainEntityOfPage;
    this.name = model.name;
    this.potentialAction = model.potentialAction;
    this.sameAs = model.sameAs;
    this.url = model.url;
  }

  get type() { return this.constructor.name }
  set type(value) {}

  get model(){
    return this.computed;
  }
  set mode(value){}

  get additionalType(){ return this.computed.additionalType; }
  set additionalType(value){
    if(Thing.isEmpty(value)){ this.computed.additionalType = ''}
    else if(Thing.isString(value)){ this.computed.additionalType = value}
    else if(Thing.isObject(value)){ this.computed.additionalType = value}
    else if(Thing.isArray(value)){ this.computed.additionalType = value}
    else{ Thing.logError(this.type+' additionalType must be string, object or array'); }
  }

  get alternateName(){ return this.computed.alternateName; }
  set alternateName(value){
  if(Thing.isEmpty(value)){ this.computed.alternateName = ''}
    else if(Thing.isString(value)){ this.computed.alternateName = value}
    else{ Thing.logError(this.type+' alternateName must be string'); }

  }

  get description(){ return this.computed.description; }
  set description(value){
  if(Thing.isEmpty(value)){ this.computed.description = ''}
    else if(Thing.isString(value)){ this.computed.description = value}
    else{ Thing.logError(this.type+' description must be string'); }

  }

  get disambiguatingDescription(){ return this.computed.disambiguatingDescription; }
  set disambiguatingDescription(value){
  if(Thing.isEmpty(value)){ this.computed.disambiguatingDescription = ''}
    else if(Thing.isString(value)){ this.computed.disambiguatingDescription = value}
    else{ Thing.logError(this.type+' disambiguatingDescription must be string'); }

  }

  get identifier(){ return this.computed.identifier; }
  set identifier(value){
  if(Thing.isEmpty(value)){ this.computed.identifier = ''}
    else if(Thing.isString(value)){ this.computed.identifier = value}
    else if(Thing.isObject(value)){ this.computed.identifier = value}
    else if(Thing.isNumber(value)){ this.computed.identifier = value}
    else{ Thing.logError(this.type+' identifier must be string, number or object'); }

  }

  get image(){ return this.computed.image; }
  set image(value){
  if(Thing.isEmpty(value)){ this.computed.image = ''}
    else if(Thing.isString(value)){ this.computed.image = value}
    else if(Thing.isObject(value)){ this.computed.image = value}
    else{ Thing.logError(this.type+' image must be string, or object'); }

  }

  //TODO
  get mainEntityOfPage(){ return this.computed.mainEntityOfPage; }
  set mainEntityOfPage(value){
  if(Thing.isEmpty(value)){ this.computed.mainEntityOfPage = ''}
    else if(Thing.isString(value)){ this.computed.mainEntityOfPage = value}
    else if(Thing.isObject(value)){ this.computed.mainEntityOfPage = value}
    else{ Thing.logError(this.type+' mainEntityOfPage must be string, or object'); }

  }

  get name(){ return this.computed.name; }
  set name(value){
  if(Thing.isEmpty(value)){ this.computed.name = ''}
    else if(Thing.isString(value)){ this.computed.name = value}
    else{ Thing.logError(this.type+' name must be string'); }
  }

  //TODO
  get potentialAction(){ return this.computed.potentialAction; }
  set potentialAction(value){
  if(Thing.isEmpty(value)){ this.computed.potentialAction = ''}
    else if(Thing.isString(value)){ this.computed.potentialAction = value}
    else if(Thing.isObject(value)){ this.computed.potentialAction = value}
    else{ Thing.logError(this.type+' potentialAction must be string or object'); }

  }

  get sameAs(){ return this.computed.sameAs; }
  set sameAs(value){
  if(Thing.isEmpty(value)){ this.computed.sameAs = ''}
    else if(Thing.isString(value)){ this.computed.sameAs = value}
    else if(Thing.isURL(value)){ this.computed.sameAs = value}
    else{ Thing.logError(this.type+' sameAs must be string'); }

  }

  get url(){ return this.computed.url; }
  set url(value){
    if(Thing.isEmpty(value)){ this.computed.url = ''}
    else if(Thing.isURL(value)){ this.computed.url = value}
    else{ Thing.logError(this.type+' url must be string'); }
  }

  ///////////////////////////////////
  //
  //
  //
  ///////////////////////////////////
  get muteErrors() { return muteErrors };
  set muteErrors(value) {
    if(Thing.isBoolean(value)){
      muteErrors = value;
    }
  }


}

module.exports = Thing;
