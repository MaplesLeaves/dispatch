<style lang='less'>
.login {
	width: 100%;
	height: 100%;
	background: url('../assets/ddBg.png') 0 0 no-repeat;
	background-size: 100% 100%;
	font-size: 14px;
	& > .loginSubmit {
		width: 23%;
		position: absolute;
		top: 30%;
		right: 10%;
		& > .top {
			text-align: center;
			img {
				width: 65px;
			}
			strong {
				display: block;
				font-family: MicrosoftYaHei;
				color: rgba(182, 204, 255, 1);
				background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#27ebff), to(#0eb2ea));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				font-size: 30px;
			}
			p {
				font-size: 17px;
				font-family: ArialMT;
				color: rgba(182, 204, 255, 0.5);
			}
		}
		& > .submit {
			// width: 80%;
			// margin: 0 auto;
			background: rgba(255, 255, 255, 0.1);
			box-sizing: border-box;
			padding: 20px;
			.button {
				width: 100%;
				background-color: #57a3f3;
				border-color: #57a3f3;
				color: white;
			}
		}
	}
}
</style>

<template>
	<div class="login">
		<div class="loginSubmit" @keydown.enter="submitUser">
			<div class="top">
				<img width='65' height='65' src="../assets/logo.png" alt="">
				<strong>多媒体调度系统</strong>
				<p>DUOMEITIDIAODUXITONG</p>
			</div>
			<el-form ref="form" :model="form" class="submit">
				<el-form-item>
					<el-input v-model="form.userName" placeholder="请输入账户名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="form.password" type="password" placeholder="请输入账户密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class='button' @click='submitUser' :loading="loading">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			loading: false,
			form: {
				userName: '',
				password: '',
				projectName: 'kesuodui',
			},
		}
	},
	methods: {
		submitUser() {
			this.loading = true
			this.$message({
				message: '登录成功',
				type: 'success',
			})
			setTimeout(() => {
				this.loading = false
				this.$router.push({
					name: 'homePage',
				})
			}, 3000)
		},
		callBack(res) {},
	},
}
</script>
