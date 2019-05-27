<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img
          alt="Smartisan 快充移动电源 10000mAh"
          :src="item.sku_info[imageIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'"
          style="opacity: 1;"
        >
      </div>
      <h6>{{item.name}}</h6>item
      <h3>{{item.name_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="color,index in item.sku_info">
            <a href="javascript:;" :class="{active:index==imageIndex}" @click="tabIndex(index)">
              <img :src="'http://img01.smartisanos.cn/'+color.spec_json.image+'20X20.jpg'">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
          <a href="javascript:;" target="_blank">查看详情</a>
        </span>
        <span class="item-blue-btn" @click="addCarPane(item.sku_info[imageIndex])">加入购物车</span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i>
        <span>{{item.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        imageIndex:0
    }
  },
  props: ["item"],
  methods: {
    tabIndex(index) {
      this.imageIndex = index;
    },
    addCarPane(data){
        this.$store.commit("addCarPaneData",data);;
    }
  }
};
</script>
<style>
</style>


