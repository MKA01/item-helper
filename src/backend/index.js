const webServer = require('./services/web-server.js');
const dbConfig = require('./config/database.js');
const defaultThreadPoolSize = 4;
const database = require('./services/database.js');

process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;

async function startup() {
  console.log('Application is starting');

  try {
    console.log('Initializing database module');

    await database.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1);
  }

  try {
    console.log('Initializing web server module');

    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}

startup();


async function shutdown(e) {
  let err = e;

  console.log('Server shutting down');

  try {
    console.log('Closing web server module');

    await webServer.close();
  } catch (e) {
    console.log('An error has occurred during server shutdown', e);

    err = err || e;
  }

  try {
    console.log('Closing database module');

    await database.close();
  } catch (err) {
    console.log('An error has occurred during database shutdown', e);

    err = err || e;
  }

  console.log('Exiting process');

  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

/**
 * Zdarzenia SIGTERM i SIGINT są powiązane z sygnałami wysyłanymi do procesu w celu wyłączenia go, takie jak 'ctrl+c'.
 */
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');

  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
