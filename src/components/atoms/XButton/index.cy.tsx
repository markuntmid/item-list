import XButton from '.'
import '../../../index.css'

describe('<XButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<XButton />)
  })
})
