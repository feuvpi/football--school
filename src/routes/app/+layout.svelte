<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<!-- <Navbar /> -->
<main class="flex h-full pt-2 justify-center bg-white">
	<Sidebar />
	<div class="mx-auto">
		<slot />
	</div>
</main>
