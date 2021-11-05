<template>
    <div class="d-flex flex-column col-12 px-3 back-color">
        <div class="d-flex flex-row p-2">
            <h2 class="title">
                General
            </h2>
            <div class="d-flex flex-column  ml-a mt-4 text-time">
                <span v-if="getCreatedDate!='Invalid Date'" >
                    Created At:  {{getCreatedDate}}
                </span>
                <span v-if="getEncodedDate!='Invalid Date'">
                    Encoded At: {{getEncodedDate}}
                </span>    
            </div>
        </div>
        <div class="d-flex flex-row border-top pt-3" v-if="vod.sourceProxy">
            <div class="col-6 ">
                <video
                    id="video"
                    :key="vod.sourceProxy.proxyUrl"
                    :width="widthResize"
                    :height="heightResize"
                    style="object-fit: cover;" 
                    controls
                    :poster="vod.meta.imageUrl"
                >
                    <source
                        :src="vod.sourceProxy.proxyUrl"
                        type="video/mp4"
                    >
                </video>               
            </div> 
            <div class="col-6 pl-2 d-flex flex-column">
                <div class="d-flex flex-row py-1">
                    <div class="col-8 d-flex flex-column">
                        <span class="title-info py-1"> 
                            Title*
                        </span>
                        <div class="text-info nowrap"> 
                            {{vod.meta.title}}
                        </div>  
                    </div>  
                    <div class="col-4 d-flex flex-column">
                        <span class="title-info py-1"> 
                            Type*
                        </span>
                        <div class="text-info title-info"> 
                            Video
                        </div>  
                    </div> 
                </div>
                <div class="d-flex flex-row py-1">
                    <div class="col-12 d-flex flex-column">
                        <span class="title-info py-1"> 
                            Description
                        </span>
                        <div class="text-info"> 
                            <span v-if="vod.meta.description">
                                {{vod.meta.description}}
                            </span>
                            <span v-else>
                                Description
                            </span>        
                        </div>  
                    </div>  
                </div>
                <div class="d-flex flex-row py-1">
                    <div class="col-6 d-flex flex-column">
                        <span class="title-info py-1"> 
                            Group
                        </span>
                        <div class="text-info">
                            <span v-if="vod.meta.group">
                                {{vod.meta.group}}
                            </span>
                            <span v-else>
                                Group
                            </span>                             
                        </div>  
                    </div>  
                    <div class="col-6 d-flex flex-column">
                        <span class="title-info py-1"> 
                            Genre
                        </span>
                        <div class="text-info ">
                            <span v-if="vod.meta.genre">
                                {{vod.meta.genre}}
                            </span>
                            <span v-else>
                                Genre
                            </span>
                             
                        </div>  
                    </div> 
                </div>    
            </div>
        </div>       
    </div>    
</template>

<script>

 
export default {
     props: {
        vod: {
            type: Object,
            required: true               
        }        
    },
    components: {
        
    },
    data() {
		return {
			
		};
	},
    computed: { 
       
        heightResize() {            
            return  (window.innerWidth/3.2)*9/16;    
        },

        widthResize() {            
            return  window.innerWidth/3.2;    
        },
        getCreatedDate(){            
            return this.makeDate(this.vod.createdAt);
        },
        getEncodedDate(){                             
            return this.makeDate(this.vod.encodedAt);
        }
    },
    
    methods: {
        makeDate(date){
            let newDate=new Date(date); 
            let options={ month: 'short', day: 'numeric',timeZoneName : 'short',year: 'numeric', hour:'numeric',minute:'numeric', hour12:true }; 
            return newDate.toLocaleString('en-US',options);    
        }
    }    
}
</script>

<style>

.col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.mt-4 {
    margin-top: 1.5rem;
}

.p-2 {
    padding: 0.5rem;
}

.pt-3 {
    padding-top: 1rem;
}

.pr-2 {
    padding-right: 0.5rem;
}

.pl-2 {
    padding-left: 0.5rem;
}



.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.px-3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.border-top {
    border-top: 2px solid lightgray;
}

.text-info {
    border: 2px solid lightgray;
    text-align: left;
    border-radius: 6px;
    padding: 0.5rem 0.25rem;
    margin-right: 0.5rem;
    overflow-x: hidden;    
}

.nowrap {
    white-space: nowrap;
}

.text-time {
    text-align: left;
    font-weight: bold;
    font-size: 0.9rem;
}

.title-info {
    font-weight: bold;
    text-align: left;
}

.back-color{
    background-color: white;
    height: 92vh;
}
</style>

