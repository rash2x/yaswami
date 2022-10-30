import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'AIRTABLE_TOKEN'
});

const airtable = Airtable.base('appAB6mLnImrAFBWa');

export default airtable;