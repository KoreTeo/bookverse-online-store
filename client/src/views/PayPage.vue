<script>
import axios from 'axios';
export default {
    methods: {
        async payOrder(){
            this.$router.push('/profile/orders')  
            try {
                const response = await axios.put(`http://localhost:3000/api/order/${this.$route.params.id}`, {
                    status: 'Оплачен',
                },
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
                    });
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            
        }
    }
}
</script>
<template>
    <h1 className="pay__header">Здесь должен быть платежный шлюз</h1>
    <button @click="payOrder" className="pay__btn">Сафонов, оплатить!</button>
</template>
<style>
.pay__btn {
    align-self: center;
    width: 310px;
    border: none;
    padding: 40px 40px;
    background: #1400ff;
    color: #FFF;
    font-size: 24px;
    cursor: pointer;
    border-radius: 20px;
}

.pay__header {
    margin-bottom: 40px
}

.pay__btn:hover {
    opacity: 0.7;
}

.pay__btn:active {
    color: #1400ff;
    background: #d9d9d9;
    opacity: 1;
}
</style>