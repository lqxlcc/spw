<template>
    <div class="list">
        <div class="title">投票列表<i class="icon el-icon-shangpin-other"></i></div>
        <div class="content" v-for="(item,index) in dataset">
            <div class="conts">
                <div class="t1">用户:<em>{{item.real_name}}</em><i class="el-icon-star-off"></i></div>
                    <p>投票主题</p>
                    <div class="wz">{{item.title}}</div>
                    <p>{{dataset.voteResultList}}</p>
                    <div class="vmoshi">
                        <label for="" class="lab" style="color:#CDC0B0;font-size:40px;">单选</label>
                        <div v-for="(obj,idx) in dataset[index].voteResultList">
                             <p>
                                <input type="checkbox" class="btnc" :checked = "select_id == idx && select_ids == index" @click="getId(obj,$event)"/>
                                <span v-text='obj.img_path'></span>
                             </p>
                        </div>
                        <!-- <p><input type="checkbox" class="btnc" placeholder="选项2"/></p>
                        <p><input type="checkbox" class="btnc" placeholder="选项3"/></p> -->
                    </div>
                
                    <!-- <p class="imgBox"><img :src="str.url"class="swiper-slide" v-for="str in listImg"></p> -->
   
                <div class="tp" @click="sendPick()">投票</div>
                <!-- <div class="tp">取消投票</div> -->
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
    import './list.scss';
    import http from '../../utils/reqAjax.js';
    export default{
        data(){
            return{
                user_id:window.sessionStorage.getItem('user_id'),
                select_id:-1,
                select_ids:-1,
                send_msg:{},
                dataset:[],
                eggList:[],
                imgList:[
                    {'img_path':"33"},
                    {'img_path':"r33rr"},
                    {'img_path':"uuu22"},
                ],
                obj:[]
                // listImg: [
                //     {url:'../../src/img/1.png'},
                //     {url:'../../src/img/2.png'}
                // ]
            }
        },
        mounted(){
            console.log(this.user_id);
            var url = 'api/vote/list?user_id='+this.user_id;
            http.get({url:url}).then((res)=>{
                this.dataset = res.data.VoteList;
                this.dataset.map((item,index) => {
                    item['voteResultList'].map((obj,idx) => {
                        obj["selectNum"] = idx;
                        obj["selectNums"] = index;
                        // console.log(obj,12222);
                    })
                })

                console.log(this.dataset,13333);

                // console.log(this.dataset,'-------------------');
                // console.log(res.data.VoteList[0].voteResultList[0].item_id); 
                // 这里我不会拿那个数据 我这里只会拿第一个 我不会拿这个
                // this.xiabiao = res.data.VoteList[0].voteResultList[0].item_id;
            })
        },
        methods:{
            sendPick:function(){
                http.post({url:'api/vote',params:{user_id:this.user_id,vote_id:this.send_msg.vote_id,item_ids:[this.send_msg.item_id]}}).then(res => {
                    console.log(res);
                })
            },
            getId(obj,e){

                console.log(obj,191919191);
                this.select_id = obj.selectNum;
                this.select_ids = obj.selectNums;

                this.send_msg = obj;
            }
        }
    }
</script>