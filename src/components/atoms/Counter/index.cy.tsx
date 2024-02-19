import Counter from '.'
import '../../../index.css'


describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
  })
})
