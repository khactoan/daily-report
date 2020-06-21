import lodash from 'lodash'

export default {
  addTicket (state, userId) {
    state.tickets.push({
      userId,
      id: (state.tickets.length + 1)
    })
    window.$cookies.set('state', state)
  },
  removeTicket (state, index) {
    state.tickets.splice(index, 1)
    window.$cookies.set('state', state)
  },
  updateTicketName (state, { id, name }) {
    let ticket = lodash.find(state.tickets, { id: Number(id) })
    debugger
    Object.assign(ticket, { name })
    window.$cookies.set('state', state)
  }
}
