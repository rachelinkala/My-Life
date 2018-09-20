100.times do 
  Profile.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    description: Faker::MichaelScott.quote,
    avatar: Faker::Avatar.image('set2')
  )
  end
