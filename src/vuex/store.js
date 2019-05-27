import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        carPaneData:[],
    },
    mutations:{
        addCarPaneData(state,data){
             let flag=true;
             state.carPaneData.forEach(item=>{
                    if(data.sku_id==item.sku_id){
                        flag=false;
                         data.count+=1;
                    }
             })
             if(flag){
                 data.count=1;
                 state.carPaneData.push(data);
             }
        }
    }
})