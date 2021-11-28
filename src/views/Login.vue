<template>
	<div>
	<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form @submit.prevent="login" class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p>
                     <input type="text" name="" v-model='email' placeholder="Username" required> 
                     <input type="password" name="" v-model='password' placeholder="Password" required> 
                    
                    <input type="submit" name="" value="Login" href="#">

                    <router-link to="/register" class="registerclass"><input type="" name="" value="Register"></router-link>
                   
                </form>
            </div>
        </div>
    </div>
</div>

	</div>
</template>

<script>
export default{
	data(){
		return{
			email:'',
			password:''
		}
	},
	methods: {
		login () {
			let formData = new FormData();

		
			formData.append("email", this.email);
			formData.append("password", this.password);
			this.$store
			.dispatch('login', formData)
			.then((resp) => {

				console.log('resp');
				console.log(resp);
				this.$router.push({ path: '/home' })
				this.$toaster.success('Succesfully Login.')
			})
			.catch(err => {
				console.log(err);
				this.$toaster.error('Your email or password not match')
			})
		}
	}
}
</script>