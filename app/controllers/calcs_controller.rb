class CalcsController < ApplicationController
    skip_before_action :authorize, only: :create
    def create
        calculator = Calc.create(calc_params)
        render json: calculator
    end

    private

    def calc_params
        params.permit(:age, :gender, :weight, :height, :neck, :waist, :hip)
    end
end
