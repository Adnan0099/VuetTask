<template>
	<div>
		<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
			<div class="container-fluid">
				
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
							<router-link to="/" class="navbar-brand">Home</router-link>
						</li>
						
					</ul>

					<ul class=" navbar-nav d-flex">
						<li class="nav-item">
							<button type="button" class="btnstyl" @click="logout()" v-if="isLogged">
								Logout
							</button> 
							
						</li>
				
					</ul>
					
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
	computed: {
		...mapGetters([
			'isLogged'
			])
	},
	methods: {
		logout () {
			this.$store.dispatch('logout');
			this.$router.push('/login' )
		}
	}
}
</script>