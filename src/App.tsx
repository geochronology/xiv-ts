// XIV TS App
import React from 'react'
import {
  Grid, Header,

} from 'semantic-ui-react'


const App = () => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row >
          <Header as="h2" textAlign="center" style={{ 'margin-top': 80 }} color="purple">HowDoICraftIt.com</Header>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}

export default App