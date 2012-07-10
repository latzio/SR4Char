function Character() {
  var character = {};
  character.profile = {
      realName: 'John Doe',
  }
  character.attributes = { 
      body: 1,
      agility: 1,
      reaction: 1,
      strength: 1,
      charisma: 1,
      intuition: 1,
      logic: 1,
      willpower: 1,
      edge: 1,
      essense: 1,
      initiative: 1,
      magic: 1,
  };
  character.skills = {
      archery: 0,
      automatics: 0,
      blades: 0,
      clubs: 0,
      escapeArtist: 0,
      forgery: 0,
      gunnery: 0,
      gymnastics: 0,
      heavyWeapons: 0,
      infiltration: 0,
      locksmith: 0,
      longarms: 0,
      palming: 0,
      pistols: 0,
      throwingWeapons: 0,
      unarmedCombat: 0,
  };
 
  return character;
}
