jest.mock('./getGroups.js');
// eslint-disable-next-line import/first
import { getGroups } from './getGroups';

const fakeRespose = {
  groups: [
    { id: 1, name: 'Data1' },
    { id: 2, name: 'Data2' }
  ]
};

describe('getGroups', () => {
  it('returns data', async () => {
    const data = await getGroups();
    console.log('DATA', data);  //<---- UNDEFINED?
    expect(data).toBeDefined();
    expect(data).toMatchObject(fakeRespose);
  });

  it('handles error', async () => {
    // const data = await getGroups();
    await expect(() => getGroups()).not.toThrow('Failed');
  });
});