'use strict'

var assert = require('assert');
var Thing = require('../index.js');

var model = {};
model.name = 'Jose Barrios';
model.identifier = '12334';
model.additionalType = '';
model.alternateName = undefined;
model.description = null;
let thing = new Thing(model);

describe('Thing Class\n', function() {

  describe('Static Methods:', function() {
    describe('Thing.isNumber(value)', function() {
      it('should return true if value is a number, false otherwise', function() {
        assert.equal(Thing.isNumber(1), true);
        assert.equal(Thing.isNumber('string'), false);
        assert.equal(Thing.isNumber(''), false);
        assert.equal(Thing.isNumber(true), false);
        assert.equal(Thing.isNumber(false), false);
        assert.equal(Thing.isNumber([]), false);
        assert.equal(Thing.isNumber({}), false);
        assert.equal(Thing.isNumber(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isString(value)', function() {
      it('should return true if value is string, false otherwise', function() {
        assert.equal(Thing.isString(1), false);
        assert.equal(Thing.isString('string'), true);
        assert.equal(Thing.isString(''), true);
        assert.equal(Thing.isString(true), false);
        assert.equal(Thing.isString(false), false);
        assert.equal(Thing.isString([]), false);
        assert.equal(Thing.isString({}), false);
        assert.equal(Thing.isString(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isBoolean(value)', function() {
      it('should return true if value is boolean, false otherwise', function() {
        assert.equal(Thing.isBoolean(1), false);
        assert.equal(Thing.isBoolean('string'), false);
        assert.equal(Thing.isBoolean(''), false);
        assert.equal(Thing.isBoolean(true), true);
        assert.equal(Thing.isBoolean(false), true);
        assert.equal(Thing.isBoolean([]), false);
        assert.equal(Thing.isBoolean({}), false);
        assert.equal(Thing.isBoolean(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isArray(value)', function() {
      it('should return true if value is array, false otherwise', function() {
        assert.equal(Thing.isArray(1), false);
        assert.equal(Thing.isArray('string'), false);
        assert.equal(Thing.isArray(''), false);
        assert.equal(Thing.isArray(true), false);
        assert.equal(Thing.isArray(false), false);
        assert.equal(Thing.isArray([]), true);
        assert.equal(Thing.isArray({}), false);
        assert.equal(Thing.isArray(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isObject(value)', function() {
      it('should return true if value is plain object, false otherwise', function() {
        assert.equal(Thing.isObject(1), false);
        assert.equal(Thing.isObject('string'), false);
        assert.equal(Thing.isObject(''), false);
        assert.equal(Thing.isObject(true), false);
        assert.equal(Thing.isObject(false), false);
        assert.equal(Thing.isObject([]), false);
        assert.equal(Thing.isObject({}), true);
        assert.equal(Thing.isObject({ "hello" : "world"}), true);
        assert.equal(Thing.isObject({ hello : "world"}), true);
        assert.equal(Thing.isObject({ greeting : {hello: "world"}}), true);
        assert.equal(Thing.isObject(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isNull(value)', function() {
      it('should return true if value is null, false otherwise', function() {
        assert.equal(Thing.isNull(1), false);
        assert.equal(Thing.isNull('string'), false);
        assert.equal(Thing.isNull(''), false);
        assert.equal(Thing.isNull(true), false);
        assert.equal(Thing.isNull(false), false);
        assert.equal(Thing.isNull([]), false);
        assert.equal(Thing.isNull({}), false);
        assert.equal(Thing.isNull(null), true);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isValidInput(value)', function() {
      it('should return true if value is JSON supported, false otherwise', function() {
        assert.equal(Thing.isValidInput(1), true);
        assert.equal(Thing.isValidInput('string'), true);
        assert.equal(Thing.isValidInput(''), true);
        assert.equal(Thing.isValidInput(true), true);
        assert.equal(Thing.isValidInput(true), true);
        assert.equal(Thing.isValidInput([]), true);
        assert.equal(Thing.isValidInput({}), true);
        assert.equal(Thing.isValidInput(null), true);
        assert.equal(Thing.isValidInput(undefined), false);
      });
    });
    describe('Thing.isURL(value)', function() {
      it('should return true if value is a valid URL, false otherwise\n', function() {
        assert.equal(Thing.isURL('www.google.com'), true);
        assert.equal(Thing.isURL('google.com'), true);
        assert.equal(Thing.isURL('http://google.com'), true);
        assert.equal(Thing.isURL('https://google.com'), true);
        assert.equal(Thing.isURL('https://google.com/something'), true);
        assert.equal(Thing.isURL('https://google.com/something?value=true'), true);
        assert.equal(Thing.isURL(1), false);
        assert.equal(Thing.isURL('string'), false);
        assert.equal(Thing.isURL(''), false);
        assert.equal(Thing.isURL(true), false);
        assert.equal(Thing.isURL(true), false);
        assert.equal(Thing.isURL([]), false);
        assert.equal(Thing.isURL({}), false);
        assert.equal(Thing.isURL(null), false);
        assert.equal(Thing.isURL(undefined), false);
      });
    });
  });


  describe('Properties:', function() {
    describe('thing.additionalType', function() {
      it('should only allow value to be set if it is of type string (url)', function() {
        let url = 'google.com';
        thing.additionalType = url;
        assert.equal(thing.additionalType, url);
      });
    });
    describe('thing.alternateName', function() {
      it('should only allow value to be set if it is of type string', function() {
        let str = 'alternateName';
        thing.alternateName = str;
        assert.equal(thing.alternateName, str);
      });
    });
    describe('thing.description', function() {
      it('should only allow value to be set if it is of type string', function() {
        let str = 'description';
        thing.description = str;
        assert.equal(thing.description, str);
      });
    });
    describe('thing.disambiguatingDescription', function() {
      it('should only allow value to be set if it is of type string', function() {
        let str = 'disambiguatingDescription';
        thing.disambiguatingDescription = str;
        assert.equal(thing.disambiguatingDescription, str);
      });
    });
    describe('thing.identifier', function() {
      it('should only allow value to be set if it is of type string', function() {
        let str = 'identifier';
        thing.identifier = str;
        assert.equal(thing.identifier, str);
      });
    });
    describe('thing.image', function() {
      it('should only allow value to be set if it is of type string (url)', function() {
        let url = 'google.com';
        thing.image = url;
        assert.equal(thing.image, url);
      });
    });
    //TODO
    //describe('thing.mainEntityOfPage', function() {
    //it('should only allow value to be set if it is of type string', function() {
    //let str = 'mainEntityOfPage';
    //thing.mainEntityOfPage = str;
    //assert.equal(thing.mainEntityOfPage, str);
    //});
    //});
    describe('thing.name', function() {
      it('should only allow value to be set if it is of type string', function() {
        let str = 'name';
        thing.name = str;
        assert.equal(thing.name, str);
      });
    });
    //TODO
    //describe('thing.potentialAction', function() {
    //it('should only allow value to be set if it is of type string', function() {
    //let str = 'potentialAction';
    //thing.potentialAction = str;
    //assert.equal(thing.potentialAction, str);
    //});
    //});
    describe('thing.sameAs', function() {
      it('should only allow value to be set if it is of type string (url)', function() {
        let url = 'google.com';
        thing.sameAs = url;
        assert.equal(thing.sameAs, url);
      });
    });
    describe('thing.url', function() {
      it('should only allow value to be set if it is of type string (url)', function() {
        let url = 'google.com';
        thing.url = url;
        assert.equal(thing.url, url);
      });
    });
    describe('thing.model', function() {
      it('should return the serialized version of the class (aka model)', function() {
        assert.equal(thing.model.description, 'description');
      });
    });
    describe('thing.emptyProperties', function() {
      it('should return the instance empty properties', function() {
        thing.alternateName = '';
        thing.description = null;
        thing.name = undefined;
        assert.equal(thing.emptyProperties.alternateName, '');
        assert.equal(thing.emptyProperties.description, null);
        assert.equal(thing.emptyProperties.name, undefined);
      });
    });
  });
});
