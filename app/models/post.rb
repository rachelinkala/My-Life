class Post < ApplicationRecord
  belongs_to :profile

  def self.all_posts
    Post.find_by_sql("
      select posts.*, first_name, last_name, avatar from posts
      left join profiles on profile_id = profiles.id
    ")

  end
end
