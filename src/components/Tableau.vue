<template>
  <div class="tab-main-container" shadow="">
    <div class="title-header" shadow="">
      <strong>{{title}}</strong>
    </div>
    <div class="some-space" style="width:100%;height:15px"></div>
    <div class="label-header">
      <div class="title-elmt"  v-for="field in fields" :key="field.key">
        <strong>{{field.label}}</strong>
      </div>
    </div>
    <div class="some-space" style="width:100%;height:15px"></div>
    <div class="items-container">
      <div id='item-row' class="item-row" v-for="item in items" :key="item.key">
        <div id='value-row' class="value-row" v-for="value in colspan" :key="value">
          <h6>{{item.value[value-1]}}</h6>
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
                  { key: 'gco2', label: 'gCO2' },
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
  max-width: 400px;
}
.title-header{
  background-color: #6C89FFE8;
}
.label-header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.value-row{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  background-color:rgb(241, 241, 241);
}


</style>
