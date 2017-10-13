module.exports = {
  people: getPeople(),
  clases: getClases(),
  races: getRaces()
};

function getPeople() {
  return [
    { id: 1, firstName: 'Juan', class: 'Infiltrator', points: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', class: 'Psyquic', points: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', class: 'Juggernaut', points: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', class: 'Warrior', points: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', class: 'Tecnic', points: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', class: 'Psyquic', points: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', class: 'Warrior', points: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', class: 'Rogue', points: 22, location: 'Utah' }
  ];
}

function getClases() {
  return {
    title: 'Aviable clases',
    description: 'All classes are subject to future modifications',
    names:[
      {
        id   : 1,
        name : 'A'
      },
      {
        id   : 2,
        name : 'B'
      },
      {
        id   : 3,
        name : 'C'
      },
      {
        id   : 4,
        name : 'D'
      },
      {
        id   : 5,
        name : 'E'
      }
    ]
  };
}
function getRaces() {
  return {
    title: 'Aviable races',
    description: 'All races are subject to future modifications',
    names:[
      {
        id   : 1,
        name : 'Korrn'
      },
      {
        id   : 2,
        name : 'Klingon'
      },
      {
        id   : 3,
        name : 'Arian'
      },
      {
        id   : 4,
        name : 'Krogan'
      },
      {
        id   : 5,
        name : 'Human'
      },
      {
        id   : 6,
        name : 'Yaang'
      }
    ]
  };
}
