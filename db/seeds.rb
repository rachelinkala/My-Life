100.times do 
  profile = Profile.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    description: Faker::MichaelScott.quote,
    avatar: Faker::Avatar.image
  )

    10.times do
      profile.posts.create(
        content: Faker::Hipster.sentences
      )
      end
  end
