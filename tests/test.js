'use strict'

var assert = require('assert');
var Thing = require('../index.js');

var model = {};
model.name = 'Jose Barrios';
model.identifier = '1234';
model.additionalType = '';
model.alternateName = undefined;
model.description = null;
var thing = new Thing(model);

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

        //TODO: make test for this static method
        //assert.equal(Thing.validateInputType('number', 1, 'whatever'), true)
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
        assert.equal(Thing.isObject([1,2,3]), true);
        assert.equal(Thing.isObject({}), true);
        assert.equal(Thing.isObject({ "hello" : "world"}), true);
        assert.equal(Thing.isObject({ hello : "world"}), true);
        assert.equal(Thing.isObject({ greeting : {hello: "world"}}), true);
        assert.equal(Thing.isObject(null), false);
        assert.equal(Thing.isNull(undefined), false);
      });
    });
    describe('Thing.isPlainObject(value)', function() {
      it('should return true if value is plain object, false otherwise', function() {
        assert.equal(Thing.isPlainObject(1), false);
        assert.equal(Thing.isPlainObject('string'), false);
        assert.equal(Thing.isPlainObject(''), false);
        assert.equal(Thing.isPlainObject(true), false);
        assert.equal(Thing.isPlainObject(false), false);
        assert.equal(Thing.isPlainObject([]), false);
        assert.equal(Thing.isPlainObject({}), true);
        assert.equal(Thing.isPlainObject({ "hello" : "world"}), true);
        assert.equal(Thing.isPlainObject({ hello : "world"}), true);
        assert.equal(Thing.isPlainObject({ greeting : {hello: "world"}}), true);
        assert.equal(Thing.isPlainObject(null), false);
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
    describe('Thing.isValidJSONInput(value)', function() {
      it('should return true if value is JSON supported, false otherwise', function() {
        assert.equal(Thing.isValidJSONInput(1), true);
        assert.equal(Thing.isValidJSONInput('string'), true);
        assert.equal(Thing.isValidJSONInput(''), true);
        assert.equal(Thing.isValidJSONInput(true), true);
        assert.equal(Thing.isValidJSONInput(true), true);
        assert.equal(Thing.isValidJSONInput([]), true);
        assert.equal(Thing.isValidJSONInput({}), true);
        assert.equal(Thing.isValidJSONInput(null), true);
        assert.equal(Thing.isValidJSONInput(undefined), false);
      });
    });
    describe('Thing.isURL(value)', function() {
      it('should return true if value is a valid URL, false otherwise', function() {
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
    describe('Thing.model', function() {
      it('should return the serialized version of the class model', function() {
        thing.description = 'description'
        assert.equal(Thing.model(thing).description, 'description');
      });
    });
    describe('Thing.unsetProperties', function() {
      it('should return the instance empty properties (array form)', function() {
        let test = [];
        test.push('additionalType');
        test.push('alternateName');
        test.push('disambiguatingDescription');
        test.push('image');
        test.push('mainEntityOfPage');
        test.push('potentialAction');
        test.push('sameAs');
        test.push('url');
        assert.deepStrictEqual(Thing.unsetProperties(thing), test);
      });
      it('should return the instance empty properties (object form)', function() {
        let test = {};
        test['additionalType'] = '';
        test['alternateName'] = '';
        test['disambiguatingDescription'] = '';
        test['image'] = '';
        test['mainEntityOfPage'] = '';
        test['potentialAction'] = '';
        test['sameAs'] = '';
        test['url'] = '';
        assert.deepStrictEqual(Thing.unsetProperties(thing, 'object'), test);
      });
    });
    describe('Thing.assignedProperties', function() {
      it('should return the instance empty properties (array form)', function() {
        let test = [];
        test.push('description');
        test.push('identifier');
        test.push('name');
        assert.deepStrictEqual(Thing.assignedProperties(thing), test);
      });
      it('should return the instance empty properties (object form)', function() {
        let test = {};
        test['description'] = 'description';
        test['identifier'] = '1234';
        test['name'] = 'Jose Barrios';
        assert.deepStrictEqual(Thing.assignedProperties(thing, 'object'), test);
      });
    });

    describe('Thing.keys', function() {
      it('should return the object key names in array', function() {
        assert.equal(Thing.keys(thing).includes('description'), true);
      });
    });
    describe('Thing.values', function() {
      it('should return the object values in array', function() {
        thing.description = 'description';
        assert.equal(Thing.values(thing).includes('description'), true);
      });
    });
    describe('Thing.isInstance', function() {
      it('should return the true if param is an instance of this class', function() {
        assert.equal(Thing.isInstance(thing), true);
        assert.equal(Thing.isInstance({}), false);
      });
    });
    describe('Thing.type', function() {
      it('should return the type of this class\n', function() {
        assert.equal(Thing.type, 'Thing');
      });
    });


  });


  describe('Properties:', function() {

    describe('thing.model', function() {
      it('should return the instance model', function() {
        assert.equal(thing.model.description, 'description');
      });
    });


    describe('thing.type', function() {
      it('should return the class type', function() {
        assert.equal(thing.type, 'Thing');
        assert.equal(thing.type, Thing.type);
      });
    });


    describe('thing.additionalType', function() {
      it('should only allow value to be set if it is of type string (url)', function() {
        let test = 'string';
        thing.additionalType = test;
        assert.equal(thing.additionalType, test);
        thing.muteErrors = true;
        thing.additionalType = 1;
        assert.equal(thing.additionalType, test);
        thing.muteErrors = false;
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
      it('should only allow value to be set if it is of type string (url) \n', function() {
        let url = 'google.com';
        thing.url = url;
        assert.equal(thing.url, url);
      });
    });

  });

  describe('Methods:', function() {
     describe('#muteErrors', function() {
       it('should stop/start error logging (except for fatal ones)', function() {
         thing.muteErrors = true;
         thing.name = 1;
         assert.equal(thing.muteErrors, true);
         thing.muteErrors = false;
         assert.equal(thing.muteErrors, false);
      });
    });
  });
});
