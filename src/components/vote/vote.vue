<template>
    <div class="vote">
        <div class="title">发起投票</div>
        <div class="box">
            <div class="vtitle">
                <label for="" class="lab">投票主题</label>
                    <textarea v-model="title" rows="3" cols="20" class="vtext" placeholder="填写投票内容说明(2-80字)"></textarea>
            </div>
            <div class="vcheck">
                <label for="" class="lab">投票选项</label>
                <p><input type="text" class="xx" placeholder="选项1" v-model="imgList[0].img_path" @change="getInput"/></p>
                <p><input type="text" class="xx" placeholder="选项2" v-model="imgList[1].img_path" @change="getInput"/></p>
                <p><input type="text" class="xx" placeholder="选项3" v-model="imgList[2].img_path" @change="getInput"/></p>
            </div>
            <div class="vmoshi">
                <label for="" class="lab">选择模式</label>
                <input type="checkbox" class="btnc single" @click="getSing_dubble('single',$event)"/><em>单选</em><input type="checkbox" class="btnc dubble" @click="getSing_dubble('dubble',$event)"/><em>多选</em>
            </div>
            <div class="vtime">
                <label for="" class="lab">截止时间</label>
                <select v-model="select" name="category" id="category" @click.stop= "getValue($event)">
                    <option v-for="(item,index) in category"  :value="item">{{item}}</option>
                </select>
            </div>
            <div class="vmoshi">
                <label for="" class="lab"> 投票隐私</label> 
                <input type="checkbox" class="btnc" /><em>公开</em><input type="checkbox" class="btnc"/><em>匿名<em style="color:#CDBA96;font-size:34px">(发布者可查看投票人)</em></em>
            </div>
            <div class="vbtn">
                <div class="qd" @click="benqd">确定</div>
                <div class="qx">取消</div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
    import './vote.scss';
    import http from '../../utils/reqAjax.js';
    export default{
        data(){
            return{
                user_id:window.sessionStorage.getItem('user_id'),
                title:'',
                imgList:[
                    {img_path:""},
                    {img_path:""},
                    {img_path:""},
                ],
                type:'',
                eggList:[],
                timeDate:1,
                select:1,
                inputNum:0,
                category:[1,3,5,7,15],
                check:false
            }
        },
        mounted(){
            var now = new Date().getTime(); //当前时间
            // var myTime = Date.parse("2014-01-17 08:45:45"); //比较的时间
            var myTime = Date.parse("2014-01-17 08:45:45".replace(/-/g, "/"));
            // 2018-04-13T17:38:00
            if(now-myTime > 0){
               alert("过期");
            }else{
               alert("未过期");
            }
        },
        methods:{
            benqd:function(){
                let titles = this.title;
                let imgList = JSON.parse(JSON.stringify(this.imgList));
                let eggList = this.eggList;
                let timeData = this.timeDate;
                let user_id = this.user_id;
                // 就只判断选项吗?提示填写完整信息,全都要吗?对,妈的
                // 你有弹窗吗?没有,那就alert
                if(!titles){
                    alert('请填写主题');
                    return;
                }

                console.log(this.inputNum,11111)
                if(this.inputNum < 2){
                    alert('请选择至少两个选项');
                    return;
                }

                if(!this.type){
                    alert('请选择投票模式');
                    return;
                }
                var mainSub = {
                    user_id:user_id,
                    title:titles,
                    type_id:0,
                    has_egg:0,
                    past_day:3,
                    imgList:imgList,
                    eggList:eggList,
                    timeData:timeData
                }

                console.log(mainSub,19191919);
                http.post({url:'api/vote/edit',params:mainSub}).then(res => {
                    console.log(res);
                })
            },
            getValue(event){
                this.timeDate = event.target.value;
            },
            getInput(){
                let idx = 0;
                console.log(this.imgList);

                this.imgList.map((item,index) => {
                    if(item['img_path']){
                        console.log(1);
                        idx = idx + 1;
                    }
                    if(item['img_path']){
                        console.log(2);
                        idx = idx + 1;
                    }
                    if(item['img_path']){
                        console.log(3);
                        idx = idx + 1;
                    }
                })

                this.inputNum = idx;
            },
            getSing_dubble(name,e){
                console.log(e.target.getAttribute('checked'));
                if(e.target.checked){
                    this.type = name;
                    if(this.type == 'single'){
                        console.log(document.querySelector('.dubble'));
                        document.querySelector('.dubble').checked = '';
                    } else if(this.type == 'dubble'){
                        document.querySelector('.single').checked = '';
                    }
                } else {
                    this.type = '';
                }
                console.log(this.type);
                
            }
            
        }
    }
</script>