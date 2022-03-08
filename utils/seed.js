const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomName, randomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {

  console.log('connected');


  
  await User.deleteMany({});
  await Thought.deleteMany({});

  
  const Users = [];

  
  for (let i = 0; i < 20; i++) {
    const username = randomName();
    const email = `${username}@mail.com`;
    const friends = [];

    Users.push({

      username,
      email,
      friends,

    });

  }

  
  await User.collection.insertMany(Users);

  
  const thoughts = []
	for (let i = 0; i < 20; i++) {
		thoughts.push(randomThought());
	}
	await Thought.collection.insertMany(thoughts);


  console.table(thoughts);
  
  console.table(Users);

  console.info('Successfully seeded!');

  process.exit(0);

});
