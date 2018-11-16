import React from 'react';
import { Feed, Card, Icon, Image, Container } from 'semantic-ui-react';
import axios from 'axios';



class Profile extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
    .then(res => {
      this.setState({ posts: res.data })
    })
  }

  ProfileCard = () => (
    this.state.profile( p => (
      <Card textAlign='left' >
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

  ProfilePosts = () => (
    this.state.posts( p => (
      <Container>
      <Card centered raised fluid>
        <Feed.Event>
          <Feed.Label>
            <Image src={ p.avatar } size='mini' circular />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary as='h4'>
            <a>{ p.first_name } { p.last_name }</a> posted on their page
            </Feed.Summary>
            <Feed.Extra text>
              { p.content }
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                { Math.floor((Math.random() * 100) + 1) } Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Card>
      <br />
    </Container>
    ))
  )

  render() {
    return(
      <Container>
        <div class='profile'>
          {this.ProfileCard()}
        </div>
        <div class='posts'>
          {this.ProfilePosts()}
        </div>
      </Container>

    )
  }

}

export default Profile;
