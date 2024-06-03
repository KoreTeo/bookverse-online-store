<script>
import Edit from '@/components/img/Edit.vue';
import CancelBtn from '@/components/img/CancelBtn.vue';

    export default {
        components: {Edit, CancelBtn},
        
    }
</script>
<template>
    <div className="edit_popup">
        <button></button>
    </div>
    <ul className="edit_container__product_list">
        <li className="edit_container__product_list_el">
            № 854858484455
        </li>
        <li className="edit_container__product_list_el">
            25.05.2024
        </li>
        <li className="edit_container__product_list_el">
            Красноярский край, Красноясрск, ул. Борисова, д. 3 
        </li>
        <li className="edit_container__product_list_el">
            В пути
        </li>
        <li className="edit_container__product_list_el">
        5000
        </li>
        <li className="edit_container__product_list_el">
            <a className="order_container__ref" href="#">Выдать заказ</a>
        </li>
        <button className="product_list_el__trash_btn">
            <CancelBtn/>
        </button>
    </ul>
</template>
<style>
.edit_popup{
    display: none;
    width: 300px;
    height: 300px;
    background: #000;
}
.edit_container__product_list{
  display: flex;
  width: 1070px;
  height: 65px;
  background: #fff;
  align-items: center;
  padding-left: 10px;
  column-gap: 50px;
}
.edit_container__product_list_el{
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 100px;
  color: #000;
  text-align: left;
}
.edit_container__product_list_el_edit{
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 100px;
  color: #000;
  text-align: left;
}
.edit_container__product_list_el:nth-child(1){
    width: 130px;
}
.edit_container__product_list_el:nth-child(2){
    padding-left: 20px;
}

.edit_container__product_list_el:nth-child(3){
    width: 200px;
}
.edit_container__product_list_el:nth-child(3){
margin-left: 10px;
}

.edit_container__product_list_el:nth-child(5){
    padding-left: 16px;
}

.product_list_el__edit_btn{
  border: none;
  background: none;
  position: absolute;
  margin-left: 980px;
  cursor: pointer;
}
.product_list_el__edit_btn:hover{
  opacity: 0.6;
}
.product_list_el__trash_btn{
  border: none;
  background: none;
  position: absolute;
  margin-left: 1020px;
  cursor: pointer;
  
}
.product_list_el__trash_btn:hover{
  opacity: 0.6;
}

.order_container__ref{
    color: blue;
}
.order_container__ref:hover{
    opacity: 0.8;
}
</style>