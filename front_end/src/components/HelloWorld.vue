<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 order-lg-1">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mb-2">Daily report: ToanDK2</h4>
              <form>
                <div class="row">
                  <div class="col-lg-7">
                    <label>Ticket</label>
                  </div>
                  <div class="col-lg-3">
                    <label>Status</label>
                  </div>
                  <div class="col-lg-2">
                    <label>Action</label>
                  </div>
                </div>
                <ListTicket></ListTicket>
                <button type="button" class="btn btn-primary" @click="addTicket">Add ticket</button>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb-3">
                      <label for="example-textarea">Note</label>
                      <textarea class="form-control" rows="5"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mb-2">Preview</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTicket from './ListTicket.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    ListTicket
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations([
      'addTicket'
    ])
  }
}
</script>
