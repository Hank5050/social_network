const reactions = [

  'That sounds awesome!',
  'Great Job!',
  'I wouldnt have done it that way!',
  'I definately do not agree!',
  'I Feel the exact same way!',
  'That is incorrect',
  'You might be right!',
  'I can see where you are headed..',
  'You might want to re-check your work!',
  'That does not look correct!',
  'I will have to look at this more!',
  'You might be on to something...'

];

const usernames = [

    'Josh',
    'Ryan',
    'Courtney',
    'Damon',
    'Brad',
    'Jimmy',
    'Tyler',
    'Maria',
    'Lauren',
    'Mary',
    'Dre',
    'Timothy',
    'Axel',
    'Mark',
    'Alejandro',
    'Ariel',
    'Mila',
    'Ally',
    'Jeff',
    'Eric',
    'Nathan',
    'Bob',
    'Billy',
    'Sandra',
    'John',
    'Tim',
    'Brian',
    
  ];
  
  
  const thoughts = [

    'Javascript is HARD!',
    'McDonalds is so good!',
    'Lost Ark is my favorite game!',
    'I am almost done with the bootcamp!',
    'Elden ring is a great game!',
    'I am on my last project in the bootcamp!',
    'Im about to graduate!',
    'I cannot stand facebook!',
    'The new TikTok filter is amazing!',
    'Instagram has fallen off lately!',
    'I love Steak!'

  ];
  
  
  const randomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const randomThought = () => {
    
    const result = {
      
      thoughtText: randomArrItem(thoughts),
      username: randomArrItem(usernames),
      reactions: {
        reactionBody: randomArrItem(reactions),
        username: randomArrItem(usernames),
        
      },
    };
    
    return result;
    
  };
  
  const randomName = () =>
    `${randomArrItem(usernames)}`;
  
  module.exports = { randomName, randomThought };