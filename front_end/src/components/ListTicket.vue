<template>
  <div>
    <div :id="'ticket-'+index" class="row my-daily-tickets" v-for="(ticket, index) in tickets" v-bind:key="index">
      <div class="col-lg-7">
        <input type="text" class="form-control ticket-name" placeholder="DWP-XXX..."
          :value="ticket.name"
          :data-ticket-id="ticket.id"
          @keyup="updateTicketName">
      </div>
      <div class="col-lg-3">
        <div class="form-group mb-3">
          <select class="form-control">
            <option>None</option>
            <option>In progress</option>
            <option>Done</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="form-group mb-3">
          <button type="button" class="btn btn-danger" @click="removeTicket(index)">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ListTicket',
  computed: {
    tickets () {
      return this.$store.state.tickets
    }
  },
  methods: {
    ...mapMutations([
      'removeTicket'
    ]),
    updateTicketName (e) {
      const ticketName = e.target.value
      const ticketId = e.target.getAttribute('data-ticket-id')

      if (ticketName.trim()) {
        this.$store.dispatch('updateTicketName', {
          id: ticketId,
          name: ticketName
        })
      }
    }
  }
}
</script>
