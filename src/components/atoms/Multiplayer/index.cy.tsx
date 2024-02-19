import Multiplayer from '.'
import '../../../index.css'


describe('<Multiplayer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Multiplayer />)
  })
})
