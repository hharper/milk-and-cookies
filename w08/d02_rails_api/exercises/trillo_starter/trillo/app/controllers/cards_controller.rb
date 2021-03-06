class CardsController < ApplicationController
  def index
    if params[:completed] == "true"
      @cards = Card.where(completed: true)
    elsif params[:completed] == "false"
      @cards = Card.where(completed: false)
    else
      @cards = Card.all
    render json: @cards
    end
  end

  def show
    @card = Card.find(params[:id])
    render json: @card
  end

  def create
    @card = Card.create(card_params)
    render json: @card
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
    render json: @card
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render nothing: true
  end

  private
  def card_params
    params.require(:card).permit(:description)
  end

end
