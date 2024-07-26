<script lang="ts">
	import Subtitle from '$lib/components/Subtitle.svelte';
	import Chart from 'chart.js/auto';
	import Profile from './_Profile.svelte';
	import { onMount } from 'svelte';

	interface Observacao {
		observacao: string;
		data: Date;
	}
	interface jogador {
		id: number;
		nome: string;
		dataNascimento: Date;
		altura: number;
		peso: number;
		dominancia: string;
		avaliacoes: Avaliacao[];
		observacoes: Observacao[];
	}

	interface Avaliacao {
		jogadorId: number;
		data: Date;
		agilidade: number;
		velocidade: number;
		passe: number;
		conducao: number;
		dominio: number;
	}

	const avaliacao: Avaliacao = {
		jogadorId: 1,
		data: new Date(),
		agilidade: 2,
		velocidade: 8,
		passe: 6,
		conducao: 9,
		dominio: 7
	};

	const observacoes: Observacao[] = [
		{
			observacao: 'This is the first observation',
			data: new Date('2022-01-01')
		},
		{
			observacao: 'This is the second observation',
			data: new Date('2022-01-02')
		}
		// Add more observations as needed
	];

	function getColor(value: number): string {
		if (value >= 0 && value <= 3) {
			return 'bg-red-500';
		} else if (value > 3 && value <= 7) {
			return 'bg-yellow-500';
		} else if (value > 7 && value <= 10) {
			return 'bg-green-500';
		} else {
			throw new Error('Invalid value');
		}
	}

	function createChart(type: any, elementId: any, label: any, chartLabel: any, data: any) {
		const acquisitionsElement = document.getElementById(elementId);
		if (!acquisitionsElement) {
			console.error('Element with id "Faturado" not found');
			return;
		}

		new Chart(
			acquisitionsElement as HTMLCanvasElement, // Assert that acquisitionsElement is HTMLCanvasElement
			{
				type: type,
				data: {
					// labels: data2.map(row => row.year),
					labels: chartLabel,
					// labels: data.aggregatedData.map(row => row.),
					datasets: [
						{
							label: label,
							// data: data2.map(row => row.count)
							data: data
						}
					]
				}
			}
		);
	}

	onMount(() => {
		const labels = ['Agilidade', 'Velocidade', 'Passe', 'Condução', 'Domínio'];
		const data = [
			avaliacao.agilidade,
			avaliacao.velocidade,
			avaliacao.passe,
			avaliacao.conducao,
			avaliacao.dominio
		];

		createChart('radar', 'Radar', 'Avaliação', labels, data);
	});
</script>

<div class="bg-neutral-200 self-center justify-self-center border-2 border-indigo-600 p-2 mx-12">
	<div class="w-full">
		<Profile />
	</div>
	<div class="justify-center bg-white grid grid-cols-3">
		<!-- The code you want to place at the right up corner here -->
		<button
			class="bg-grey-light h-12 justify-self-end w-40 absolute shadow-md hover:bg-cyan-300/70 bg-cyan-400/70 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
		>
			<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
				><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg
			>
			<span>Ver Historico</span>
		</button>

		<div class="col-span-2 content-center grid place align-middle">
			<div
				class="relative flex flex-col min-w-0 break-words w-full mb-8 h-full rounded-lg text-blueGray-700"
			>
				<div class="px-6 py-4 border-0">
					<div class="flex flex-wrap items-center">
						<div class="relative w-full max-w-full flex-grow flex-1">
							<Subtitle title={'Avaliação'} />
						</div>
					</div>
				</div>
				<div class="block w-full overflow-x-auto">
					<table class="items-center w-full bg-transparent border-collapse">
						<thead>
							<tr>
								<th
									class="w-1/4 px-6 align-middle border border-solid py-3 text-xs text-middle uppercase border-l-0 border-r-0 whitespace-nowrap font-boldbg-blueGray-100 text-blueGray-500 border-blueGray-200"
									>CRITERIO</th
								>
								<th
									class="w=3/4 px-6 align-middle border border-solid py-3 text-xs uppercase font-bold bg-blueGray-100 text-blueGray-500 border-blueGray-200"
									>MÉDIA</th
								>
							</tr>
						</thead>
						<tbody>
							<tr class="hover:bg-neutral-100/50">
								<td
									class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
								>
									<div class="flex items-center text-center">
										<span class="ml-3 font-bold NaN">AGILIDADE</span>
									</div>
								</td>

								<td
									class=" border-t-0 px-2 border-2 border-indigo-200 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="mr-2">{avaliacao.agilidade * 10}%</span>
										<div class="relative w-full">
											<div class="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
												<div
													class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {getColor(
														avaliacao.agilidade
													)}"
													style="width: {avaliacao.agilidade * 10}%;"
												></div>
											</div>
										</div>
									</div>
								</td></tr
							>
							<tr class="hover:bg-neutral-100/50">
								<td
									class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="ml-3 font-bold NaN">VELOCIDADE</span>
									</div>
								</td>

								<td
									class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="mr-2">{avaliacao.velocidade * 10}%</span>
										<div class="relative w-full">
											<div class="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
												<div
													class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {getColor(
														avaliacao.velocidade
													)}"
													style="width: {avaliacao.velocidade * 10}%;"
												></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr class="hover:bg-neutral-100/50">
								<td
									class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="ml-3 font-bold NaN">PASSE</span>
									</div>
								</td>

								<td
									class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="mr-2">{avaliacao.passe * 10}%</span>
										<div class="relative w-full">
											<div class="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
												<div
													class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {getColor(
														avaliacao.passe
													)}"
													style="width: {avaliacao.passe * 10}%;"
												></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr class="hover:bg-neutral-100/50">
								<td
									class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="ml-3 font-bold NaN">CONDUÇÃO</span>
									</div>
								</td>

								<td
									class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="mr-2">{avaliacao.conducao * 10}%</span>
										<div class="relative w-full">
											<div class="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
												<div
													class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {getColor(
														avaliacao.conducao
													)}"
													style="width: {avaliacao.conducao * 10}%;"
												></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr class="hover:bg-neutral-100/50">
								<td
									class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="ml-3 font-bold NaN">DOMINIO</span>
									</div>
								</td>
								<td
									class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4"
								>
									<div class="flex items-center">
										<span class="mr-2">{avaliacao.dominio * 10}%</span>
										<div class="relative w-full">
											<div class="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
												<div
													class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {getColor(
														avaliacao.dominio
													)}"
													style="width: {avaliacao.dominio * 10}%;"
												></div>
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="h-86 px-4 ml-12 grid content-center col-span-1">
			<div><canvas id="Radar"></canvas></div>
		</div>
	</div>

	<div class="justify-center bg-white grid grid-cols-1 flex-1 bg-white rounded-lg shadow-xl mt-4">
		<button
			class="bg-grey-light h-12 justify-self-end w-40 absolute shadow-md hover:bg-cyan-300/70 bg-cyan-400/70 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
		>
			<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
				><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg
			>
			<span>ADICIONAR</span>
		</button>

		<div class="relative p-4">
			<Subtitle title={'Observações'} />
			<div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

			<!-- start::Timeline item -->
			{#each observacoes as observacao}
				<div class="flex items-center w-full my-6 -ml-1.5">
					<div class="w-1/12 z-10">
						<div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
					</div>
					<div class="w-11/12">
						<p class="text-sm">{observacao.observacao}</p>
						<p class="text-xs text-gray-500">{observacao.data.toLocaleDateString('en-GB')}</p>
					</div>
				</div>
			{/each}
			<!-- end::Timeline item -->
		</div>
	</div>
</div>
