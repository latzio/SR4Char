var character = null;

function renderCharacter(c, element)
{
  element.innerHTML = '';
  
  var profileHTML = '';
  profileHTML += '<div id="character-header">' 
                 + '<p><h2>' + c.profile.realName + '</h2></p>'
                 + '</div>';

  var attributesHTML = '<div id="character-attributes" class="section">'
                     + '<div id="character-attributes-header" class="header">Attributes</div>';
  for (var attribute in c.attributes) {
    attributesHTML += '<p>' + attribute + ': <input type="text" id="character-attributes-' + attribute + '" value="' + c.attributes[attribute] + '"></p>'
  }
  attributesHTML += '</div>';
  
  var skillsHTML = '<div id="character-skills" class="section">'
                   + '<div id="character-skills-header" class="header">Skills</div>';
  for (var skill in c.skills) {
    skillsHTML += '<p>' + skill + ': <input type="text" id="character-skills-' + skill + '" value="' + c.skills[skill] + '"></p>'
  }
  skillsHTML += '</div>';

  element.innerHTML = profileHTML + attributesHTML + skillsHTML;
}

function init()
{
  var jsonChar = localStorage.getItem('sr4char');
  character = jsonChar ? JSON.parse(jsonChar) : new Character();

  renderCharacter(character, document.getElementById('character'))
}

function reset()
{
  character = new Character();
}

function save()
{
  for (var attribute in character.attributes) {
    character.attributes[attribute] = document.getElementById('character-attributes-' + attribute).value;
  }
  for (var skill in character.skills) {
    character.skills[skill] = document.getElementById('character-skills-' + skill).value;
  }
  localStorage.setItem('sr4char', JSON.stringify(character));
}
