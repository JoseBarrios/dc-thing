"use strict"

const lodash = require("lodash");
const moment = require("moment");
const DateTime = require("dc-date-time");

class ThingDataController {

  static isNumber(value) {
    return lodash.isNumber(value);
  }

  static isString(value) {
    return lodash.isString(value);
  }

  static isBoolean(value) {
    return lodash.isBoolean(value);
  }

  static isArray(value) {
    return lodash.isArray(value);
  }

  static isObject(value) {
    return lodash.isObject(value);
  }

  static isPlainObject(value) {
    return lodash.isPlainObject(value);
  }
  
  static isNull(value) {
    return lodash.isNull(value);
  }

  static isUndefined(value) {
    return lodash.isUndefined(value);
  }

  // Array-like values such as arguments objects, arrays, buffers, strings,
  // or jQuery-like collections are considered empty if they have a length of 0.
  // Similarly, maps and sets are considered empty if they have a size of 0.
  static isEmpty(value) {
    return lodash.isEmpty(value);
  }

  static isEmptyString(value) {
    return value === "";
  }

  static isNullOrUndefined(value) {
    return lodash.isNull(value) || lodash.isUndefined(value);
  }

  static isDate(value) {
    return DateTime.isValidDate(value);
  }

  static isUrl(value) {
    return ThingDataController.isURL(value);
  }

  static isURL(value) {
    let isString = ThingDataController.isString(value);
    let URL = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    return isString && URL.test(value);
  }

  static model(thing) {
    return thing.model;
  }

  static keys(thing) {
    let propertyNames = [];
    lodash.forIn(thing.model, (value, key) => {
      propertyNames.push(key);
    })
    return propertyNames;
  }

  static values(thing) {
    let propertyValues = [];
    lodash.forIn(thing.model, value => {
      propertyValues.push(value);
    })
    return propertyValues;
  }

  static isValidJSONInput(value) {
    return ThingDataController.isNumber(value) ||
      ThingDataController.isString(value) ||
      ThingDataController.isBoolean(value) ||
      ThingDataController.isArray(value) ||
      ThingDataController.isObject(value) ||
      ThingDataController.isNull(value);
  }

  static logError(error, type) {
    throw new TypeError(error);
  }

  static isInstance(object) {
    return object.type === ThingDataController.type;
  }

  static get type() {
    return "thing";
  }

  static get lodash() {
    return lodash;
  }

  static get moment() {
    return moment;
  }

  static get dateTime() {
    return new DateTime();
  }

  constructor(model) {
    model = model || {};
    //Initialize model props
    this.model = model;

    //Assign properties
    this.additionalType = model.additionalType;
    this.alternateName = model.alternateName;
    this.description = model.description;
    this.disambiguatingDescription = model.disambiguatingDescription;
    this.identifier = model.identifier || model._id || lodash.uniqueId();
    this.image = model.image;
    this.mainEntityOfPage = model.mainEntityOfPage;
    this.name = model.name;
    this.potentialAction = model.potentialAction;
    this.sameAs = model.sameAs;
    this.url = model.url;
  }

  get type() {
    return ThingDataController.type
  }

  get additionalType() {
    return this.model.additionalType;
  }

  set additionalType(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.additionalType;
    } else if (ThingDataController.isURL(value)) {
      this.model.additionalType = value
    } else {
      ThingDataController.logError(this.type + "'s additionalType must be url");
    }
  }

  get alternateName() {
    return this.model.alternateName;
  }

  set alternateName(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.alternateName;
    } else if (ThingDataController.isString(value)) {
      this.model.alternateName = value
    } else {
      ThingDataController.logError(this.type + "'s alternateName must be string");
    }
  }

  get description() {
    return this.model.description;
  }

  set description(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.description;
    } else if (ThingDataController.isString(value)) {
      this.model.description = value
    } else {
      ThingDataController.logError(this.type + "'s description must be string");
    }
  }

  get disambiguatingDescription() {
    return this.model.disambiguatingDescription;
  }

  set disambiguatingDescription(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.disambiguatingDescription;
    } else if (ThingDataController.isString(value)) {
      this.model.disambiguatingDescription = value
    } else {
      ThingDataController.logError(this.type + "'s disambiguatingDescription must be string");
    }
  }

  get identifier() {
    return this.model.identifier;
  }

  set identifier(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.identifier;
    } else if (ThingDataController.isString(value)) {
      this.model.identifier = value
    } else if (ThingDataController.isObject(value)) {
      this.model.identifier = value
    } else if (ThingDataController.isNumber(value)) {
      this.model.identifier = value
    } else {
      ThingDataController.logError(this.type + "'s identifier must be string, number or object");
    }
  }

  get image() {
    return this.model.image;
  }

  set image(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.image;
    } else if (ThingDataController.isString(value)) {
      this.model.image = value
    } else if (ThingDataController.isObject(value)) {
      this.model.image = value
    } else {
      ThingDataController.logError(this.type + "'s image must be string, or object");
    }
  }

  //TODO
  get mainEntityOfPage() {
    return this.model.mainEntityOfPage;
  }

  set mainEntityOfPage(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.mainEntityOfPage;
    } else if (ThingDataController.isString(value)) {
      this.model.mainEntityOfPage = value
    } else if (ThingDataController.isObject(value)) {
      this.model.mainEntityOfPage = value
    } else {
      ThingDataController.logError(this.type + "'s mainEntityOfPage must be string, or object");
    }
  }

  get name() {
    return this.model.name;
  }

  set name(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.name;
    } else if (ThingDataController.isString(value)) {
      this.model.name = value
    } else {
      ThingDataController.logError(this.type + "'s name must be string");
    }
  }

  //TODO
  get potentialAction() {
    return this.model.potentialAction;
  }

  set potentialAction(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.potentialAction;
    } else if (ThingDataController.isString(value)) {
      this.model.potentialAction = value
    } else if (ThingDataController.isObject(value)) {
      this.model.potentialAction = value
    } else {
      ThingDataController.logError(this.type + "'s potentialAction must be string or object");
    }
  }

  get sameAs() {
    return this.model.sameAs;
  }
  set sameAs(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.sameAs;
    } else if (ThingDataController.isURL(value)) {
      this.model.sameAs = value
    } else {
      ThingDataController.logError(this.type + "'s sameAs must be url");
    }
  }

  get url() {
    return this.model.url;
  }
  set url(value) {
    if (ThingDataController.isNullOrUndefined(value)) {
      delete this.model.url;
    } else if (ThingDataController.isURL(value)) {
      this.model.url = value
    } else {
      ThingDataController.logError(this.type + "'s url must be string");
    }
  }

  // Utilities
  isValidKey(propertyKeyName) {
    let keys = ThingDataController.keys(this);
    return keys.includes(propertyKeyName)
  }
}

module.exports = ThingDataController;