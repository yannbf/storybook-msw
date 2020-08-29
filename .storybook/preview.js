import { worker } from '../src/mocks';

// Check that we are running this in the browser
if (typeof global.process === 'undefined') {
  worker.start()
}