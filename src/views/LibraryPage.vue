<template>
<div class="d-flex flex-row">
    <div class="col-4">
         <List :vods="vods"  @changeItem="changeItem"/>
    </div>    
    <div class="col-8">
         <Show :vod="vod" />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import List from '@/components/List.vue';
import Show from '@/components/Show.vue';

export default {
  name: 'LibraryPage',
  components: {
      List,
      Show
  },
  async created(){
    let response = await axios.get(`https://stefan7.dev.ioio.tv/broker/vod/list`);

    response.data.data.sources.forEach((element,index) => {    
        element.duration=this.setDuration(element); 
        element.id=index;       
    });

    this.vods = response.data.data.sources; 
    this.vod = this.vods[0];     
  },
    data(){
        return {
            vods:[],
            vod:{}
        }
    },
    methods: {
        changeItem(id){
            this.vod=this.vods[id];
        },
        setDuration(element){

            let minutes=Math.floor(element.srcDuration/60000);
            minutes=this.checkForFirstNumber(minutes);

            let seconds=Math.floor((element.srcDuration%60000)/1000);
            seconds=this.checkForFirstNumber(seconds);

            let duration=minutes.toString()+":"+seconds.toString();

            return duration;
        },
        checkForFirstNumber(element){           
            if (element<10){
                element='0'+element;               
            }
            return element;
        }
    }
};
</script>

<style>
.col-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.col-8 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}

</style>
