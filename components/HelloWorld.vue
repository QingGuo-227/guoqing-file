<template>
  <div class="hello">
    <div @click="tiao">
      <input type="text" placeholder="请搜素">
    </div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">女装</mt-tab-item>
        <mt-tab-item id="2">男装</mt-tab-item>
        <mt-tab-item id="3">童鞋</mt-tab-item>
        <mt-tab-item id="4">幼儿</mt-tab-item>
        <mt-tab-item id="5">运动</mt-tab-item>
        <mt-tab-item id="6">限时特惠</mt-tab-item>
    </mt-navbar>
    <ul class="ul2">
      <li>综合</li>
      <li>销量</li>
      <li>新品</li>
      <li><button @click="sort">
            <span v-show="show">升序</span>
                <span v-show="!show">降序</span>
        </button></li>
    </ul>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
          <ul class="ul3">
            <li v-for="(item,index) in list" :key="index" @click="add(item)">
              <img :src="item.pic" alt="">
                <p>{{item.title}}</p>
                <p>￥{{item.price}}</p>
            </li>
          </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        456
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        789
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        789
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        789
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        789
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="box" v-show="flag">
      <mt-spinner type="fading-circle"></mt-spinner>
      <img :src="pic" alt="">
      <button @click="inc">+</button>
      {{count}}
      <button @click="dec">-</button>
      <br>
      <button @click="jia">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  data () {
    return {
        selected:1,
        list:[],
        fenlei:[],
        flag:false,
        pic:"",
        count:0,
        show:true
    }
  },
  created(){
    this.$axios.get("../../static/list.json").then(res=>{
        console.log(res.data)
        this.list=res.data.result
    })
    this.$axios.get("../../static/fenlei.json").then(res=>{
      console.log(res.data)
      this.fenlei=res.data
    })
  },
  methods:{
      add(item){
        this.flag=true
        console.log(item.pic)
        this.pic=item.pic
      },
      inc(){
        this.count++
      },
      dec(){
        this.count--
      },
      jia(){
        alert("成功加入购物车")
      },
      sort(){
                this.show=!this.show
                if(this.show){
                    this.list.sort(function(a,b){
                        return b.price-a.price
                    })
                }else{
                    this.list.sort(function(a,b){
                        return a.price-b.price
                    })
                }
      },
      tiao(){
        this.$router.push({
          name:"detail",

        })
      }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: 300px;
  border: 1px solid;
  position: fixed;
  bottom: 0;
  background: red;
}
.ul2{
  width:100%;
  height:40px;
  display: flex;
}
.ul2 li{
  width: 25%;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.ul3 li{
  margin: 20px;
}
.ul3 li p{
  margin: 10px;
}
</style>
