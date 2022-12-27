import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'

const LabelExampleAttached = () => (
  <Grid columns={3}>
    <Grid.Row>
      <Grid.Column>
        <Segment padded>
          <Label attached='top'>HTML</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom'>CSS</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='top right'>Code</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Segment padded>
          <Label attached='top left'>View</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom left'>User View</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded>
          <Label attached='bottom right'>Admin View</Label>
          <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default LabelExampleAttached