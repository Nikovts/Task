<template>
<div class="main-container">

  <h1 class="heading">Task objectives:</h1>

  <ul class="tasks-list">

    <li>Create a new page for our VOD library to be rendered at.
    </li>

    <li>Use this endpoint: <span class="endpoint">https://stefan7.dev.ioio.tv/broker/vod/list</span> to fetch the entire VOD Library from the backend.
    </li>

    <li>Render the library on the page.
    </li>

    <li>Since the VODs list can be very long, add a pagination with easy to change itemsPerPage count. (should be implemented on the frontend)
    </li>

    <li>When clicking on a VOD item from the list, display some of it's main info [title, description, etc.] on the remaining part of the screen. Note that not every VOD will have every prop present in it's data model. Also render a video player that plays the VOD's hlsUrl.
    </li>

    <li>NOTE: there is no need to follow the task preview's styling exactly, but adding some stylization will be necessary.
    </li>
  </ul>

  <p class="disclaimer">
    <span>* Use the Task Preview page for reference. </span>
    <span>* Use additional libraries if needed.</span>
  </p>
</div>
</template>

<script>
export default {

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.main-container {

  width: 650px;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.heading {
  font-size: 24px;
  padding-top: 40px;
}

.disclaimer {

  font-size: 14px;
  padding: 20px 0 30px 20px;
  text-align: left;
  font-weight: 600;

  span {

    display: block;
  }
}

.tasks-list {

  padding: 20px 20px 0 40px;
  border-radius: 4px;

  li {

    font-size: 18px;
    text-align: left;
    margin-bottom: 14px;
    list-style: decimal;
  }
}

.endpoint {
  background: #ebedf0;
  padding: 10px;
  display: inline-block;
  border-radius: 2px;
  font-weight: bold;
  margin: 0 10px;
}
</style>
