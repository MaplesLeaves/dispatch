<template>
	<div class="index">
		<header-top></header-top>
		<tab-page></tab-page>
		<phone-message class="phoneMessage"></phone-message>
		<div class="content">
			<router-view/>

		</div>
		<footer-menu></footer-menu>
		<call-dialog @success='success' @error="error">
			<call-info></call-info>
		</call-dialog>
	</div>
</template>

<script>
import footerMenu from './components/footerMenu.vue'
import headerTop from './components/headerTop.vue'
import tabPage from './components/tabPage.vue'
export default {
	name: 'index',
	components: {
		footerMenu,
		headerTop,
		tabPage,
	},
	methods: {
		success() {
			this.$store.commit('SHOWMESSAGE',false)
			this.$store.commit('CALLNOW',true)
		},
		error() {
			this.$store.commit('SHOWMESSAGE',false)
		},
	},
}
</script>

<style lang='less'>
.index {
	height: 100%;
	& > .phoneMessage {
		width: 295px;
		height: 31%;
		position: fixed;
		bottom: 41px;
		right: 10px;
		z-index: 10;
	}
	& > .content {
		height: calc(~'100% - 153px');
		position: relative;
		background: #f4f5f6;
	}
}
</style>  
