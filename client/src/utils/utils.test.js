import { filterClients } from './filterClients';

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

test('filterClients works with all three parameters', () => {
  expect(filterClients('J', 'B', '1993', clients).length).toBe(1);
});

test('filterClients works with first and last name', () => {
  expect(filterClients('J', 'B', undefined, clients).length).toBe(2);
});

test('filterClients works with only date of birth', () => {
  expect(filterClients(undefined, undefined, '1993', clients).length).toBe(1);
});
