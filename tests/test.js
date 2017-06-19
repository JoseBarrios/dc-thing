'use strict'

var assert = require('assert');
var Thing = require('../index.js');

var model = {};
model.name = 'Jose Barrios';
model.identifier = '12334';
model.additionalType = '';
model.alternateName = '';
model.description = "";
let thing = new Thing(model);

describe('thing.name', function() {
	it('should return the name of the thing', function() {
    console.log(thing.serialize())
		assert.equal(thing.additionalType, undefined);
	});
});
