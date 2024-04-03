<template>
    <div class="alert-message">
        <div class="message" :class="typeClass">{{ message }}</div>
    </div>
</template>

<script>
export default {
    name: 'AlertMessage',
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info',
            validator: function (value) {
                return ['info', 'success', 'warning', 'error'].indexOf(value) !== -1;
            }
        }
    },
    computed: {
        typeClass: function () {
            return 'message-' + this.type;
        }
    }
};
</script>

<style scoped>
.alert-message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.message {
    padding: 10px;
    border-radius: 5px;
}

.message-info {
    background-color: #66f400;
    color: #000000;
    font-weight: bold;
}

.message-success {
    background-color: #2ecc71;
    color: #fff;
}

.message-warning {
    background-color: #f39c12;
    color: #fff;
}

.message-error {
    background-color: #e74c3c;
    color: #fff;
}
</style>
