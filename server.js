const app = require('./config/express')();
const port = app.get('port');

(async () => {
  const database = require('./api/db/db');
  const User = require('./api/models/user');
  const UserRoles = require('./api/models/userRole');
  const Document = require('./api/models/document');
  const Permission = require('./api/models/permission');
  const UserRolePermission = require('./api/models/userRolePermission');

  try {
    await database.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
})();

app.listen(port, () => {
  console.log(`RUNNING ON PORT:${port}`)
});