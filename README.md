# Thing Data Controller 
Data Controller for Thing Class, the most generic type of item.

## Properties


Property | Expected Type | Description
---|---|---
[additionalType](http://schema.org/additionalType) | [URL](http://schema.org/URL) | An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
[alternateName](http://schema.org/alternateName) | [Text](http://schema.org/Text) | An alias for the item. 
[description](http://schema.org/description) | [Text](http://schema.org/text) | A description of the item. 
[disambiguatingDescription](http://schema.org/disambiguatingDescription) | [Text](http://schema.org/text) | A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation. 
[identifier](http://schema.org/identifier) | [PropertyValue](http://schema.org/PropertyValue) or [Text](http://schma.org/text) or [URL](http://schema.org/URL) | The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. 
[image](http://schema.org/image) | [ImageObject](http://schema.org/imageobject) or [URL](http://schema.org/url) | An image of the item. This can be a URL or a fully described ImageObject. 
[mainEntityOfPage](http://schema.org/mainEntityOfPage) | [CreativeWork](http://schema.org/CreativeWork) or [URL](http://schema.org/url) | Indicates a page (or other CreativeWork) for which this thing is the main entity being described. 
[name](http://schema.org/name) | [Text](http://schema.org/text) | The name of the item. 
[potentialAction](http://schema.org/potentialAction) | [Action](http://schema.org/action) | Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role. 
[sameAs](http://schema.org/sameAs) | [URL](http://schema.org/url) | URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website. 
[subjectOf](http://schema.org/subjectOf) | [CreativeWork](http://schema.org/creativework) or [Event](http://schema.org/event)  | A CreativeWork or Event about this Thing.. 
[url](http://schema.org/url) | [URL](http://schema.org/url) | The url of the item. 


## Static methods



##### isNumber()

Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Number, and returns true if it is, false otherwise.

Example:
```js
//Checks if the passed value is of type number
Thing.isNumber(1);//true
Thing.isNumber('nope');//false
```

---
##### isString()
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type String, and returns true if it is, false otherwise.

Example:
```js
//Checks if the passed value is of type number
Thing.isString('yes');//true
Thing.isString(1);//false
```

---
##### isBoolean() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Boolean, and returns true if it is, false otherwise.

Example:
```js
//Checks if the passed value is of type number
Thing.isBoolean(true);//true
Thing.isBoolean(1);//false
```

---
##### isArray() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Array, and returns true if it is, false otherwise.

Example:
```js
//Checks if the passed value is of type number
Thing.isArray([]);//true
Thing.isArray(1);//false
```

---
##### isObject() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Object, and returns true if it is, false otherwise.

Example:
```js
//Checks if the passed value is of type number
Thing.isObject({});//true
Thing.isObject([1,2,3]);//true
Thing.isObject(1);//false
```


---
##### isPlainObject() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type PlainObject, and returns true if it is, false otherwise.
Example:
```js
//Checks if the passed value is of type number
Thing.isPlainObject({'one' : 'two'});//true
Thing.isPlainObject([1,2,3]);//false
Thing.isPlainObject(1);//false
```

---
##### isNull() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Null, and returns true if it is, false otherwise.
Example:
```js
//Checks if the passed value is of type number
Thing.isNull(null);//true
Thing.isNull([1,2,3]);//false
Thing.isNull(1);//false
```


---
##### isEmpty() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is of type Empty, and returns true if it is, false otherwise.
Example:
```js
//Checks if the passed value is of type number
Thing.isEmpty([]);//true
Thing.isEmpty([1,2,3]);//false
Thing.isEmpty(1);//false
```


##### isValidJSONInput() 
Parameter |  Returns | Description
---|---|---
Any | Boolean | Tests if the value passed is valid JSON, and returns true if it is, false otherwise.
Example:
```js
//Checks if the passed value is of type number
Thing.isValidJSONInput({'one':'two'});//true
Thing.isValidJSONInput([1,2,3]);//false
Thing.isValidJSONInput(1);//false
```



