const express = require('express')
const PageController = require('./controllers/PageController')
const TaxControllers = require('./controllers/TaxControllers')

const router = express.Router()

// Controllers
const pageController = new PageController()
const taxControllers = new TaxControllers()

// Routes
router.get('/', pageController.renderHome)
router.get('/tax', taxControllers.renderTaxes)
router.post('/tax', taxControllers.renderTaxTotal)

router.all('*', pageController.renderNotFound)

module.exports = router
