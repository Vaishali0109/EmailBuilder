const express = require('express');
const multer = require('multer');
const { getEmailLayout, uploadImage, saveEmailConfig } = require('../controllers/emailController');

const router = express.Router();
const upload = multer({ dest: 'public/images/' });

router.get('/getEmailLayout', getEmailLayout);
router.post('/uploadImage', upload.single('image'), uploadImage);
router.post('/uploadEmailConfig', saveEmailConfig);

module.exports = router;
