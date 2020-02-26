import filterClients from './filterClients';

const clients = [
  {
    client_firstname: 'Jim',
    client_surname: 'Brown',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'Dot',
    client_surname: 'Green',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'Kathy',
    client_surname: 'Black',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'JIm',
    client_surname: 'Brown',
    to_char: '05/05/1993'
  }
];

test('filterClients works as expected', () => {
  console.log(filterClients('J', undefined, undefined, clients));

  // expect(filterClients('j', clients).length).toBe(2);
});
