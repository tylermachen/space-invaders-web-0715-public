var Spaceship = function(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
  this.crew.length === 0 ? this.docked = true : this.docked = false;
  for (var i = 0; i < crew.length; i++) { crew[i].currentShip = this; }
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.phasersCharge = 'uncharged';
};
