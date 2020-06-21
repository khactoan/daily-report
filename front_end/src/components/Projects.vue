<template>
  <div class="container-fluid">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Team size</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Legacy</td>
          <td>4</td>
          <td>
            <a href="/#/today-report" type="button" class="btn btn-success">View</a>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>New Arc</td>
          <td>4</td>
          <td><a href="/#/today-report" type="button" class="btn btn-success">View</a></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Spree</td>
          <td>1</td>
          <td><a href="/#/today-report" type="button" class="btn btn-success">View</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Projects'
}
</script>
