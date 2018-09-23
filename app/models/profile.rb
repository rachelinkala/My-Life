class Profile < ApplicationRecord
  has_many :posts

  def self.user_posts
    Post.find_by_sql("
      select posts.*, first_name, last_name, avatar from posts
      left join profiles on profile_id = profiles.id
    ")

  end
end
