const env = require('./env');
const ExpressCommonControllerRouter = require('express-common-controller').default;

const router = new ExpressCommonControllerRouter(env.controllerPath);

router.get('/diagnostic', 'DiagnosticController#index');
router.get('/diagnostic/version', 'DiagnosticController#version');

router.get('/', 'HomePageController#index');

module.exports = router.routes();
