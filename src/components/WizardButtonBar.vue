<template>
    <div class="container">
        <p>
            <a id="back-wizard" class="btn btn-primary btn-lg" href="#" role="button" @click="_onBackWizard">Back &raquo;</a>&nbsp;
            <a id="next-wizard" class="btn btn-primary btn-lg" href="#" role="button" @click="_onNextWizard">Next &raquo;</a>&nbsp;
            <a id="cancel-wizard" class="btn btn-primary btn-lg" disabled href="#" role="button" @click="_onCancelWizard">Cancel &raquo;</a>&nbsp;
        </p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import PageIdToken from '../components/PageIdToken.vue'

    export default {
        name: 'wizard-button-bar',
        data() {
            return {
                checked: false                
            }
        },
        methods: {
            _onBackWizard(e) {
                e.preventDefault();                
            },
            _onNextWizard(e) {
                e.preventDefault();
                
                const PageIdTokenCtor = Vue.extend(PageIdToken);
                new PageIdTokenCtor({
                    data() {
                        return {
                            title: 'Id Token - Hi 1234'
                        }
                    }
                }).$mount('#wizard-content');
                
                this.$router.push('phongtest');
            },
            _onCancelWizard(e) {
                e.preventDefault();
            }
        },
        mounted: function() {
            console.log('wizard-button-bar mounted');
        }
    }
</script>
