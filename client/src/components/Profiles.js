import React from 'react';
import axios from 'axios';
import { Icon, Image, Card, Container } from 'semantic-ui-react';


class Profile extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/profiles')
    .then(res => {
      this.setState({ profiles: res.data })
    })
  }

  ProfileCard = () => (
    this.state.profile( p => (
      <Card>
        <Image src={ p.avatar } size='small' circular />
        <Card.Content>
          <Card.Header>{ p.first_name } { p.last_name }</Card.Header>
          <Card.Description>{ p.description }</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            { Math.floor((Math.random() * 1000) + 1) }
          </a>
        </Card.Content>
      </Card>
    ) )
  )

  render() {
    return(
      <Container>
        <div class='profile'>
          {this.ProfileCard()}
        </div>
      </Container>

    )
  }
}

export default Profile;
