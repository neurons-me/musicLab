import express from 'express';

const app = express();

const netgetGateway = (expectedDomain, callback) => {
  return (req, res, next) => {
    const domainParts = req.headers.host.split(':');
    const domainName = domainParts[0]; // Get the domain name
    req.domainName = domainName; // Attach the domain name to the request object

    if (domainName === expectedDomain) {
      callback(req, res, next); // Call the provided callback function
    } else {
      next(); // Proceed to the next middleware or route handler
    }
  };
};

export default netgetGateway;