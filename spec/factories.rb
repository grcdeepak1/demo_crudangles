FactoryGirl.define do


  factory :post do

    title "Greatest Post Everrrr"
    body "Blah blah blah blah so many things to say on the internet."
    author "Me"

  end



  factory :comment do

    body "Commenting on stuff here."
    author "Definitely not me."
    association :post

  end







end