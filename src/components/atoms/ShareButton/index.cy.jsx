import ShareButton from '.'
import '../../../index.css'

describe('<ShareButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShareButton />)
  })
})
