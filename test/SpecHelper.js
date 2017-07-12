import chai from 'chai'
import { jsdom } from 'jsdom';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

const exposedProperties = ['window', 'navigator', 'document'];
global.document = jsdom('');
global.window = document.defaultView;
global.window.Config = { serviceHost: '' };
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

chai.use(sinonChai);
chai.use(chaiEnzyme());
