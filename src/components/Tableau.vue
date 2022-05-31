<template>
  <div class="tab-main-container" wrapper="">
    <div class="title-header" shadow="">
      <strong>{{title}}</strong>
    </div>
    <div class="some-space" style="width:100%;height:15px"></div>
    <div class="label-header">
      <div class="title-elmt"  v-for="field in fields" :key="field.key" style="text-align: left;width: 100%">
        <strong>{{field.label}} <div v-if="field.key==='equivalent'">(pour une journée)</div></strong>
      </div>
    </div>
    <div class="some-space" style="width:100%;height:15px"></div>
    <div class="items-container">
      <div id='item-row' class="item-row" v-for="item in items" :key="item.key">
        <div id='value-row' class="value-row" v-for="value in colspan" :key="value" style="text-align: left;width: 100%">
          <h6><div v-html="item.value[value-1]"></div> <div v-if="value==2 && item.key==0"> gCO2e<br><span style="color:#7993ff">100%</span> </div> </h6>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        name: "Tableau",
        props : {
            name : String,
            display : Boolean,
            data : Object
        },
        data() {
            return {
                items: [],
                fields: [
                  { key: 'phase', label: '' },
                  { key: 'gco2', label: 'gCO2e' },
                  { key: 'equivalent', label: 'Equivalent' }],
                colspan : 3,
                title : 'Résumé',
            };
        },
        mounted() {
          this.colspan=this.data.colspan
          this.items=this.data.items
        }
    }
</script>

<style scoped>

.tab-main-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  border-radius: 7px;

}
.title-header{
  background-color: #6C89FFE8;
}
.label-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.value-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
}
.items-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-row {
  display: flex;
  flex-direction: row;
}
.item-row:hover{
  border-radius:var(--border-radius-main) ;
  background-color:rgb(241, 241, 241);
}


</style>
