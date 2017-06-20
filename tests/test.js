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

describe('#serialize()', function() {
	it('should return the serialized version of the model', function() {
    assert.equal(Thing.serialize(thing).name, 'Jose Barrios');
	});
});

describe('#getEmptyProperties()', function() {
	it('should return a new object with all the empty properties of this', function() {
    assert.equal(Thing.getEmptyProperties(thing).additionalType, '');
	});
});
