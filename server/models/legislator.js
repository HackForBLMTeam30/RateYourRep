const Sequelize = require('sequelize');
const db = require('../db');

const Legislator = db.Define('legislator', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: Sequelize.ENUM(Object),
  party: Sequelize.STRING,
  phones: Sequelize.ENUM(String),
  urls: Sequelize.ENUM(String),
  photoUrl: Sequelize.STRING,
  channels: Sequelize.ENUM(Object),
});

module.exports = Legislator;


{
 "kind": "civicinfo#representativeInfoResponse",
 "normalizedInput": {
  "line1": "3146 14th Street",
  "city": "Queens",
  "state": "NY",
  "zip": "11106"
 },
 "divisions": {
  "ocd-division/country:us": {
   "name": "United States",
   "officeIndices": [
    0
   ]
  },
  "ocd-division/country:us/state:ny": {
   "name": "New York",
   "officeIndices": [
    1,
    3
   ]
  },
  "ocd-division/country:us/state:ny/cd:12": {
   "name": "New York's 12th congressional district",
   "officeIndices": [
    2
   ]
  },
  "ocd-division/country:us/state:ny/sldl:36": {
   "name": "New York Assembly district 36",
   "officeIndices": [
    5
   ]
  },
  "ocd-division/country:us/state:ny/sldu:12": {
   "name": "New York State Senate district 12",
   "officeIndices": [
    4
   ]
  }
 },
 "offices": [
  {
   "name": "Vice President of the United States",
   "divisionId": "ocd-division/country:us",
   "levels": [
    "country"
   ],
   "roles": [
    "deputyHeadOfGovernment"
   ],
   "officialIndices": [
    0
   ]
  },
  {
   "name": "U.S. Senator",
   "divisionId": "ocd-division/country:us/state:ny",
   "levels": [
    "country"
   ],
   "roles": [
    "legislatorUpperBody"
   ],
   "officialIndices": [
    1,
    2
   ]
  },
  {
   "name": "U.S. Representative",
   "divisionId": "ocd-division/country:us/state:ny/cd:12",
   "levels": [
    "country"
   ],
   "roles": [
    "legislatorLowerBody"
   ],
   "officialIndices": [
    3
   ]
  },
  {
   "name": "Lieutenant Governor of New York",
   "divisionId": "ocd-division/country:us/state:ny",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "deputyHeadOfGovernment"
   ],
   "officialIndices": [
    4
   ]
  },
  {
   "name": "NY State Senator",
   "divisionId": "ocd-division/country:us/state:ny/sldu:12",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "legislatorUpperBody"
   ],
   "officialIndices": [
    5
   ]
  },
  {
   "name": "NY State Assemblymember",
   "divisionId": "ocd-division/country:us/state:ny/sldl:36",
   "levels": [
    "administrativeArea1"
   ],
   "roles": [
    "legislatorLowerBody"
   ],
   "officialIndices": [
    6
   ]
  }
 ],
 "officials": [
  {
   "name": "Mike Pence",
   "address": [
    {
     "line1": "1600 Pennsylvania Avenue Northwest",
     "city": "Washington",
     "state": "DC",
     "zip": "20500"
    }
   ],
   "party": "Republican Party",
   "phones": [
    "(202) 456-1111"
   ],
   "urls": [
    "https://www.whitehouse.gov/"
   ],
   "photoUrl": "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "mikepence"
    },
    {
     "type": "Twitter",
     "id": "VP"
    }
   ]
  },
  {
   "name": "Kirsten E. Gillibrand",
   "address": [
    {
     "line1": "478 Russell Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(202) 224-4451"
   ],
   "urls": [
    "https://www.gillibrand.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/G/G000555.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "KirstenGillibrand"
    },
    {
     "type": "Twitter",
     "id": "SenGillibrand"
    },
    {
     "type": "YouTube",
     "id": "KirstenEGillibrand"
    }
   ]
  },
  {
   "name": "Charles E. Schumer",
   "address": [
    {
     "line1": "322 Hart Senate Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20510"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(202) 224-6542"
   ],
   "urls": [
    "https://www.schumer.senate.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/S/S000148.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "senschumer"
    },
    {
     "type": "Twitter",
     "id": "SenSchumer"
    },
    {
     "type": "YouTube",
     "id": "SenatorSchumer"
    },
    {
     "type": "YouTube",
     "id": "ChuckSchumer"
    }
   ]
  },
  {
   "name": "Carolyn Maloney",
   "address": [
    {
     "line1": "2308 Rayburn House Office Building",
     "city": "Washington",
     "state": "DC",
     "zip": "20515"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(202) 225-7944"
   ],
   "urls": [
    "https://maloney.house.gov/"
   ],
   "photoUrl": "http://bioguide.congress.gov/bioguide/photo/M/M000087.jpg",
   "channels": [
    {
     "type": "Facebook",
     "id": "RepCarolynMaloney"
    },
    {
     "type": "Twitter",
     "id": "RepMaloney"
    },
    {
     "type": "YouTube",
     "id": "carolynbmaloney"
    }
   ]
  },
  {
   "name": "Kathleen C. Hochul",
   "address": [
    {
     "line1": "Lieutenant Governor of New York State",
     "line2": "NYS State Capitol Building",
     "line3": "",
     "city": "Albany",
     "state": "NY",
     "zip": "12224"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(518) 474-8390"
   ],
   "urls": [
    "http://kathyhochul.com/"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "ltgovhochulny"
    },
    {
     "type": "Twitter",
     "id": "LtGovHochulNY"
    },
    {
     "type": "YouTube",
     "id": "UCNgh6Me2UyKXOuNDCnsCzPg"
    }
   ]
  },
  {
   "name": "Michael Gianaris",
   "address": [
    {
     "line1": "198 State Street",
     "city": "Albany",
     "state": "NY",
     "zip": "12207"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(718) 728-0960"
   ],
   "urls": [
    "http://www.nysenate.gov/senators-committees"
   ],
   "photoUrl": "https://www.nysenate.gov/sites/default/files/styles/160x160/public/%2801-05-11%29%20%20Gianaris-HS-020.jpg?itok=58PTMn0m",
   "emails": [
    "gianaris@nysenate.gov"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "SenatorGianaris"
    },
    {
     "type": "Twitter",
     "id": "SenGianaris"
    }
   ]
  },
  {
   "name": "Aravella Simotas",
   "address": [
    {
     "line1": "Legislative Office Building",
     "line2": "198 State Street",
     "city": "Albany",
     "state": "NY",
     "zip": "12248"
    }
   ],
   "party": "Democratic Party",
   "phones": [
    "(518) 455-5014"
   ],
   "urls": [
    "https://nyassembly.gov/mem/Aravella-Simotas"
   ],
   "photoUrl": "http://nyassembly.gov//mem/pic/036.jpg",
   "emails": [
    "simotasa@nyassembly.gov"
   ],
   "channels": [
    {
     "type": "Facebook",
     "id": "SimotasNY"
    },
    {
     "type": "Twitter",
     "id": "AravellaSimotas"
    }
   ]
  }
 ]
}
