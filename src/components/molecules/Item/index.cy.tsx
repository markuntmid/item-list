import Item from '.'
import '../../../index.css'

describe('<Item />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Item />)
  })
})
