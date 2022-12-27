import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleVerticalAlignment = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190911055057_Honda-Activa-125-FI-BS6-1.jpg&w=736&h=488&q=75&c=1' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190911055057_Honda-Activa-125-FI-BS6-1.jpg&w=736&h=488&q=75&c=1' />
        <br />
        <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190911055057_Honda-Activa-125-FI-BS6-1.jpg&w=736&h=488&q=75&c=1' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190911055057_Honda-Activa-125-FI-BS6-1.jpg&w=736&h=488&q=75&c=1' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticalAlignment