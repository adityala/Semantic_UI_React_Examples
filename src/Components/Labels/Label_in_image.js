import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Hotel',
          icon: 'hotel',
          ribbon: true,
        }}
        src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/Honda-Activa-125-front-static.jpg&c=0'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'blue',
          content: 'Food',
          icon: 'spoon',
          ribbon: true,
        }}
        src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/Honda-Activa-125-front-static.jpg&c=0'
      />
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbonImage