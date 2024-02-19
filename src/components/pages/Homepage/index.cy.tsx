import Homepage from '.'
import '../../../index.css'


describe('<Homepage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Homepage />)
  })
})
