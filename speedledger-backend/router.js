'use strict';
const router = require('koa-router')();

const apiController = require('./controllers/api.controller');

// API: Endpoints for invoices
router.get('/invoices', apiController.allInvoices);
router.get('/invoices/:invoiceId', apiController.oneInvoice);

module.exports = router;
