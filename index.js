const EMPTY_STRING = '';

class Thing {

  constructor(model){
    model = model || {};
    this.computed = {};

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
    this.computed.additionalType = value;
  }

  get alternateName(){ return this.computed.alternateName; }
  set alternateName(value){
    this.computed.alternateName = value;
  }

  get description(){ return this.computed.description; }
  set description(value){
    this.computed.description = value;
  }

  get disambiguatingDescription(){ return this.computed.disambiguatingDescription; }
  set disambiguatingDescription(value){
    this.computed.disambiguatingDescription = value;
  }

  get identifier(){ return this.computed.identifier; }
  set identifier(value){
    this.computed.identifier = value;
  }

  get image(){ return this.computed.image; }
  set image(value){
    this.computed.image = value;
  }

  get mainEntityOfPage(){ return this.computed.mainEntityOfPage; }
  set mainEntityOfPage(value){
    this.computed.mainEntityOfPage = value;
  }

  get name(){ return this.computed.name; }
  set name(value){
    this.computed.name = value;
  }

  get potentialAction(){ return this.computed.potentialAction; }
  set potentialAction(value){
    this.computed.potentialAction = value;
  }

  get sameAs(){ return this.computed.sameAs; }
  set sameAs(value){
    this.computed.sameAs = value;
  }

  get url(){ return this.computed.url; }
  set url(value){
    this.computed.url = value;
  }

  /////////////////////
  //
  // COMPUTED PROPERTIES
  //
  /////////////////////
  get model(){
    return this.computed;
  }

  get emptyProperties(){
    let emptyProperties = {};
    Object.keys(this.computed).forEach(key =>{
      let value = this.computed[key];
      if(!value || value === EMPTY_STRING){
        emptyProperties[key] = value;
      }
    })
    return emptyProperties;
  }
}

module.exports = Thing;
