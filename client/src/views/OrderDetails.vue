<script>
import DetOrderComp from '../components/DetOrderComp.vue';
import axios from 'axios';
export default {
    components: { DetOrderComp },
    data() {
        return {
            order: {},
        };
    },
    created() {
        this.fetchOrder();
    },
    methods: {
        redirectAdminOrders() {
            this.$router.push('/admin')
        },
        async fetchOrder() {
            try {
                const response = await axios.get(`http://localhost:3000/api/order/${this.$route.params.id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
                }
                );
                this.order = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        transformDate(date) {
            let temp = date.split("T")[0].split("-").reverse();
            temp[0] = temp.splice(1, 1, temp[0])[0];
            return temp.join(".");
        },
        async sendOrder() {
            try {
                const response = await axios.put(`http://localhost:3000/api/order/${this.order.id}`, {
                    status: 'Отправлен',
                },
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
                    });
                this.order.status = 'Отправлен'
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        toShow() {
            return (this.order.status === 'Оплачен')
        }
    }
}
</script>

<template>
    <div className="det__main">
        <div className="det__info">
            <div className="det__title">
                <h2 className="det__title_name">Детали заказа</h2>
                <a className="det__title_orders" @click="redirectAdminOrders">Вернуться</a>
            </div>
            <div className="det__main_info">
                <h3 className="det__main_info_head">Заказ №{{ order.id }} от {{ transformDate(order.order_date) }}</h3>
                <ul className="det__info_place_list">
                    <li className="det__info_place">
                        <p className="det__info_description">Статус заказа:</p>
                        <p className="det__info_description">{{ order.status }}</p>
                    </li>
                    <li className="det__info_place">
                        <p className="det__info_description">Способ доставки:</p>
                        <p className="det__info_description">Самовывоз</p>
                    </li>
                </ul>
                <div className="det__info_place">
                    <p className="det__info_description"> Адрес доставки:</p>
                    <p className="det__info_description">{{ order.ship_to }}</p>
                </div>
                <div className="det__info_extras">
                    <button v-if="toShow()" @click="sendOrder" type="button" className="info_extras__btn">Собрать
                        заказ</button>
                    <button v-else type="button" className="info_extras__btn_active">Собрать заказ</button>
                    <div className="info_extras">
                        <h3 className="info_extras__name">Итог:</h3>
                        <h3 className="info_extras__name">{{ order.total }} руб.</h3>
                    </div>
                </div>
            </div>
        </div>
        <ul className="det__orders_el_list">
            <DetOrderComp v-for="order_detail in order.order_details" :order_detail="order_detail" />
        </ul>
    </div>
</template>
<style>
.det__orders_el_list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 50px;
}

.det__main {
    display: flex;
    column-gap: 64px;
}

.det__info {
    display: flex;
    flex-direction: column;
    row-gap: 22px;
}

.det__title {
    display: flex;
    justify-content: space-between;
}

.det__title_name {
    font-size: 24px;
}

.det__title_orders {
    font-size: 24px;
    text-decoration: none;
    color: #1400FF;
    cursor: pointer;
}

.det__title_orders:hover {
    opacity: 0.7;
}

.det__title_orders:active {
    opacity: 0.5;
}

.det__main_info {
    width: 626px;
    height: 314px;
    background: #D9D9D9;
    padding: 25px;
}

.det__info_description {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #000;
}

.det__info_place {
    display: flex;
    column-gap: 30px;
    padding-top: 40px;
}

.det__info_place_list {
    display: flex;
    column-gap: 40px;
}

.det__main_info_head {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: #000;
}

.det__info_extras {
    display: flex;
    padding-top: 60px;
    justify-content: space-between;
}

.info_extras {
    display: flex;
    column-gap: 10px;
}

.info_extras__name {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: #000;
}

.info_extras__btn {
    width: 240px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #fff;
    background: #1400ff;
    border-radius: 20px;
    margin-top: -10px;
    cursor: pointer;
}

.info_extras__btn:hover {
    opacity: 0.7;
}

.info_extras__btn:active {
    opacity: 0.5;
}

.info_extras__btn_active {
    width: 240px;
    height: 52px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    background: #fff;
    border-radius: 20px;
    margin-top: -10px;
    color: #000;
    border: none;
    opacity: 0.6;
}
</style>