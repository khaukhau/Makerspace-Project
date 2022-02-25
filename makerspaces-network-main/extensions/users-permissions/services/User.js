'use strict';

module.exports = {
  /**
   * Promise to fetch authenticated user.
   * @return {Promise}
   */
  fetchAuthenticatedUser(id) {
    return strapi.query('user', 'users-permissions').findOne({ id }, ['role', 'modules_completed', 'modules_completed.displayImage','online_module_modules']); // added modules
  },
};