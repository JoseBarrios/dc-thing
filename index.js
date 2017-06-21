'use strict'

const assert = require('assert');
const colors = require('colors');
const _ = require('lodash');
const EMPTY = '';

class Thing {

  /////////////////////
  //
  // Static Methods
  //
  /////////////////////
  static isNumber(value){ return _.isNumber(value); }
  static isString(value){ return _.isString(value); }
  static isBoolean(value){ return _.isBoolean(value); }
  static isArray(value){ return _.isArray(value); }
  static isObject(value){ return _.isPlainObject(value); }
  static isNull(value){ return _.isNull(value); }
  static isUndefined(value){ return _.isUndefined(value); }
  static model(thing){ return thing.computed; }

  static keys(thing){
    let propertyNames = [];
    _.forIn(thing.computed, (value, key) => {
        propertyNames.push(key);
    })
    return propertyNames;
  }

  static values(thing){
    let propertyValues = [];
    _.forIn(thing.computed, value => {
        propertyValues.push(value);
    })
    return propertyValues;
  }

  static unsetProperties(thing){
    let unsetProperties = {};
    _.forIn(thing.computed, (value, key) => {
      if(Thing.isEmpty(value)){
        unsetProperties[key] = value;
      }
    })
    return unsetProperties;
  }

  static isValidJSONInput(value){
    return Thing.isNumber(value)  ||
      Thing.isString(value)       ||
      Thing.isBoolean(value)      ||
      Thing.isArray(value)        ||
      Thing.isObject(value)       ||
      Thing.isNull(value);
  }

  static isEmpty(value){
    return Thing.isUndefined(value) || Thing.isNull(value) || value === '';
  }

  static isURL(value){
    let isString = Thing.isString(value);
    let URL = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    return  isString && URL.test(value);
  }

  static logError(error, type){
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

    this.lodash = _;
  }

  get type() { return this.constructor.name }
  set type() {}

  get additionalType(){ return this.computed.additionalType; }
  set additionalType(value){
    try {
      if(Thing.isURL(value)){ this.computed.additionalType = value; }
    } catch(error){ Thing.logError(`${this.constructor.name}: xxx must be string`); }
  }

  get alternateName(){ return this.computed.alternateName; }
  set alternateName(value){
    try {
      this.computed.alternateName = value;
    } catch(error){ Thing.logError(`${this.constructor.name}: xxx must be string`); }
  }

  get description(){ return this.computed.description; }
  set description(value){
    try {
      this.computed.description = value;
    } catch(error){ Thing.logError(`${this.constructor.name}: xxx must be string`); }
  }

  get disambiguatingDescription(){ return this.computed.disambiguatingDescription; }
  set disambiguatingDescription(value){
    try {
      this.computed.disambiguatingDescription = value;
    } catch(error){ Thing.logError(`${this.constructor.name}: xxx must be string`); }
  }

  get identifier(){ return this.computed.identifier; }
  set identifier(value){
    try {
      this.computed.identifier = value;
    } catch(error){ Thing.logError(`${this.constructor.name}: xxx must be string`); }
  }

  get image(){ return this.computed.image; }
  set image(value){
    if(Thing.isURL(value)){ this.computed.image = value; }
    else { Thing.logError(`${this.constructor.name}: image must be url`, 'type'); }
  }

  //TODO
  get mainEntityOfPage(){ return this.computed.mainEntityOfPage; }
  set mainEntityOfPage(value){
    try {
      this.computed.mainEntityOfPage = value;
    } catch(error){ Thing.logError(error); }
  }

  get name(){ return this.computed.name; }
  set name(value){
    try {
      this.computed.name = value;
    } catch(error){ Thing.logError(error); }
  }

  //TODO
  get potentialAction(){ return this.computed.potentialAction; }
  set potentialAction(value){
    try {
      this.computed.potentialAction = value;
    } catch(error){ Thing.logError(error); }
  }

  get sameAs(){ return this.computed.sameAs; }
  set sameAs(value){
    try {
      if(Thing.isURL(value)){ this.computed.sameAs = value; }
    } catch(error){ Thing.logError(error); }
  }

  get url(){ return this.computed.url; }
  set url(value){
    try {
      if(Thing.isURL(value)){ this.computed.url = value; }
    } catch(error){ Thing.logError(error); }
  }
}

module.exports = Thing;
