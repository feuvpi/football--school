<script lang="ts">
	import Subtitle from '$lib/components/Subtitle.svelte';
	import type { Avaliacao } from '$lib/interfaces/Avaliacao';
	import type { Observacao } from '$lib/interfaces/Observacao';
	import type { Aluno } from '$lib/interfaces/Aluno';
	import { mockAlunos } from '$lib/interfaces/Aluno';
	// import
	export let alunos: Aluno[];
	alunos = mockAlunos;
</script>

<div class="card has-table w-full border-2 border-indigo-200">
	<header class="card-header">
		<p class="card-header-title">
			<span class="icon"><i class="mdi mdi-account-multiple" /></span>
			<Subtitle title="Alunos" />
		</p>
		<a href="/" class="card-header-icon">
			<span class="icon"><i class="mdi mdi-reload" /></span>
		</a>
	</header>
	<div class="card-content">
		<table>
			<thead>
				<tr>
					<th />
					<th>Nome</th>
					<th>Idade</th>
					<th>Cadastrado em</th>
					<th>Media</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#if alunos != undefined}
					{#each alunos as aluno}
						<tr>
							<td class="image-cell">
								<div class="image">
									<img
										alt=""
										src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
										class="rounded-full"
									/>
								</div>
							</td>
							<td data-label="Name">{aluno.nome}</td>
							<td data-label="Idade">
								{Math.floor(
									(new Date().getTime() - new Date(aluno.dataNascimento).getTime()) /
										(365.25 * 24 * 60 * 60 * 1000)
								)}</td
							>
							<td data-label="Desde">
								{new Date(aluno.createdAt).toLocaleDateString('pt-BR', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric'
								})}
							</td>

							<td data-label="Progress" class="progress-cell">
								<progress max="100" value="79">79</progress>
							</td>
							<td class="actions-cell">
								<div class="buttons right nowrap">
									<button
										class="button small green --jb-modal"
										data-target="sample-modal-2"
										type="button"
									>
										<span class="icon"><i class="mdi mdi-eye" /></span>
									</button>
									<button
										class="button small red --jb-modal"
										data-target="sample-modal"
										type="button"
									>
										<span class="icon"><i class="mdi mdi-trash-can" /></span>
									</button>
								</div>
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
		<div class="table-pagination">
			<div class="flex items-center justify-between">
				<div class="buttons">
					<button type="button" class="button active">1</button>
					<button type="button" class="button">2</button>
					<button type="button" class="button">3</button>
				</div>
				<small>Page 1 of 3</small>
			</div>
		</div>
	</div>
</div>
