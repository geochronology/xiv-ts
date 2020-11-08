// XIV TS App
import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid, Header, Input,
} from 'semantic-ui-react'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  height: 48px;
  width: 95%;
  max-width: 400px;
`

export const Steve = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column >
          <Header
            as="h2"
            textAlign="center"
            style={{ 'margin-top': 80 }}
            color="purple">
            HowDoICraftIt.com
            </Header>
          <Container style={{ 'margin-top': 40 }}>
            <Button inverted >Hello</Button>
            <Button inverted>Taco</Button>
            <Button inverted>Michigan</Button>
            <Divider inverted />
            <StyledInput placeholder="4 out of 5 dentists agree..." />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
