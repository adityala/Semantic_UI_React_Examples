import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveRight = () => (
  <Reveal animated='move right'>
    <Reveal.Content visible>
      <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FReviews%2FHonda-Activa-125-front-static.jpg&c=0' size='large' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190911055057_Honda-Activa-125-FI-BS6-1.jpg&w=736&h=488&q=75&c=1' size='large' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMoveRight