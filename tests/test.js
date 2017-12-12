'use strict'

var assert = require('assert');
var ThingDataController = require('../index.js');

var model = {};
model.name = 'Jose Barrios';
model.identifier = '1234';
model.additionalType = '';
model.alternateName = undefined;
model.description = null;
var thing = new ThingDataController(model);
console.log(thing)

describe('ThingDataController Class\n', function() {

  describe('Static Methods:', function() {
    describe('ThingDataController.isNumber(value)', function() {
      it('should return true if value is a number, false otherwise', function() {
        assert.equal(ThingDataController.isNumber(1), true);
        assert.equal(ThingDataController.isNumber('string'), false);
        assert.equal(ThingDataController.isNumber(''), false);
        assert.equal(ThingDataController.isNumber(true), false);
        assert.equal(ThingDataController.isNumber(false), false);
        assert.equal(ThingDataController.isNumber([]), false);
        assert.equal(ThingDataController.isNumber({}), false);
        assert.equal(ThingDataController.isNumber(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);

        //TODO: make test for this static method
        //assert.equal(ThingDataController.validateInputType('number', 1, 'whatever'), true)
      });
    });
    describe('ThingDataController.isString(value)', function() {
      it('should return true if value is string, false otherwise', function() {
        assert.equal(ThingDataController.isString(1), false);
        assert.equal(ThingDataController.isString('string'), true);
        assert.equal(ThingDataController.isString(''), true);
        assert.equal(ThingDataController.isString(true), false);
        assert.equal(ThingDataController.isString(false), false);
        assert.equal(ThingDataController.isString([]), false);
        assert.equal(ThingDataController.isString({}), false);
        assert.equal(ThingDataController.isString(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });
    describe('ThingDataController.isBoolean(value)', function() {
      it('should return true if value is boolean, false otherwise', function() {
        assert.equal(ThingDataController.isBoolean(1), false);
        assert.equal(ThingDataController.isBoolean('string'), false);
        assert.equal(ThingDataController.isBoolean(''), false);
        assert.equal(ThingDataController.isBoolean(true), true);
        assert.equal(ThingDataController.isBoolean(false), true);
        assert.equal(ThingDataController.isBoolean([]), false);
        assert.equal(ThingDataController.isBoolean({}), false);
        assert.equal(ThingDataController.isBoolean(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });
    describe('ThingDataController.isArray(value)', function() {
      it('should return true if value is array, false otherwise', function() {
        assert.equal(ThingDataController.isArray(1), false);
        assert.equal(ThingDataController.isArray('string'), false);
        assert.equal(ThingDataController.isArray(''), false);
        assert.equal(ThingDataController.isArray(true), false);
        assert.equal(ThingDataController.isArray(false), false);
        assert.equal(ThingDataController.isArray([]), true);
        assert.equal(ThingDataController.isArray({}), false);
        assert.equal(ThingDataController.isArray(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });
    describe('ThingDataController.isObject(value)', function() {
      it('should return true if value is plain object, false otherwise', function() {
        assert.equal(ThingDataController.isObject(1), false);
        assert.equal(ThingDataController.isObject('string'), false);
        assert.equal(ThingDataController.isObject(''), false);
        assert.equal(ThingDataController.isObject(true), false);
        assert.equal(ThingDataController.isObject(false), false);
        assert.equal(ThingDataController.isObject([1,2,3]), true);
        assert.equal(ThingDataController.isObject({}), true);
        assert.equal(ThingDataController.isObject({ "hello" : "world"}), true);
        assert.equal(ThingDataController.isObject({ hello : "world"}), true);
        assert.equal(ThingDataController.isObject({ greeting : {hello: "world"}}), true);
        assert.equal(ThingDataController.isObject(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });
    describe('ThingDataController.isPlainObject(value)', function() {
      it('should return true if value is plain object, false otherwise', function() {
        assert.equal(ThingDataController.isPlainObject(1), false);
        assert.equal(ThingDataController.isPlainObject('string'), false);
        assert.equal(ThingDataController.isPlainObject(''), false);
        assert.equal(ThingDataController.isPlainObject(true), false);
        assert.equal(ThingDataController.isPlainObject(false), false);
        assert.equal(ThingDataController.isPlainObject([]), false);
        assert.equal(ThingDataController.isPlainObject({}), true);
        assert.equal(ThingDataController.isPlainObject({ "hello" : "world"}), true);
        assert.equal(ThingDataController.isPlainObject({ hello : "world"}), true);
        assert.equal(ThingDataController.isPlainObject({ greeting : {hello: "world"}}), true);
        assert.equal(ThingDataController.isPlainObject(null), false);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });

    describe('ThingDataController.isNull(value)', function() {
      it('should return true if value is null, false otherwise', function() {
        assert.equal(ThingDataController.isNull(1), false);
        assert.equal(ThingDataController.isNull('string'), false);
        assert.equal(ThingDataController.isNull(''), false);
        assert.equal(ThingDataController.isNull(true), false);
        assert.equal(ThingDataController.isNull(false), false);
        assert.equal(ThingDataController.isNull([]), false);
        assert.equal(ThingDataController.isNull({}), false);
        assert.equal(ThingDataController.isNull(null), true);
        assert.equal(ThingDataController.isNull(undefined), false);
      });
    });
    describe('ThingDataController.isEmpty(value)', function() {
      it('should return true if value is string, false otherwise', function() {
        assert.equal(ThingDataController.isEmpty(1), false);
        assert.equal(ThingDataController.isEmpty('string'), false);
        assert.equal(ThingDataController.isEmpty(''), true);
        assert.equal(ThingDataController.isEmpty(true), false);
        assert.equal(ThingDataController.isEmpty(false), false);
        assert.equal(ThingDataController.isEmpty([]), true);
        assert.equal(ThingDataController.isEmpty({}), true);
        assert.equal(ThingDataController.isEmpty(null), true);
        assert.equal(ThingDataController.isEmpty(undefined), true);
      });
    });

    describe('ThingDataController.isValidJSONInput(value)', function() {
      it('should return true if value is JSON supported, false otherwise', function() {
        assert.equal(ThingDataController.isValidJSONInput(1), true);
        assert.equal(ThingDataController.isValidJSONInput('string'), true);
        assert.equal(ThingDataController.isValidJSONInput(''), true);
        assert.equal(ThingDataController.isValidJSONInput(true), true);
        assert.equal(ThingDataController.isValidJSONInput(true), true);
        assert.equal(ThingDataController.isValidJSONInput([]), true);
        assert.equal(ThingDataController.isValidJSONInput({}), true);
        assert.equal(ThingDataController.isValidJSONInput(null), true);
        assert.equal(ThingDataController.isValidJSONInput(undefined), false);
      });
    });
    describe('ThingDataController.isURL(value)', function() {
      it('should return true if value is a valid URL, false otherwise', function() {
        assert.equal(ThingDataController.isURL('www.google.com'), true);
        assert.equal(ThingDataController.isURL('google.com'), true);
        assert.equal(ThingDataController.isURL('http://google.com'), true);
        assert.equal(ThingDataController.isURL('https://google.com'), true);
        assert.equal(ThingDataController.isURL('https://google.com/something'), true);
        assert.equal(ThingDataController.isURL('https://google.com/something?value=true'), true);
        assert.equal(ThingDataController.isURL(1), false);
        assert.equal(ThingDataController.isURL('string'), false);
        assert.equal(ThingDataController.isURL(''), false);
        assert.equal(ThingDataController.isURL(true), false);
        assert.equal(ThingDataController.isURL(true), false);
        assert.equal(ThingDataController.isURL([]), false);
        assert.equal(ThingDataController.isURL({}), false);
        assert.equal(ThingDataController.isURL(null), false);
        assert.equal(ThingDataController.isURL(undefined), false);
      });
    });
    describe('ThingDataController.model', function() {
      it('should return the serialized version of the class model', function() {
        thing.description = 'description'
        assert.equal(ThingDataController.model(thing).description, 'description');
      });
    });
    describe('ThingDataController.unsetProperties', function() {
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
        assert.deepStrictEqual(ThingDataController.unsetProperties(thing), test);
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
        assert.deepStrictEqual(ThingDataController.unsetProperties(thing, 'object'), test);
      });
    });
    describe('ThingDataController.assignedProperties', function() {
      it('should return the instance empty properties (array form)', function() {
        let test = [];
        test.push('description');
        test.push('identifier');
        test.push('name');
        test.push('type');
        assert.deepStrictEqual(ThingDataController.assignedProperties(thing, 'array'), test);
      });
      it('should return the instance empty properties (object form)', function() {
        let test = {};
        test['description'] = 'description';
        test['identifier'] = '1234';
        test['name'] = 'Jose Barrios';
        test['type'] = 'ThingDataController';
        assert.deepStrictEqual(ThingDataController.assignedProperties(thing, 'object'), test);
      });
    });

    describe('ThingDataController.keys', function() {
      it('should return the object key names in array', function() {
        assert.equal(ThingDataController.keys(thing).includes('description'), true);
      });
    });
    describe('ThingDataController.values', function() {
      it('should return the object values in array', function() {
        thing.description = 'description';
        assert.equal(ThingDataController.values(thing).includes('description'), true);
      });
    });
    describe('ThingDataController.isInstance', function() {
      it('should return the true if param is an instance of this class', function() {
        assert.equal(ThingDataController.isInstance(thing), true);
        assert.equal(ThingDataController.isInstance({}), false);
      });
    });
    describe('ThingDataController.type', function() {
      it('should return the type of this class\n', function() {
        assert.equal(ThingDataController.type, 'ThingDataController');
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
        assert.equal(thing.type, 'ThingDataController');
        assert.equal(thing.type, ThingDataController.type);
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
   describe('#isValidKey', function() {
       it('should return false if object does not accept key, true otherwise', function() {
         assert.equal(thing.isValidKey('name'), true);
         assert.equal(thing.isValidKey('invalid'), false);
      });
    });

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
