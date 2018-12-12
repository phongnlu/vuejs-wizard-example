<template>
    <div class="container">
        <h1 class="display-3">
            {{ title }}!
        </h1>
        <p>
            <div id="wizard-content"></div>
        </p>

        <p>
            <div id="wizard-button-bar">
                <wizard-button-bar></wizard-button-bar>
            </div>
        </p>
    </div>
</template>

<script>
    import * as wizardEngine from '../helpers/wizard-engine.js'
    import Vue from 'vue'
    import PageIdToken from '../components/PageIdToken.vue'

    export default {
        name: 'wizard-container',
        data() {
            return {
                title: 'Wizard'
            }
        },
        mounted: function() {
            wizardEngine.setCurrentState({
                currentPage: null,
                nextPage: null,
                backPage: null,
                back: false,
                next: false,
                cancel: true
            });
   
            const PageIdTokenCtor = Vue.extend(PageIdToken);
            new PageIdTokenCtor({
                data() {
                    return {
                        title: 'Id Token'
                    }
                }
            }).$mount('#wizard-content');
            
            this.$router.push('page-id-token');        
        }
    }
</script>
