<template>
    <div class="container">
        <h1 class="display-3">{{ title }}</h1>
        <p>

            <input id="id_token" placeholder="enter your id_token..." v-bind:value="id_token">
        </p>
        <p id="id_token_error"></p>

    </div>
</template>

<script>
    export default {
        name: 'page-id-token',
        data() {
            return {
                id_token: 'test token'
            }
        },
        mounted: function() {
            console.log('page-id-token mounted');
        }
    }
</script>
