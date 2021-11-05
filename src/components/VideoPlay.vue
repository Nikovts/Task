<template>
    <div>
        <video :key="url" ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';


export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        },
        url: {
            type: String,
        }            
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    watch: { 
      	url: function(newVal, oldVal) {
           
              
                 
                  this.player.options_.sources[0].src=newVal;
                 

             
           
            
        }
      }
}
</script>

<style lang="scss" >
@import "../../node_modules/video.js/dist/video-js"
</style>