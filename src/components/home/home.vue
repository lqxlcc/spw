<template>
    <div class="home">
        <div class="head"></div>
        <div class="homeBox">
            <!-- <div class="box">
                用户名:<input type="text" />
                密  码:<input type="password" />
            </div> -->
            <!-- <div class="content" v-for="(item,index) in dataset">
                <p>{{item.has_egg}}</p>
                <p>{{item.has_vote}}</p>
                <p>{{item.is_owner}}</p>
                <p>{{item.past_time}}</p>
                <p>{{item.real_name}}</p>
                <p>{{item.type_id}}</p>
                <p>{{item.title}}</p>
                <p>{{item.vote_id}}</p>
                <p>{{item.title}}</p>
            </div> -->
            <div class="box">
                <div class="de1">
                    <p>用户名:<input type="text" /></p>
                    <p>密  码:<input type="password" /></p>
                    <button>queding</button>
                </div>
                <div class="de2"></div>
                <div class="de3"></div>
            </div>
        </div>
        <div class="foot"></div>
    </div>

</template>
<script>
    import axios from 'axios';
    import http from '../../utils/reqAjax.js'
    import '../../sass/base.scss';
    import './home.scss';
    import slider from 'vue-concise-slider'
    // import myHead from '../head/head.vue';
    // import myFoot from '../foot/foot.vue';
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
   
    export default{
        data(){
            return {
                dataset:[]
            }
             
        },
        mounted(){
            // http.get('api/vote/list',{user_id:1}).then((res)=>{
            //     console.log(res.data.VoteList);
            //     this.dataset = res.data.VoteList;
            // })
            var url = `api/vote/list?user_id=1`;
            http.get({url:url}).then((res)=>{
                console.log(res.data.VoteList);
                this.dataset = res.data.VoteList;
            })
            // http.post({url:'api/vote/top',params:{username:this.uname,password:this.upsw}}).then(response => {
            //     console.log(response);
            // }
        },  
        methods:{
           
        }
    }
</script>
