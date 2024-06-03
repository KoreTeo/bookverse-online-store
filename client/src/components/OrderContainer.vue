<script>
import Edit from '@/components/img/Edit.vue';
import CancelBtn from '@/components/img/CancelBtn.vue';
import axios from 'axios';

export default {
    components: { Edit, CancelBtn },
    props: {
        order: {}
    },
    methods: {
        transformDate(date) {
            let temp = date.split("T")[0].split("-").reverse();
            return temp[1] + '.' + temp[0] + '.' + temp[2];
        },
        async changeStatus(newStatus) {
            this.order.status = newStatus
            try {
                const response = await axios.put(`http://localhost:3000/api/order/${this.order.id}`, {
                    status: newStatus,
                },
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
                    });
                this.orders = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        toShow(){
            return (this.order.status === 'Выдан' || this.order.status === 'Отменен')
        }
    }
}
</script>
<template>
    <ul className="edit_container__product_list">
        <li className="edit_container__product_list_el">
            № {{ order.id }}
        </li>
        <li className="edit_container__product_list_el">
            {{ transformDate(order.order_date) }}
        </li>
        <li className="edit_container__product_list_el">
            {{ order.ship_to }}
        </li>
        <li className="edit_container__product_list_el">
            {{ order.status }}
        </li>
        <li className="edit_container__product_list_el">
            {{ order.total }}
        </li>
        <li className="edit_container__product_list_el">
            <a v-show="!toShow()" @click="changeStatus('Выдан')" className="order_container__ref">Выдать заказ</a>
        </li>
        <button v-show="!toShow()" @click="changeStatus('Отменен')" className="product_list_el__trash_btn">
            <CancelBtn />
        </button>
    </ul>
</template>
<style>
.edit_popup {
    display: none;
    width: 300px;
    height: 300px;
    background: #000;
}

.edit_container__product_list {
    display: flex;
    width: 1070px;
    height: 65px;
    background: #fff;
    align-items: center;
    padding-left: 10px;
    column-gap: 50px;
}

.edit_container__product_list_el {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    width: 100px;
    color: #000;
    text-align: left;
}

.edit_container__product_list_el_edit {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    width: 100px;
    color: #000;
    text-align: left;
}

.edit_container__product_list_el:nth-child(1) {
    width: 130px;
}

.edit_container__product_list_el:nth-child(2) {
    padding-left: 20px;
}

.edit_container__product_list_el:nth-child(3) {
    width: 200px;
}

.edit_container__product_list_el:nth-child(3) {
    margin-left: 10px;
}

.edit_container__product_list_el:nth-child(5) {
    padding-left: 16px;
}

.product_list_el__edit_btn {
    border: none;
    background: none;
    position: absolute;
    margin-left: 980px;
    cursor: pointer;
}

.product_list_el__edit_btn:hover {
    opacity: 0.6;
}

.product_list_el__trash_btn {
    border: none;
    background: none;
    position: absolute;
    margin-left: 1020px;
    cursor: pointer;

}

.product_list_el__trash_btn:hover {
    opacity: 0.7;
}

.product_list_el__trash_btn:active {
    opacity: 0.5;
}

.order_container__ref {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.order_container__ref:hover {
    opacity: 0.7;
}

.order_container__ref:active {
    opacity: 0.5;
}
</style>