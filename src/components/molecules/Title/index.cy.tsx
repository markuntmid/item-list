import Title from '.'
import '../../../index.css'

describe('<Title />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Title />)
  })
})
