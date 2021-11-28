<template>
	
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="card">
						<form @submit.prevent="submit" class="boxregister">
							<h1>Register</h1>
							
							<input type="text" v-model="name" name="" placeholder="Username" required> 
							<input type="email" v-model="email" name="" placeholder="email" required> 
							<input type="password" v-model="password" name="" placeholder="Password" required> 
							<input type="password" v-model="password_confirmation" name="" placeholder="Confrom Password" required> 

							
							<input type="submit" name="" value="Register" href="#">
							
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default{
	data(){
		return{
			name:'',
			email:'',
			password:'',
			password_confirmation:''
			
		}
	},
	methods:{
		submit(){
			let formData = new FormData();

			formData.append("name", this.name);
			formData.append("email", this.email);
			formData.append("password", this.password);
			formData.append("password_confirmation", this.password_confirmation);

			axios.post('register',formData)
			.then((res)=>{

				if(res.data.status == 'Success' ){
					this.$router.push({ path: '/login' }),
					this.$toaster.success('Your toaster success message.')
				}
				
			}).catch(error => {
				
				console.log(error.response)
				this.$toaster.error('Something is wrong')
			});
		}
	}
	


}
</script>