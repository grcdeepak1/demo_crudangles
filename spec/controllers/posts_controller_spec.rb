require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  let!(:post){ FactoryGirl.create(:post) }
  let(:json){ JSON.parse(response.body) }


  describe 'GET /posts' do

    before do
      get :index, format: :json
    end

    it 'should return a collection including all posts' do

      binding.pry
      expect(json.map{|item| item["id"] }).to include(post.id)

    end


  end

  describe 'GET /posts/:id' do

    before do
      get :show, id: post.id, format: :json
    end

    it 'should return the post of the right ID' do

      expect(json["id"]).to eq(post.id)

    end

    it 'should return the post of the right title' do

      expect(json["title"]).to eq(post.title)

    end

    it 'should return the post with the right body' do

      expect(json["body"]).to eq(post.body)

    end




  end

end
