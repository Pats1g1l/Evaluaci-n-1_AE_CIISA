class InterestController {
  constructor () {
    this.renderInterestResult = this.renderInterestResult.bind(this)
  }

  renderInterest (req, res) {
    res.render('interest')
  }

  calculateInterest (invest, tax, years) {
    return ((invest * (tax / 100)) * years)
  }

  renderInterestResult (req, res) {
    console.log('req.body', req.body)
    const { invest, tax, years } = req.body

    const result = this.calculateInterest(invest, tax, years)

    res.render('interest', {
      invest,
      tax,
      years,
      result
    })
    console.log(result)
  }
}

module.exports = InterestController
