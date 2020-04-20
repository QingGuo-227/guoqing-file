<template>
    <div class="detail">
        <div class="div2">
            <input class="input2" type="text" v-model="keyword" placeholder="请输入关键字">
            <button class="btn" @click="add()">搜索</button>
        </div>
        <!-- 历史记录 -->
        <p>历史记录</p>
        <ul class="ul1">
            <li v-for="(item,index) in doo" :key="index">
                {{item}}
            </li>
        </ul>
        <span @click="del()">删除历史记录</span>
        <!-- 模糊搜索 -->
        <ul>
        <li v-for="(item,index) in arr" :key="index">
            <!-- <router-link to="/xiang"> -->
                <img :src="item.pic" alt="">
                {{item.title}}
            <!-- </router-link> -->
        </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"detail",
    data(){
        return{
            keyword:"",
            list:JSON.parse(localStorage.getItem("todo")),
            doo:JSON.parse(localStorage.getItem("doo"))||[],
        }

    },
    created(){
        //获取数据
        this.$axios.get("../../static/list.json").then((res=>{
        console.log(res.data)
        this.list=res.data.result
        localStorage.setItem("todo",JSON.stringify(this.list))
        }))
    },
    computed:{
        //模糊搜索内容
            arr(){
                if(this.keyword){
                    return this.list.filter((item)=>{
                        return item.title.includes(this.keyword)
                    })
                }
            }
        },
        methods:{
            add(){
                if(this.doo.length>12){
                    this.doo.splice(12,1)
                }else{
                        this.doo.unshift(this.keyword)
                        //搜索的历史记录不能重复es6的set方法
                         var d=[...new Set(this.doo)]
                         this.doo=d

                            
                }
                
                localStorage.setItem("doo",JSON.stringify(this.doo))
            },
            //删除历史记录
            del(){
                this.doo=[];
                localStorage.setItem("doo",JSON.stringify(this.doo))
            }
        }

}
</script>

<style scoped>
.ul1{
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

}
ul li{
    width: 20%;
    text-align: center;
    line-height: 20px;
}
.div2{
  width: 100%;
  height: 40px;
  background: #eee;
}
.input2{
    width: 300px;
    height: 26px;
    outline: none;
    margin: 6px 4px;
    text-indent: 2em;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.btn{
  padding: 3px 5px;
}
</style>