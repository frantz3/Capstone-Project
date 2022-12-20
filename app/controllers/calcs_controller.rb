class CalcsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        calculator = Calc.all
        render json: calculator
    end

    private

    def calc_params
        params.permit(:age, :gender, :weight, :height, :neck, :waist, :hip)
    end
end
