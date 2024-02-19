import ItemList from '.'
import '../../../index.css'

describe('<ItemList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemList />)
  })
})
