<template>
    <div class="d-flex flex-column col-12 border-right position-relative">
        <div class="d-flex flex-row">
            <h1 class="title">
                Video Assets
            </h1>             
            <div class="dib p-3 ml-a my-3">
              <span class="mr-2">Video per page</span>
              <span class="dib">
                <span 
                  @click="itemsPerPage = $event.target.innerHTML"                  
                  class="text-active"
                  :class="{ 'text-muted ': itemsPerPage != '10' }"
                >10</span>               
                <span
                  @click="itemsPerPage = $event.target.innerHTML"                  
                  class="text-active"
                  :class="{ 'text-muted': itemsPerPage != '20' }"
                 >20</span>               
              </span>              
            </div>
        </div> 
        <div class="main-list"> 
        <div 
            v-for="(vod,index) in choosenVods" 
            :key="index" 
            class="d-flex flex-row p-1 cursor-pointer " 
            :class="{ 'active-color': choosenItem == vod.id }" 
            @click="changeChoosenItem(vod.id)"
        >
            <div class="col-3 back-image" :style="{ 'background-image': `url(${vod.meta.imageUrl})` }">
                <div v-if="!vod.meta.imageUrl"> 
                    NO IMAGE
                    <br>
                    AVAILABLE
                </div>    
                <div class="position-timer">
                   {{vod.duration}}
                </div>    
            </div>
            <div class="d-flex flex-column col-9"> 
                <div class="d-flex flex-row"> 
                    <div class="title-list cut-text col-10">
                        {{vod.meta.title}}
                    </div>
                    <div class="pt-1">
                        <span class="dot"></span>
                        <span class="dot ml-1"></span>
                        <span class="dot ml-1"></span>
                    </div> 
                </div>   
                <div class="d-flex flex-row col-12 group-genre">
                    <div v-if="vod.meta.group" class="group">
                        {{vod.meta.group}}
                    </div>  
                    <div v-if="vod.meta.genre" class="group ml-2">
                        {{vod.meta.genre}}
                    </div>
                </div>      
            </div>
        </div>
        </div>
        <div class="paginate-absolute"> 
        <paginate            
            v-model="page"
            :page-count="pageCount"
            :page-range="3"
            :margin-pages="2"            
            :click-handler="changePage" 
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"            
        > 
        </paginate>
        </div>  
    </div>
</template>

<script>
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate);

export default {
    props: {
        vods: {
            type: Array,
            required: true                
        }
    },    
    data(){
        return {
            page:1,
            itemsPerPage:10,
            choosenItem:0
        }
    },
    methods: {
        
    },
    computed: { 
        choosenVods(){
            let start=Number(this.page)*this.itemsPerPage-this.itemsPerPage;
            let end=Number(this.page)*this.itemsPerPage;            
            return this.vods.slice(start,end);
        },
        pageCount(){
            if (this.vods.length==0){
                return 1;
            }
            else {
                return Math.ceil(this.vods.length/this.itemsPerPage)
            }
        }
    },    
    mounted(){
        
    },
    methods: {
        changePage: function(page) {
            this.page=page;
        },
        changeChoosenItem(id){
            this.choosenItem=id;
            this.$emit('changeItem', id);
        }
    }

    }
</script>

<style >
.flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -ms-flex-direction: column !important;
  flex-direction: column !important;
}

.col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}
.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 80%;
  flex: 0 0 80%;
  max-width: 80%;
}

.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.p-1 {
    padding: 0.25rem !important;
}

.pt-1 {
    padding-top: 0.25rem !important;
}

.p-3 {
    padding: 1rem;
}

.mr-2 {
    margin-right: 0.5rem !important;
}

.ml-2 {
    margin-left: 0.5rem !important;
}

.ml-1 {
    margin-left: 0.25rem !important;
}

.ml-a {
    margin-left: auto !important;
}

.my-3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.title {
    text-align: left;
    padding-left: 0.25rem;
    height: max-content
}

.title-list {
    text-align: left;    
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: black;    
    font-weight: 600;  
}

.cursor-pointer {
    cursor: pointer;
}

.cut-text { 
  overflow:hidden;
  display:inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.border-right {
    border-right: 2px solid lightgray;   
    background-color: white;
    height: 92vh;
}

.group-genre{
    padding-left: 1rem;    
    margin-top: 0.25rem;
}

.group {
    padding: 0.25rem;
    font-size: 0.7rem;
    height: max-content;
    background-color: #ebedf0;
    border-radius: 3px;
}

.position-relative {
    position: relative !important;
}

.position-timer {
    position: absolute !important;
    font-size: 0.7rem;
    top: 60%;
    left: 65%;
    color: white;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 3px;
    padding: 0.25rem;
}

.img-list{
  object-fit: contain;
  margin: 0 auto;
  border-radius: 4px;
}

.main-list {
    height: 81%;
    overflow: auto;
}

.back-image {
  background:  no-repeat center;  
  border-radius: 4px;
  border: 1px solid lightgray;
  background-size: cover;
  height: 4.5rem;
  position: relative;
}

.dot {
  height: 0.3rem;
  width: 0.3rem;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}

.pagination > li {
    display: inline;
}

.pagination > li:first-child > a, .pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
}

.pagination > li > a, .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}

.paginate-absolute {
   position: absolute;
   top: 91%;
   width: 100%;
   background-color: white; 
   border-top: 2px solid lightgray;
   border-right: 2px solid lightgray;  
}

.dib {
    display: inline-block;
}

.text-active {
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
    padding: 6px;
}
.text-muted {
    cursor: pointer;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 6px;
}
.active-color {
    background-color: #ebedf0;
}
@media screen and (max-width: 1450px) {
.back-image {
  height: 4rem;
  
}   
}

@media screen and (max-width: 1300px) {
  /* .back-image {
  height: 3.5rem;
  
}    */
  .position-timer {
    font-size: 0.6rem;
    
  }
}
@media screen and (max-width: 1150px) {
  .back-image {
  height: 3rem;
  
}   
  .position-timer {
    font-size: 0.5rem;
   
  }
}


</style>