import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleTextShorthand = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>

      <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
    </Segment>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
    </Segment>
  </div>
)

export default LoaderExampleTextShorthand