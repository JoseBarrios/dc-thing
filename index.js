'use strict'

const colors = require('colors/safe');
const schemaOrg = require('schema-dot-org');
const lodash = require('lodash');
const EMPTY = '';
const TYPE = 'Thing';

class Thing {

  /////////////////////
  //
  // Static Methods
  //
  /////////////////////
	static isURL(value, debugging){
		return Thing.validate(value, Thing.schema.url, debugging);
  }
  static isText(value, debugging){
		return Thing.validate(value, Thing.schema.text, debugging);
  }


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

	static validate(value, schema, debugging=false){
		return schemaOrg.validate(value, schema, debugging);
	}

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

	static typeError(errorMsg){
		console.error(colors.yellow(new TypeError(errorMsg)));
	}

  static fatalError(errorMsg){
		throw new TypeError(errorMsg.red.inverse);
  }

  static isInstance(object){ return object.type === Thing.type; }

	//STATIC GETTERS
	static get schema(){ return schemaOrg; }
  static get type(){ return TYPE; }
  static get utils(){ return lodash; }


  constructor(model){
    model = model || {};
    //Initialize model props
    this.model = {};
    this.state = {};

		//Disable debugging by default
		this.debugging = false;
		//Private
    this.type = this.constructor.name;

    //Assign properties from model
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

  //IMMUTABLE
  get type() { return this.constructor.name }
  set type(value) { this._type = this.constructor.name}

  get additionalType(){ return this.model.additionalType; }
  set additionalType(value){
		if(!value) return;
		if(Thing.isURL(value, this.debugging)){
			this.model.additionalType = value;
		} else {
			Thing.typeError('Thing: additionalType should be URL (reverting change)')
		}
  }

  get alternateName(){ return this.model.alternateName; }
  set alternateName(value){
		if(Thing.isText(value, this.debugging)){
			this.model.alternateName = Thing.utils.upperFirst(value);
		} else {
			Thing.typeError('Thing: alternateName should be Text (reverting change)')
		}
  }

  get description(){ return this.model.description; }
  set description(value){
		if(Thing.isText(value, this.debugging)){
			this.model.description = Thing.utils.upperFirst(value);
		} else {
			Thing.typeError('Thing: alternateName should be Text (reverting change)')
		}
  }

  get disambiguatingDescription(){ return this.model.disambiguatingDescription; }
  set disambiguatingDescription(value){
		if(Thing.isText(value, this.debugging)){
			this.model.disambiguatingDescription = Thing.utils.upperFirst(value);
		} else {
			Thing.typeError('Thing: disambiguatingDescription should be Text (reverting change)')
		}
  }

	//TODO (Property Value)
  get identifier(){ return this.model.identifier; }
  set identifier(value){
		if(Thing.isText(value, this.debugging) || Thing.isURL(value, this.debugging)){
			this.model.identifier = value;
		} else {
			Thing.typeError('Thing: identifier should be Text, URL or Property Value (reverting change)')
		}
  }

  get image(){ return this.model.image; }
  set image(value){
		if(Thing.isURL(value, this.debugging)){
			this.model.image = value;
		} else {
			Thing.typeError('Thing: image should be URL (reverting change)')
		}
  }

	//TODO (Creative Work)
  get mainEntityOfPage(){ return this.model.mainEntityOfPage; }
  set mainEntityOfPage(value){
		if(Thing.isURL(value, this.debugging)){
			this.model.mainEntityOfPage = value;
		} else {
			Thing.typeError('Thing: mainEntityOfPage should be URL or Creative Work (reverting change)')
		}
  }

  get name(){ return this.model.name; }
  set name(value){
		if(Thing.isText(value, this.debugging)){
			this.model.name = Thing.utils.upperFirst(value);
		} else {
			Thing.typeError('Thing: name should be Text (reverting change)')
		}
  }

  //TODO
  get potentialAction(){ return this.model.potentialAction; }
  set potentialAction(value){

  }

  get sameAs(){ return this.model.sameAs; }
  set sameAs(value){
		if(Thing.isURL(value, this.debugging)){
			this.model.sameAs = value;
		} else {
			Thing.typeError('Thing: sameAs should be Text (reverting change)')
		}
  }

  get url(){ return this.model.url; }
  set url(value){
		if(Thing.isURL(value, this.debugging)){
			this.model.url = value;
		} else {
			Thing.typeError('Thing: url should be Text (reverting change)')
		}

  }




  ///////////////////////////////////
  //
  //
  //
  ///////////////////////////////////
  get debugging() { return this.state.debugging };
  set debugging(value) {
    if(Thing.isBoolean(value)){
      this.state.debugging = value;
    }
  }

  isValidKey(propertyKeyName){
    let keys = Thing.keys(this);
    return keys.includes(propertyKeyName)
  }

}

module.exports = Thing;
