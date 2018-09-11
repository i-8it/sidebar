import fetch from '../client/action/fetch.js'
import updateDate from '../client/action/updateDate.js'

describe('Dispatchers', () => {

  const reducer = jest.fn().mockImplementation(action => {
    return { lastAction: action.type };
  })
  const store = {};
  store.dispatch = jest.fn().mockImplementation(callback => {
    return callback(date => reducer(date))
  });

  describe('fetch', () => {

    test('should be a function', () => {
      expect(typeof fetch('/restaurant?id=1')).toEqual('function');
    });
    // having issue with js fetch request, suspecting promise handling in jest

  });

  describe('updateDate', () => {

    test('should return a function', () => {
      expect(typeof updateDate()).toBe('function');
    });
    test('should dispatch changeCurrentDate', () => {
      let result = store.dispatch(updateDate(new Date('September 20, 2018')));
      expect(reducer).toBeCalled();
      expect(result.lastAction).toBe('CHANGE_CURRENT_DATE');
    });

  });

});