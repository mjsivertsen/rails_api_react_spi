class Api::RecipesController < ApplicationController

  def index
    render json: Recipe.all
  end

  def create
    recipe = Recipe.new(recipe_params)
    if recipe.save
      render json: recipe
    else
       render json: {errors: recipe.errors }, status: :unprocessable_entity
    end
  end

  def update
    recipe = Recipe.find(params[:id])
    if recipe.update(recipe_params)
      render json: recipe
    else
      render json: {errors: recipe.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    recipe = Recipe.find(params[:id]).destroy
    render json: recipe.destroy
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description, :rating, :source, :author)
  end


end
