const EMPTY_STRING = "";

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
    if(!value || value === EMPTY_STRING){this.model.additionalType = undefined}
    else{ this.model.additionalType = value; }
  }

  get alternateName(){ return this.model.alternateName; }
  set alternateName(value){
    if(!value || value === EMPTY_STRING) { this.model.alternateName = undefined}
    else{ this.model.alternateName = value; }
  }

  get description(){ return this.model.description; }
  set description(value){
    if(!value || value === EMPTY_STRING) { this.model.description = undefined }
    else { this.model.description = value; }
  }

  get disambiguatingDescription(){ return this.model.disambiguatingDescription; }
  set disambiguatingDescription(value){
    if(!value || value === EMPTY_STRING) { this.model.disambiguatingDescription = undefined; }
    else { this.model.disambiguatingDescription = value; }
  }

  get identifier(){ return this.model.identifier; }
  set identifier(value){
    if(!value || value === EMPTY_STRING) { this.model.identifier = undefined; }
    else { this.model.identifier = value; }
  }

  get image(){ return this.model.image; }
  set image(value){
    if(!value || value === EMPTY_STRING) { this.model.image = undefined; }
    else{ this.model.image = value; }
  }

  get mainEntityOfPage(){ return this.model.mainEntityOfPage; }
  set mainEntityOfPage(value){
    if(!value || value === EMPTY_STRING){ this.model.mainEntityOfPage = undefined; }
    else { this.model.mainEntityOfPage = value; }
  }

  get name(){ return this.model.name; }
  set name(value){
    if(!value || value === EMPTY_STRING) { this.model.name = undefined; }
    else{ this.model.name = value; }
  }

  get potentialAction(){ return this.model.potentialAction; }
  set potentialAction(value){
    if(!value || value === EMPTY_STRING) { this.model.potentialAction = undefined; }
    else { this.model.potentialAction = value; }
  }

  get sameAs(){ return this.model.sameAs; }
  set sameAs(value){
    if(!value || value === EMPTY_STRING) { this.model.sameAs = undefined; }
    else { this.model.sameAs = value; }
  }

  get url(){ return this.model.url; }
  set url(value){
    if(!value || value === EMPTY_STRING) { this.model.url = undefined; }
    else { this.model.url = value; }
  }




  /////////////////////
  //
  // METHODS
  //
  /////////////////////
  serialize(){
    let string = JSON.stringify(this.model);
    return JSON.parse(string);
  }
}

module.exports = Thing;
