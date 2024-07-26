<script lang="ts">
	import type { PageData } from './$types';
	import Table from './_Table.svelte';

	export let data: PageData;
</script>

<main class="pt-12">
	<Table />
</main>
