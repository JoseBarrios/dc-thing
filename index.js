'use strict'

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

  static model(thing){ return thing.model; }

  static keys(thing){
    let propertyNames = [];
    lodash.forIn(thing.model, (value, key) => {
        propertyNames.push(key);
    })
    return propertyNames;
  }

  static values(thing){
    let propertyValues = [];
    lodash.forIn(thing.model, value => {
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
        lodash.forIn(thing.model, (value, key) => {
          if(Thing.isEmpty(value)){
            unsetProperties.push(key);
          }
        })
        break;

      case 'object':
        unsetProperties = {};
        lodash.forIn(thing.model, (value, key) => {
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
        lodash.forIn(thing.model, (value, key) => {
          if(!Thing.isEmpty(value)){
            assignedProperties.push(key);
          }
        })
        break;

      case 'object':
        assignedProperties = {};
        lodash.forIn(thing.model, (value, key) => {
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
    //Initialize model props
    this.model = {};
    //Assign properties
    this.additionalType = model.additionalType;
    this.alternateName = model.alternateName;
    this.description = model.description;
    this.disambiguatingDescription = model.disambiguatingDescription;
    this.identifier = model.identifier || model._id;
    this.image = model.image;
    this.mainEntityOfPage = model.mainEntityOfPage;
    this.name = model.name;
    this.potentialAction = model.potentialAction;
    this.sameAs = model.sameAs;
    this.url = model.url;
    this.type = this.constructor.name;
  }

  //IMMUTABLE
  get type() { return this.constructor.name }
  set type(value) { this.model.type = this.constructor.name}

  get additionalType(){ return this.model.additionalType; }
  set additionalType(value){
    if(Thing.isEmpty(value)){ this.model.additionalType = ''}
    else if(Thing.isString(value)){ this.model.additionalType = value}
    else if(Thing.isObject(value)){ this.model.additionalType = value}
    else if(Thing.isArray(value)){ this.model.additionalType = value}
    else{ Thing.logError(this.type+' additionalType must be string, object or array'); }
  }

  get alternateName(){ return this.model.alternateName; }
  set alternateName(value){
  if(Thing.isEmpty(value)){ this.model.alternateName = ''}
    else if(Thing.isString(value)){ this.model.alternateName = value}
    else{ Thing.logError(this.type+' alternateName must be string'); }

  }

  get description(){ return this.model.description; }
  set description(value){
  if(Thing.isEmpty(value)){ this.model.description = ''}
    else if(Thing.isString(value)){ this.model.description = value}
    else{ Thing.logError(this.type+' description must be string'); }

  }

  get disambiguatingDescription(){ return this.model.disambiguatingDescription; }
  set disambiguatingDescription(value){
  if(Thing.isEmpty(value)){ this.model.disambiguatingDescription = ''}
    else if(Thing.isString(value)){ this.model.disambiguatingDescription = value}
    else{ Thing.logError(this.type+' disambiguatingDescription must be string'); }

  }

  get identifier(){ return this.model.identifier; }
  set identifier(value){
  if(Thing.isEmpty(value)){ this.model.identifier = ''}
    else if(Thing.isString(value)){ this.model.identifier = value}
    else if(Thing.isObject(value)){ this.model.identifier = value}
    else if(Thing.isNumber(value)){ this.model.identifier = value}
    else{ Thing.logError(this.type+' identifier must be string, number or object'); }

  }

  get image(){ return this.model.image; }
  set image(value){
  if(Thing.isEmpty(value)){ this.model.image = ''}
    else if(Thing.isString(value)){ this.model.image = value}
    else if(Thing.isObject(value)){ this.model.image = value}
    else{ Thing.logError(this.type+' image must be string, or object'); }

  }

  //TODO
  get mainEntityOfPage(){ return this.model.mainEntityOfPage; }
  set mainEntityOfPage(value){
  if(Thing.isEmpty(value)){ this.model.mainEntityOfPage = ''}
    else if(Thing.isString(value)){ this.model.mainEntityOfPage = value}
    else if(Thing.isObject(value)){ this.model.mainEntityOfPage = value}
    else{ Thing.logError(this.type+' mainEntityOfPage must be string, or object'); }

  }

  get name(){ return this.model.name; }
  set name(value){
  if(Thing.isEmpty(value)){ this.model.name = ''}
    else if(Thing.isString(value)){ this.model.name = value}
    else{ Thing.logError(this.type+' name must be string'); }
  }

  //TODO
  get potentialAction(){ return this.model.potentialAction; }
  set potentialAction(value){
  if(Thing.isEmpty(value)){ this.model.potentialAction = ''}
    else if(Thing.isString(value)){ this.model.potentialAction = value}
    else if(Thing.isObject(value)){ this.model.potentialAction = value}
    else{ Thing.logError(this.type+' potentialAction must be string or object'); }

  }

  get sameAs(){ return this.model.sameAs; }
  set sameAs(value){
  if(Thing.isEmpty(value)){ this.model.sameAs = ''}
    else if(Thing.isString(value)){ this.model.sameAs = value}
    else if(Thing.isURL(value)){ this.model.sameAs = value}
    else{ Thing.logError(this.type+' sameAs must be string'); }

  }

  get url(){ return this.model.url; }
  set url(value){
    if(Thing.isEmpty(value)){ this.model.url = ''}
    else if(Thing.isURL(value)){ this.model.url = value}
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

  isValidKey(propertyKeyName){
    let keys = Thing.keys(this);
    return keys.includes(propertyKeyName)
  }

}

module.exports = Thing;
