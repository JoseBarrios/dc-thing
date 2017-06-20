'use strict'

const assert = require('assert');
const _ = require('lodash');

class Thing {

  /////////////////////
  //
  // Static Methods
  //
  /////////////////////
  static logError(error){ console.error(error); }
  static isNumber(value){ return _.isNumber(value); }
  static isString(value){ return _.isString(value); }
  static isBoolean(value){ return _.isBoolean(value); }
  static isArray(value){ return _.isArray(value); }
  static isObject(value){ return _.isPlainObject(value); }
  static isNull(value){ return _.isNull(value); }
  static isUndefined(value){ return _.isUndefined(value); }

  static isEmpty(value){
    return Thing.isUndefined(value) || Thing.isNull(value) || value === '';
  }

  static isURL(value){
    let isString = Thing.isString(value);
    let URL = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    return  isString && URL.test(value);
  }

  static validateInputType(type, value, propName){
    var error = new TypeError(`${propName} must be a ${type}`);
    switch(type.toLowerCase()){
      case 'number':
        if(!Thing.isNumber(value) && !Thing.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      case 'string':
        var stringError = new TypeError(`${propName} must be a ${type}`);
        if(!Thing.isString(value) && !Thing.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      case 'boolean':
        var booleanError = new TypeError(`${propName} must be a ${type}`);
        if(!Thing.isBoolean(value) && !Thing.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      case 'array':
        var arrayError = new TypeError(`${propName} must be a ${type}`);
        if(!Thing.isArray(value) && !Type.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      case 'object':
        var objectError = new TypeError(`${propName} must be a ${type}`);
        if(!Thing.isObject(value) && !Type.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      case 'null':
        var nullError = new TypeError(`${propName} must be a ${type}`);
        if(!Thing.isNull(value) && !Type.isEmpty(value)) {
          throw error;
          return false;
        } else{ return true; }
        break;

      default:
        var defaultError = new TypeError(`${propName} must be a ${type}`);
        throw defaultError;
    }
  }

  static isValidJSONInput(value){
    return Thing.isNumber(value) ||
      Thing.isString(value) ||
      Thing.isBoolean(value) ||
      Thing.isArray(value) ||
      Thing.isObject(value) ||
      Thing.isNull(value);
  }

  constructor(model){
    model = model || {};
    //Initialize computed props
    this.computed = {};
    this.model = null;
    this.emptyProperties = null;
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

  get additionalType(){ return this.computed.additionalType; }
  set additionalType(value){
    try {
      Thing.validateInputType('string', value, 'additionalType');
      if(Thing.isURL(value)){ this.computed.additionalType = value; }
    } catch(error){ Thing.logError(error); }
  }

  get alternateName(){ return this.computed.alternateName; }
  set alternateName(value){
    try {
      Thing.validateInputType('string', value, 'alternateName');
      this.computed.alternateName = value;
    } catch(error){ Thing.logError(error); }
  }

  get description(){ return this.computed.description; }
  set description(value){
    try {
      Thing.validateInputType('string', value, 'description');
      this.computed.description = value;
    } catch(error){ Thing.logError(error); }
  }

  get disambiguatingDescription(){ return this.computed.disambiguatingDescription; }
  set disambiguatingDescription(value){
    try {
      Thing.validateInputType('string', value, 'disambiguatingDescription');
      this.computed.disambiguatingDescription = value;
    } catch(error){ Thing.logError(error); }
  }

  get identifier(){ return this.computed.identifier; }
  set identifier(value){
    try {
      Thing.validateInputType('string', value, 'identifier');
      this.computed.identifier = value;
    } catch(error){ Thing.logError(error); }
  }

  get image(){ return this.computed.image; }
  set image(value){
    try {
      Thing.validateInputType('string', value, 'image');
      if(Thing.isURL(value)){ this.computed.image = value; }
    } catch(error){ Thing.logError(error); }
  }

  //TODO
  //get mainEntityOfPage(){ return this.computed.mainEntityOfPage; }
  //set mainEntityOfPage(value){
    //try {
      //Thing.validateInputType('string', value, 'mainEntityOfPage');
      //this.computed.mainEntityOfPage = value;
    //} catch(error){ Thing.logError(error); }
  //}

  get name(){ return this.computed.name; }
  set name(value){
    try {
      Thing.validateInputType('string', value, 'name');
      this.computed.name = value;
    } catch(error){ Thing.logError(error); }
  }

  //TODO
  //get potentialAction(){ return this.computed.potentialAction; }
  //set potentialAction(value){
    //try {
      //Thing.validateInputType('string', value, 'potentialAction');
      //this.computed.potentialAction = value;
    //} catch(error){ Thing.logError(error); }
  //}

  get sameAs(){ return this.computed.sameAs; }
  set sameAs(value){
    try {
      Thing.validateInputType('string', value, 'sameAs');
      if(Thing.isURL(value)){ this.computed.sameAs = value; }
    } catch(error){ Thing.logError(error); }
  }

  get url(){ return this.computed.url; }
  set url(value){
    try {
      Thing.validateInputType('string', value, 'url');
      if(Thing.isURL(value)){ this.computed.url = value; }
    } catch(error){ Thing.logError(error); }
  }


  /////////////////////
  //
  // COMPUTED PROPERTIES
  //
  /////////////////////
  get model(){ return this.computed; }
  set model(value){ this._model = this.computed; }

  set emptyProperties(value){ this._emptyProperties = this.computed; }
  get emptyProperties(){
    let emptyProperties = {};
    _.forIn(this.computed, (value, key) => {
      if(Thing.isEmpty(value)){
        emptyProperties[key] = value;
      }
    })
    return emptyProperties;
  }
}

module.exports = Thing;
