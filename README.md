# StackOverflow Answer to [Question][q]

> I'm trying to mock a function and not sure what i'm doing wrong here. I have this function "getGroups"



[getGroups](src/getGroups.js):

```javascript
    export const getGroups = async () => {
      try {
        const groupApiUrl = getDashboardPath(GROUPS_TAB_INDEX);
        const data = await fetch(groupApiUrl, { cache: 'force-cache' });
        const userData = await data.json();
        return userData;
      } catch (error) {
        throw Error(error);
      }
    };

```
[\__\_mocks_\__/getGroups.js](./src/__mocks__/getGroups.js):

```javascript
    export default async () => {
      return {
        groups: [
          { id: 1, name: 'Data1' },
          { id: 2, name: 'Data2' }
        ]
      };
    };
```

[getGroups.test.js](./src/getGroups.test.js): 
```javascript
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
        console.log('DATA', data);  <---- UNDEFINED?
        expect(data).toBeDefined();
        expect(data).toMatchObject(fakeRespose);
      });
    
      it('handles error', async () => {
        // const data = await getGroups();
        await getGroups().toThrow('Failed');
      });
    });
```

[q]: https://stackoverflow.com/questions/60936426/jest-mock-returns-undefined-instead-of-data