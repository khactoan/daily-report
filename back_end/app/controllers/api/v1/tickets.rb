module API
  module V1
    class Tickets < Grape::API
      include API::V1::Defaults

      resource :tickets do
        desc "Return all tickets"
        get "", root: :tickets do
          # Graduate.all 
          [{name: 'a'}, {name: 'b'}].to_json
        end

        desc "Return a ticket"
        params do
          requires :id, type: String, desc: "ID of the ticket"
        end
        get ":id", root: :ticket do
          # Graduate.where(id: permitted_params[:id]).first!
        end
      end
    end
  end
end
