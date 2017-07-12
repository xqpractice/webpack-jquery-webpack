const apiHost = process.env.API_HOST || "";
const serviceHost = process.env.SERVICE_HOST || "http://localhost";

module.exports = {
  apiHost: apiHost,
  serviceHost: serviceHost
};
