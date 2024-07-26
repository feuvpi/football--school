<script lang="ts">
	import { data } from './data';
</script>

<aside
	class="bg-gradient-to-br h-fit self-center w-52 from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0"
>
	<div class="relative border-b flex border-white/20 justify-center">
		<svg
			class="h-16 dark:text-dark-text text-light-text fill-current bg-white m-4 rounded-lg"
			viewBox="0 0 24 24"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
			<g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill-rule="evenodd">
				<g id="ic_fluent_board_24_filled" fill-rule="nonzero">
					<path
						d="M11.499,9.49917736 L11.5,21.0011774 L6.25005624,21.0018356 C4.51701151,21.0018356 3.10075697,19.6455145 3.00514494,17.9363661 L3,17.7519391 L3,9.49917736 L11.499,9.49917736 Z M12.999,15.4991774 L21.5,15.4991774 L21.5008077,17.7519229 C21.5005988,19.5467519 20.0455893,21.0018356 18.2507042,21.0018356 L13,21.0011774 L12.999,15.4991774 Z M18.2513521,2.49817736 C19.9843968,2.49817736 21.4006513,3.85452629 21.4962634,5.56367469 L21.5014083,5.74810161 L21.5,13.9991774 L12.999,13.9991774 L13,2.49817736 L18.2513521,2.49817736 Z M11.5,2.49817736 L11.499,7.99917736 L3,7.99917736 L3.00060063,5.74811784 C3.00080955,3.9532889 4.45581897,2.49817736 6.25064792,2.49817736 L11.5,2.49817736 Z"
						id="🎨-Color"
					/>
				</g>
			</g>
		</svg>
		<button
			class="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
			type="button"
		>
			<span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					aria-hidden="true"
					class="h-5 w-5 text-white"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
				</svg>
			</span>
		</button>
	</div>
	<div class="m-4">
		<ul class="mb-4 flex flex-col gap-1">
			{#each data as item (item.title)}
				<li>
					<a href={item.link}>
						<button
							class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
							type="button"
						>
							<svelte:component this={item.icon} />
							<p
								class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"
							>
								{item.title}
							</p>
						</button>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
