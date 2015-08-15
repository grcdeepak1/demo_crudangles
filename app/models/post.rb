class Post < ActiveRecord::Base
  has_many :comments

  default_scope { includes(:comments) }
end
