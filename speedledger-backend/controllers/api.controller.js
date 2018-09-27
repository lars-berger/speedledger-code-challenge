const invoices = require('../models/invoices');

const allInvoices = async ctx => {
  ctx.body = invoices;
}

const oneInvoice = async ctx => {
  const invoiceId = ctx.params.invoiceId;

  ctx.body = invoices.filter(e => e.invoiceId == invoiceId);
};

module.exports = {
  allInvoices,
  oneInvoice,
}