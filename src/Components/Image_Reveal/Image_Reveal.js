import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const RevealExampleRotateLeft = () => (
  <Reveal animated='rotate left'>
    <Reveal.Content visible>
      <Image circular size='large' src='https://www.motorbeam.com/wp-content/uploads/Honda-Activa-125-BS6-Review-Test-Ride.jpg' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='large' src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FReviews%2FHonda-Activa-125-front-static.jpg&c=0' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleRotateLeft