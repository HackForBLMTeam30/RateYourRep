const db = require('.');
const { Legislator, User } = require('./models');

const legislators = [
  {
    name: 'Mike Pence',
    role: 'Vice President of the United States',
    address: [
      {
        line1: '1600 Pennsylvania Avenue Northwest',
        city: 'Washington',
        state: 'DC',
        zip: '20500',
      },
    ],
    party: 'Republican Party',
    phones: ['(202) 456-1111'],
    urls: ['https://www.whitehouse.gov/'],
    photoUrl:
      'https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'mikepence',
      },
      {
        type: 'Twitter',
        id: 'VP',
      },
    ],
  },
  {
    name: 'Kirsten E. Gillibrand',
    role: 'U.S. Senator',
    address: [
      {
        line1: '478 Russell Senate Office Building',
        city: 'Washington',
        state: 'DC',
        zip: '20510',
      },
    ],
    party: 'Democratic Party',
    phones: ['(202) 224-4451'],
    urls: ['https://www.gillibrand.senate.gov/'],
    photoUrl: 'http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'KirstenGillibrand',
      },
      {
        type: 'Twitter',
        id: 'SenGillibrand',
      },
      {
        type: 'YouTube',
        id: 'KirstenEGillibrand',
      },
    ],
  },
  {
    name: 'Charles E. Schumer',
    role: 'U.S. Senator',
    address: [
      {
        line1: '322 Hart Senate Office Building',
        city: 'Washington',
        state: 'DC',
        zip: '20510',
      },
    ],
    party: 'Democratic Party',
    phones: ['(202) 224-6542'],
    urls: ['https://www.schumer.senate.gov/'],
    photoUrl: 'http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg',
    channels: [
      {
        type: 'Facebook',
        id: 'senschumer',
      },
      {
        type: 'Twitter',
        id: 'SenSchumer',
      },
      {
        type: 'YouTube',
        id: 'SenatorSchumer',
      },
      {
        type: 'YouTube',
        id: 'ChuckSchumer',
      },
    ],
  },
  {
    name: 'Kathleen C. Hochul',
    role: 'Lieutenant Governor of New York',
    address: [
      {
        line1: 'Lieutenant Governor of New York State',
        line2: 'NYS State Capitol Building',
        line3: '',
        city: 'Albany',
        state: 'NY',
        zip: '12224',
      },
    ],
    party: 'Democratic Party',
    phones: ['(518) 474-8390'],
    urls: ['http://kathyhochul.com/'],
    channels: [
      {
        type: 'Facebook',
        id: 'ltgovhochulny',
      },
      {
        type: 'Twitter',
        id: 'LtGovHochulNY',
      },
      {
        type: 'YouTube',
        id: 'UCNgh6Me2UyKXOuNDCnsCzPg',
      },
    ],
  },
  {
    name: 'Aravella Simotas',
    role: 'NY State Assemblymember',
    address: [
      {
        line1: 'Legislative Office Building',
        line2: '198 State Street',
        city: 'Albany',
        state: 'NY',
        zip: '12248',
      },
    ],
    party: 'Democratic Party',
    phones: ['(518) 455-5014'],
    urls: ['https://nyassembly.gov/mem/Aravella-Simotas'],
    photoUrl: 'http://nyassembly.gov//mem/pic/036.jpg',
    emails: ['simotasa@nyassembly.gov'],
    channels: [
      {
        type: 'Facebook',
        id: 'SimotasNY',
      },
      {
        type: 'Twitter',
        id: 'AravellaSimotas',
      },
    ],
  },
];

const users = [
  {
    first_name: 'Seline',
    last_name: 'Cox',
    email: 'scox0@t-online.de',
    password: 'Female',
    address: '62168 Burning Wood Street',
  },
  {
    first_name: 'Jan',
    last_name: 'Nares',
    email: 'jnares1@businesswire.com',
    password: 'Male',
    address: '29 Hanson Crossing',
  },
  {
    first_name: 'Karlan',
    last_name: 'Blakeney',
    email: 'kblakeney2@webs.com',
    password: 'Male',
    address: '96071 Sugar Place',
  },
  {
    first_name: 'Nicko',
    last_name: 'Tokley',
    email: 'ntokley3@diigo.com',
    password: 'Male',
    address: '76276 Magdeline Trail',
  },
  {
    first_name: 'Boris',
    last_name: 'Berringer',
    email: 'bberringer4@alexa.com',
    password: 'Male',
    address: '6 Bultman Hill',
  },
];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  await Promise.all(
    users.map((user) => {
      return User.create(user);
    })
  );
  await Promise.all(
    legislators.map((legislator) => {
      return Legislator.create(legislator);
    })
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${legislators.length} bouquets`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}