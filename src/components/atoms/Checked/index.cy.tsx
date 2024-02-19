import Checked from '.'
import '../../../index.css'


describe('<Checked />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Checked />)
  })
})
