import FacebookButton from '.'
import '../../../index.css'

describe('<FacebookButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FacebookButton />)
  })
})
