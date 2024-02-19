import Checkbox from '.'
import '../../../index.css'


describe('<Checkbox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Checkbox />)
  })
})
