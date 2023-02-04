import rootname from '../../rootname';

import store from '../store';

const { dispatch, getState } = store;

/**
 * Feed route
 *
 * @param {array} data
 * @return {function} Feed function
 */
function feed() {
  return function (req, res) {
    const data = getState().feed;
    res.json(data);
  };

}

export default feed;
