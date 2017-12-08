'use strict'

const colors = require('colors/safe');
var assert = require('assert');
var ThingDataController = require('../index.js');

/*var model = {};*/
//model.name = 'Jose Barrios';
//model.identifier = '1234';
//model.additionalType = '';
//model.alternateName = undefined;
//model.description = null;
//var thing = new Thing(model);
//

describe('Thing Class\n', function() {

  describe('Static Methods:\n', function() {

	 describe(colors.bold('Thing.validate')+'(value, schema)', function() {

		 describe('additionalType '+colors.dim(' (URL) '), function() {

			 it("'https://www.google.com'"+colors.dim(" (true) "), function(done) {
				 let model = new ThingDataController();
				 model.on('change', change => { done(); })
				 model.on('error', error => {
					 done(new Error(error.propertyName+' '+error.message));
				 })
				 model.additionalType = 'https://www.google.com';
			 })

			 it("1337"+colors.dim(" (false) "), function(done) {
				 let model = new ThingDataController();
				 model.on('change', change => { done(new Error('Should deny it')); })
				 model.on('error', error => { done(); })
				 model.additionalType = 1337;
			 })

			 it("true"+colors.dim(" (false) "), function(done) {
				 let model = new ThingDataController();
				 model.on('change', change => { done(new Error('Should deny it')); })
				 model.on('error', error => { done(); })
				 model.additionalType = true;
			 })
















		 })
		 })
		 })
		 })

			 //it("'mailto:some@email.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.additionalType = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'www.google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = 'www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = 'google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = 'google';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = true;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = 1337;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = [];
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.additionalType = {};
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('alternateName '+colors.dim(' (Text) '), function() {
			 //it("'pepe'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.alternateName = 'pepe';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.alternateName = true;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.alternateName = 1337;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.alternateName = [];
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.alternateName = {};
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})

		 //describe('description '+colors.dim(' (Text) '), function() {
			 //it("'A description of the item.'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.description = 'A description of the item.';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.description = true;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.description = 1337;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.description = [];
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.description = {};
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})

		 //describe('disambiguatingDescription '+colors.dim(' (Text) '), function() {
			 //it("'A short description of the item used to disambiguate from other, similar items'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.disambiguatingDescription = 'A short description of the item used to disambiguate from other, similar items';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.disambiguatingDescription = true;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.disambiguatingDescription = 1337;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.disambiguatingDescription = [];
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.disambiguatingDescription = {};
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})

		 //describe('identifier '+colors.dim(' (Text | URL |')+colors.dim(' Property Value')+colors.dim(')'), () => {
			 //it("'ABC123'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.identifier = 'ABC123';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'http://www.google.com/ID/ABC123'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.identifier = 'http://www.google.com/ID/ABC123';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})

			 //it("[Property Value]"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.identifier = {};
				 //model.maxValue = 10;
				 //model.measurementTechnique = "Zung Scale";
				 //model.minValue = 0;
				 //model.propertyID = 'ABC123';
				 //model.unitCode = 'OHM';
				 //model.unitText = 'Electrical Resistance';
				 //model.value = '1';
				 //let valueRef = JSON.parse(JSON.stringify(model));
				 //model.valueReference = valueRef;
				 //let isValid = Thing.validate(model, Thing.schema.propertyValue);
				 //assert.equal(isValid, true);
			 //})


			 //it("true"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.identifier = true;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.identifier = 1337;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.identifier = [];
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.identifier = {};
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('image '+colors.dim(' (URL) '), function() {
			 //it("'https://www.google.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.image = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'mailto:some@email.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.image = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'www.google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = 'www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = 'google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = 'google';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = true;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = 1337;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = [];
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.image = {};
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('mainEntityOfPage '+colors.dim(' (URL | ')+colors.red.dim('Creative Work')+colors.dim(')'), ()=> {

			 //it("'https://www.google.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'mailto:some@email.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'www.google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 'www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 'google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 'google';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = true;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = 1337;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = [];
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.mainEntityOfPage = {};
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('name '+colors.dim(' (Text) '), function() {
			 //it("'Jose'"+colors.dim(" (true) "), function() {
				 //let model = {};
				 //model.name = 'Jose';
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.name = true;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.name = 1337;
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.name = [];
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let model = {};
				 //model.name = {};
				 //let isValid = Thing.validate(model, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('potentialAction '+colors.dim(' (')+colors.red.dim('Potential Action')+colors.dim(') '), ()=> {
			 //it("'TODO'"+colors.dim(" (true) "), function() {
				 //assert.equal(true, true);
			 //})
		 //})

		 //describe('sameAs '+colors.dim(' (URL) '), function() {
			 //it("'https://www.google.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.sameAs = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'mailto:some@email.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.sameAs = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'www.google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = 'www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = 'google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = 'google';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = true;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = 1337;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = [];
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.sameAs = {};
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})


		 //describe('url '+colors.dim(' (URL) '), function() {
			 //it("'https://www.google.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.url = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'mailto:some@email.com'"+colors.dim(" (true) "), function() {
				 //let valid = {};
				 //valid.url = 'https://www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, true);
			 //})
			 //it("'www.google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = 'www.google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google.com'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = 'google.com';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("'google'"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = 'google';
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("true"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = true;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("1337"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = 1337;
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("[]"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = [];
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
			 //it("{}"+colors.dim(" (false) "), function() {
				 //let valid = {};
				 //valid.url = {};
				 //let isValid = Thing.validate(valid, Thing.schema.thing);
				 //assert.equal(isValid, false);
			 //})
		 //})



	 //});


		//[>  describe('Thing.isNumber(value)', function() {<]
		////it('should return true if value is a number, false otherwise', function() {
		////assert.equal(Thing.isNumber(1), true);
		////assert.equal(Thing.isNumber('string'), false);
		////assert.equal(Thing.isNumber(''), false);
		////assert.equal(Thing.isNumber(true), false);
		////assert.equal(Thing.isNumber(false), false);
		////assert.equal(Thing.isNumber([]), false);
		////assert.equal(Thing.isNumber({}), false);
		////assert.equal(Thing.isNumber(null), false);
		////assert.equal(Thing.isNull(undefined), false);

		//////TODO: make test for this static method
		//////assert.equal(Thing.validateInputType('number', 1, 'whatever'), true)
		////});
		////});
		////describe('Thing.isString(value)', function() {
		////it('should return true if value is string, false otherwise', function() {
		////assert.equal(Thing.isString(1), false);
		////assert.equal(Thing.isString('string'), true);
		////assert.equal(Thing.isString(''), true);
		////assert.equal(Thing.isString(true), false);
		////assert.equal(Thing.isString(false), false);
		////assert.equal(Thing.isString([]), false);
		////assert.equal(Thing.isString({}), false);
		////assert.equal(Thing.isString(null), false);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});
		////describe('Thing.isBoolean(value)', function() {
		////it('should return true if value is boolean, false otherwise', function() {
		////assert.equal(Thing.isBoolean(1), false);
		////assert.equal(Thing.isBoolean('string'), false);
		////assert.equal(Thing.isBoolean(''), false);
		////assert.equal(Thing.isBoolean(true), true);
		////assert.equal(Thing.isBoolean(false), true);
		////assert.equal(Thing.isBoolean([]), false);
		////assert.equal(Thing.isBoolean({}), false);
		////assert.equal(Thing.isBoolean(null), false);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});
		////describe('Thing.isArray(value)', function() {
		////it('should return true if value is array, false otherwise', function() {
		////assert.equal(Thing.isArray(1), false);
		////assert.equal(Thing.isArray('string'), false);
		////assert.equal(Thing.isArray(''), false);
		////assert.equal(Thing.isArray(true), false);
		////assert.equal(Thing.isArray(false), false);
		////assert.equal(Thing.isArray([]), true);
		////assert.equal(Thing.isArray({}), false);
		////assert.equal(Thing.isArray(null), false);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});
		////describe('Thing.isObject(value)', function() {
		////it('should return true if value is plain object, false otherwise', function() {
		////assert.equal(Thing.isObject(1), false);
		////assert.equal(Thing.isObject('string'), false);
		////assert.equal(Thing.isObject(''), false);
		////assert.equal(Thing.isObject(true), false);
		////assert.equal(Thing.isObject(false), false);
		////assert.equal(Thing.isObject([1,2,3]), true);
		////assert.equal(Thing.isObject({}), true);
		////assert.equal(Thing.isObject({ "hello" : "world"}), true);
		////assert.equal(Thing.isObject({ hello : "world"}), true);
		////assert.equal(Thing.isObject({ greeting : {hello: "world"}}), true);
		////assert.equal(Thing.isObject(null), false);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});
		////describe('Thing.isPlainObject(value)', function() {
		////it('should return true if value is plain object, false otherwise', function() {
		////assert.equal(Thing.isPlainObject(1), false);
		////assert.equal(Thing.isPlainObject('string'), false);
		////assert.equal(Thing.isPlainObject(''), false);
		////assert.equal(Thing.isPlainObject(true), false);
		////assert.equal(Thing.isPlainObject(false), false);
		////assert.equal(Thing.isPlainObject([]), false);
		////assert.equal(Thing.isPlainObject({}), true);
		////assert.equal(Thing.isPlainObject({ "hello" : "world"}), true);
		////assert.equal(Thing.isPlainObject({ hello : "world"}), true);
		////assert.equal(Thing.isPlainObject({ greeting : {hello: "world"}}), true);
		////assert.equal(Thing.isPlainObject(null), false);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});

		////describe('Thing.isNull(value)', function() {
		////it('should return true if value is null, false otherwise', function() {
		////assert.equal(Thing.isNull(1), false);
		////assert.equal(Thing.isNull('string'), false);
		////assert.equal(Thing.isNull(''), false);
		////assert.equal(Thing.isNull(true), false);
		////assert.equal(Thing.isNull(false), false);
		////assert.equal(Thing.isNull([]), false);
		////assert.equal(Thing.isNull({}), false);
		////assert.equal(Thing.isNull(null), true);
		////assert.equal(Thing.isNull(undefined), false);
		////});
		////});
		////describe('Thing.isEmpty(value)', function() {
		////it('should return true if value is string, false otherwise', function() {
		////assert.equal(Thing.isEmpty(1), false);
		////assert.equal(Thing.isEmpty('string'), false);
		////assert.equal(Thing.isEmpty(''), true);
		////assert.equal(Thing.isEmpty(true), false);
		////assert.equal(Thing.isEmpty(false), false);
		////assert.equal(Thing.isEmpty([]), true);
		////assert.equal(Thing.isEmpty({}), true);
		////assert.equal(Thing.isEmpty(null), true);
		////assert.equal(Thing.isEmpty(undefined), true);
		////});
		////});

		////describe('Thing.isValidJSONInput(value)', function() {
		////it('should return true if value is JSON supported, false otherwise', function() {
		////assert.equal(Thing.isValidJSONInput(1), true);
		////assert.equal(Thing.isValidJSONInput('string'), true);
		////assert.equal(Thing.isValidJSONInput(''), true);
		////assert.equal(Thing.isValidJSONInput(true), true);
		////assert.equal(Thing.isValidJSONInput(true), true);
		////assert.equal(Thing.isValidJSONInput([]), true);
		////assert.equal(Thing.isValidJSONInput({}), true);
		////assert.equal(Thing.isValidJSONInput(null), true);
		////assert.equal(Thing.isValidJSONInput(undefined), false);
		////});
		////});
		////describe('Thing.isURL(value)', function() {
		////it('should return true if value is a valid URL, false otherwise', function() {
		////assert.equal(Thing.isURL('www.google.com'), true);
		////assert.equal(Thing.isURL('google.com'), true);
		////assert.equal(Thing.isURL('http://google.com'), true);
		////assert.equal(Thing.isURL('https://google.com'), true);
		////assert.equal(Thing.isURL('https://google.com/something'), true);
		////assert.equal(Thing.isURL('https://google.com/something?value=true'), true);
		////assert.equal(Thing.isURL(1), false);
		////assert.equal(Thing.isURL('string'), false);
		////assert.equal(Thing.isURL(''), false);
		////assert.equal(Thing.isURL(true), false);
		////assert.equal(Thing.isURL(true), false);
		////assert.equal(Thing.isURL([]), false);
		////assert.equal(Thing.isURL({}), false);
		////assert.equal(Thing.isURL(null), false);
		////assert.equal(Thing.isURL(undefined), false);
		////});
		//[>});<]
		//[>    describe('Thing.model', function() {<]
		////it('should return the serialized version of the class model', function() {
		////thing.description = 'description'
		////assert.equal(Thing.model(thing).description, 'description');
		////});
		//[>});<]

		//[>    describe('Thing.unsetProperties', function() {<]
		////it('should return the instance empty properties (array form)', function() {
		////let test = [];
		////test.push('additionalType');
		////test.push('alternateName');
		////test.push('disambiguatingDescription');
		////test.push('image');
		////test.push('mainEntityOfPage');
		////test.push('potentialAction');
		////test.push('sameAs');
		////test.push('url');
		////assert.deepStrictEqual(Thing.unsetProperties(thing), test);
		////});
		////it('should return the instance empty properties (object form)', function() {
		////let test = {};
		////test['additionalType'] = '';
		////test['alternateName'] = '';
		////test['disambiguatingDescription'] = '';
		////test['image'] = '';
		////test['mainEntityOfPage'] = '';
		////test['potentialAction'] = '';
		////test['sameAs'] = '';
		////test['url'] = '';
		////assert.deepStrictEqual(Thing.unsetProperties(thing, 'object'), test);
		////});
		////});
		////describe('Thing.assignedProperties', function() {
		////it('should return the instance empty properties (array form)', function() {
		////let test = [];
		////test.push('description');
		////test.push('identifier');
		////test.push('name');
		////test.push('type');
		////assert.deepStrictEqual(Thing.assignedProperties(thing, 'array'), test);
		////});
		////it('should return the instance empty properties (object form)', function() {
		////let test = {};
		////test['description'] = 'description';
		////test['identifier'] = '1234';
		////test['name'] = 'Jose Barrios';
		////test['type'] = 'Thing';
		////assert.deepStrictEqual(Thing.assignedProperties(thing, 'object'), test);
		////});
		////});

		//[>describe('Thing.keys', function() {<]
		////it('should return the object key names in array', function() {
		////assert.equal(Thing.keys(thing).includes('description'), true);
		////});
		////});

		////describe('Thing.values', function() {
		////it('should return the object values in array', function() {
		////thing.description = 'description';
		////assert.equal(Thing.values(thing).includes('description'), true);
		////});
		////});

		////describe('Thing.isInstance', function() {
		////it('should return the true if param is an instance of this class', function() {
		////assert.equal(Thing.isInstance(thing), true);
		////assert.equal(Thing.isInstance({}), false);
		////});
		////});

		////describe('Thing.type', function() {
		////it('should return the type of this class\n', function() {
		////assert.equal(Thing.type, 'Thing');
		////});
		////});


	//});


	//describe('Properties:', function() {

		//[>    describe('thing.model', function() {<]
		////it('should return the instance model', function() {
		////assert.equal(thing.model.description, 'description');
		////});
		////});


		////describe('thing.type', function() {
		////it('should return the class type', function() {
		////assert.equal(thing.type, 'Thing');
		////assert.equal(thing.type, Thing.type);
		////});
		////});


		////describe('thing.additionalType', function() {
		////it('should only allow value to be set if it is of type string (url)', function() {
		////let valid = 'http://google.com';
		////thing.additionalType = valid;
		////assert.equal(thing.additionalType, valid);
		////let invalid = 1;
		////thing.additionalType = invalid;
		////assert.notEqual(thing.additionalType, invalid);
		////assert.equal(thing.additionalType, valid);
		////});
		////});

		////describe('thing.alternateName', function() {
		////it('should only allow value to be set if it is of type string', function() {
		////let str = 'alternateName';
		////thing.alternateName = str;
		////assert.equal(thing.alternateName, str);
		////});
		////});

		////describe('thing.description', function() {
		////it('should only allow value to be set if it is of type string', function() {
		////let str = 'description';
		////thing.description = str;
		////assert.equal(thing.description, str);
		////});
		////});

		////describe('thing.disambiguatingDescription', function() {
		////it('should only allow value to be set if it is of type string', function() {
		////let str = 'disambiguatingDescription';
		////thing.disambiguatingDescription = str;
		////assert.equal(thing.disambiguatingDescription, str);
		////});
		////});

		////describe('thing.identifier', function() {
		////it('should only allow value to be set if it is of type string', function() {
		////let str = 'identifier';
		////thing.identifier = str;
		////assert.equal(thing.identifier, str);
		////});
		////});

		////describe('thing.image', function() {
		////it('should only allow value to be set if it is of type string (url)', function() {
		////let url = 'google.com';
		////thing.image = url;
		////assert.equal(thing.image, url);
		////});
		////});
		//////TODO
		//////describe('thing.mainEntityOfPage', function() {
		//////it('should only allow value to be set if it is of type string', function() {
		//////let str = 'mainEntityOfPage';
		//////thing.mainEntityOfPage = str;
		//////assert.equal(thing.mainEntityOfPage, str);
		//////});
		//////});
		////describe('thing.name', function() {
		////it('should only allow value to be set if it is of type string', function() {
		////let str = 'name';
		////thing.name = str;
		////assert.equal(thing.name, str);
		////});
		////});
		//////TODO
		//////describe('thing.potentialAction', function() {
		//////it('should only allow value to be set if it is of type string', function() {
		//////let str = 'potentialAction';
		//////thing.potentialAction = str;
		//////assert.equal(thing.potentialAction, str);
		//////});
		//////});
		////describe('thing.sameAs', function() {
		////it('should only allow value to be set if it is of type string (url)', function() {
		////let url = 'google.com';
		////thing.sameAs = url;
		////assert.equal(thing.sameAs, url);
		////});
		////});
		////describe('thing.url', function() {
		////it('should only allow value to be set if it is of type string (url) \n', function() {
		////let url = 'google.com';
		////thing.url = url;
		////assert.equal(thing.url, url);
		////});
		////});

		////});

		////describe('Methods:', function() {

		////describe('#isValidKey', function() {
		////it('should return false if object does not accept key, true otherwise', function() {
		////assert.equal(thing.isValidKey('name'), true);
		////assert.equal(thing.isValidKey('invalid'), false);
		////});
		////});

	//});
/*});*/
