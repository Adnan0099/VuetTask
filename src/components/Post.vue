<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="card">
						<form @submit.prevent="post" class="box">
							<h1>Bolg Share</h1>
						
							<textarea v-model="textdata" placeholder="Enter text here" required></textarea>	
							<input type="submit" name="" value="Submit" href="#">

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
			textdata:'',
				
		}
	},
	methods:{
		post(){
			let formData = new FormData();

			formData.append("postData", this.textdata);
	

			axios.post('post',formData)
			.then((res)=>{

				console.log(res.data);
				if(res.data.status == 'Success' ){
						
				this.$toaster.success(res.data.message)
			}
				
			})
			}
		}
	


}
</script>