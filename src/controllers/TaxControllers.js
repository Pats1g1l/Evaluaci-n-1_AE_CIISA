class TaxControllers {
  constructor () {
    this.renderTaxTotal = this.renderTaxTotal.bind(this)
  }

  renderTaxes (req, res) {
    res.render('taxes')
  }

  calculateTaxes (capital, tax, term) {
    return ((capital * (tax / 100)) * term)
  }

  renderTaxTotal (req, res) {
    console.log('req.body', req.body)
    const { capital, tax, term } = req.body

    const total = this.calculateTaxes(capital, tax, term)

    res.render('taxes', {
      capital,
      tax,
      term,
      total
    })
    console.log(total)
  }
}

module.exports = TaxControllers
