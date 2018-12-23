/**
 * Here we can define schema
 */

interface CustomerSchema {
  id?: String;
  type: Number;
  name: String;
  country: String;
  websiteUrl?: String;
  numberOfEmployees?: Number;
  contractExpiryDate?: String;
  annualTurnover?: Number;
  complianceChecked?: Boolean;
}

const CustomersData: CustomerSchema[] = [
    {
      "id": "5b7fb4583cb160a0409a1a1b",
      "type": 1,
      "name": "Lula",
      "country": "Sweden",
      "websiteUrl": "http://Stanley.com",
      "numberOfEmployees": 6,
      "contractExpiryDate": "2018-11-01T08:01:49 -01:00"
    },
    {
      "id": "5b7fb458054682d9d4664934",
      "type": 1,
      "name": "Willie",
      "country": "Denmark",
      "websiteUrl": "http://Chandler.com",
      "numberOfEmployees": 13,
      "contractExpiryDate": "2018-11-23T11:40:53 -01:00"
    },
    {
      "id": "5b7fb45862361f38f7e0781e",
      "type": 1,
      "name": "Bridges",
      "country": "Sweden",
      "websiteUrl": "http://Laurie.com",
      "numberOfEmployees": 9,
      "contractExpiryDate": "2018-12-04T07:28:08 -01:00"
    },
    {
      "id": "5b7fb458c59b6073e7d04b42",
      "type": 2,
      "name": "Kathleen",
      "country": "Sweden",
      "websiteUrl": "http://Brandie.com",
      "numberOfEmployees": 16,
      "contractExpiryDate": "2018-08-27T03:34:01 -02:00",
      "annualTurnover": 563545,
      "complianceChecked": true
    },
    {
      "id": "5b7fb458b1b6913975a09fca",
      "type": 2,
      "name": "Madden",
      "country": "Norway",
      "websiteUrl": "http://Cheri.com",
      "numberOfEmployees": 18,
      "contractExpiryDate": "2018-10-18T09:36:51 -02:00",
      "annualTurnover": 995312,
      "complianceChecked": false
    },
    {
      "id": "5b7fb458c199cd4a3307b467",
      "type": 1,
      "name": "Terrie",
      "country": "Sweden",
      "websiteUrl": "http://Latisha.com",
      "numberOfEmployees": 6,
      "contractExpiryDate": "2018-11-17T05:11:40 -01:00"
    },
    {
      "id": "5b7fb45801e1bf74806f743e",
      "type": 2,
      "name": "Emerson",
      "country": "Norway",
      "websiteUrl": "http://Sally.com",
      "numberOfEmployees": 9,
      "contractExpiryDate": "2018-08-26T06:26:33 -02:00",
      "annualTurnover": 166648,
      "complianceChecked": true
    },
    {
      "id": "5b7fb4589315e713abca9311",
      "type": 2,
      "name": "Alexander",
      "country": "Denmark",
      "websiteUrl": "http://Carolyn.com",
      "numberOfEmployees": 14,
      "contractExpiryDate": "2018-11-06T03:34:20 -01:00",
      "annualTurnover": 171809,
      "complianceChecked": true
    },
    {
      "id": "5b7fb45828522ee3effcdbc3",
      "type": 1,
      "name": "Gould",
      "country": "Norway",
      "websiteUrl": "http://Snow.com",
      "numberOfEmployees": 13,
      "contractExpiryDate": "2018-11-28T02:36:49 -01:00"
    },
    {
      "id": "5b7fb458d494420bff1585c3",
      "type": 2,
      "name": "Katharine",
      "country": "Denmark",
      "websiteUrl": "http://Virginia.com",
      "numberOfEmployees": 10,
      "contractExpiryDate": "2018-10-25T02:32:27 -02:00",
      "annualTurnover": 471539,
      "complianceChecked": true
    }
  ]
  
export default CustomersData;
