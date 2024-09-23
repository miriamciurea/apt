const mongoose = require('mongoose');

const ContactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  interest: { type: String },
  moreInfo: { type: String },
  date: { type: Date, default: Date.now },
});

const ContactForm = mongoose.model('ContactForm', ContactFormSchema);

module.exports = ContactForm;
