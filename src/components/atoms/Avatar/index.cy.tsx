import Avatar from '.'
import '../../../index.css'


describe('<Avatar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Avatar />)
  })
})
