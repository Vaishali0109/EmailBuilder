const path = require('path');
const EmailTemplate = require('../models/EmailTemplate');

// Get email layout
exports.getEmailLayout = (req, res) => {
  const filePath = path.join(__dirname, '../views/layout.html');
  res.sendFile(filePath);
};

// Upload image
exports.uploadImage = (req, res) => {
  const filePath = `/images/${req.file.filename}`;
  res.json({ imageUrl: filePath });
};

// Save email template
exports.saveEmailConfig = async (req, res) => {
  try {
    const template = new EmailTemplate(req.body);
    await template.save();
    res.status(201).json({ message: 'Template saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving template', error: err });
  }
};
