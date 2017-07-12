import path from 'path';
import appConfig from './../../../config/appConfig';
import ReactDOMServer from 'react-dom/server';
import SimpleTemplate from 'simple-string-template';
import { BaseController } from 'express-common-controller';

class ReactBaseController extends BaseController {
  constructor() {
    super();
    this._isServerRender = false;
  }

  set isServerRender(isServerRender) { this._isServerRender = isServerRender; }
  get isServerRender() { return this._isServerRender; }
  set title(title) { this._title = title; }
  get title() { return this._title; }

  renderPage(pageElement, pageName, pageData, configData) {
    let data = {
      title: this.title,
      pageContent: this.isServerRender ? ReactDOMServer.renderToString(pageElement) : '',
      pageFile: pageName,
      pageType: pageName + '.default',
      pageData: JSON.stringify(pageData),
      appConfig: JSON.stringify(Object.assign(appConfig, configData))
    };
    this.render(SimpleTemplate.render(path.resolve(__dirname, '../../templates/index.html'), data));
  }
}

export default ReactBaseController;
