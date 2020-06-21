export default {
  addTicketName ({ commit }, ticketName) {
    commit('addTicketName', {
      ticketName,
      done: false
    })
  },
  updateTicketName ({ commit }, { id, name }) {
    commit('updateTicketName', { id, name })
  }
}
