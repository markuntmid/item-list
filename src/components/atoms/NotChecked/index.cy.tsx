import NotChecked from '.'
import '../../../index.css'


describe('<NotChecked />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NotChecked />)
  })
})
