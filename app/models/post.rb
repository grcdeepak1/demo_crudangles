class Post < ApplicationRecord
  has_many :comments

  default_scope { includes(:comments) }
end
