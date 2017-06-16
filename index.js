class Thing {

  constructor(model){
    model = model || {};
    this.model = model;

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

  get additionalType(){ return this.model.additionalType; }
  set additionalType(value){
    if(!value) return;
    this.model.additionalType = value;
  }

  get alternateName(){ return this.model.alternateName; }
  set alternateName(value){
    if(!value) return;
    this.model.alternateName = value;
  }

  get description(){ return this.model.description; }
  set description(value){
    if(!value) return;
    this.model.description = value;
  }

  get disambiguatingDescription(){ return this.model.disambiguatingDescription; }
  set disambiguatingDescription(value){
    if(!value) return;
    this.model.disambiguatingDescription = value;
  }

  get identifier(){ return this.model.identifier; }
  set identifier(value){
    if(!value) return;
    this.model.identifier = value;
  }

  get image(){ return this.model.image; }
  set image(value){
    if(!value) return;
    this.model.image = value;
  }

  get mainEntityOfPage(){ return this.model.mainEntityOfPage; }
  set mainEntityOfPage(value){
    if(!value) return;
    this.model.mainEntityOfPage = value;
  }

  get name(){ return this.model.name; }
  set name(value){
    if(!value) return;
    this.model.name = value;
  }

  get potentialAction(){ return this.model.potentialAction; }
  set potentialAction(value){
    if(!value) return;
    this.model.potentialAction = value;
  }

  get sameAs(){ return this.model.sameAs; }
  set sameAs(value){
    if(!value) return;
    this.model.sameAs = value;
  }

  get url(){ return this.model.url; }
  set url(value){
    if(!value) return;
    this.model.url = value;
  }

  serialize(){
    let string = JSON.stringify(this.model);
    return JSON.parse(string);
  }
}

module.exports = Thing;
