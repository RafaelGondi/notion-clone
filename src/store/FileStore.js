import { defineStore } from 'pinia';

export const useFileStore = defineStore('FileStore', {
	state: () => ({
		_files: [
			{
				metadata: {
					name: 'Resumo: Scrum - A arte de fazer o dobro na metade do tempo',
					author: 'Rafael Dias',
					created_at: '2020-09-12T00:00:00Z',
				},
				content: [
					{
						tag: 'h1',
						value: `Resumo: Scrum - A arte de fazer o dobro na metade do tempo`,
					},
					{
						tag: 'p',
						value: '',
					},
					{
						tag: 'h2',
						value: `📒 Sumário + notas`,
					},
					{
						tag: 'h3',
						value: `1. A maneira que o mundo funciona está errada`,
					},
					{
						tag: 'p',
						value: `O que faz com que grande parte dos projetos dê errado, não é necessariamente a comptetência dos envolvidos, ética de trabalho ou tecnologia. O que faz com que muitos projetos falhem é a maneira como a maioria das pessoas trabalha. Ela está errada pois é pensada de maneira sequencial, em cascata.`,
					},
					{
						tag: 'p',
						value: '',
					},
					{
						tag: 'p',
						value: `Muitos projetos começam com Diagramas de Gantt, com todas as metas a serem alcançadas, o tempo que seria gasto em cada uma das etapas do projeto, etc, só que, segundo o autor eles estão sempre errados. Em todos os projetos surgem problemas e ocorrem rompantes de inspiração. Planos meticulosamente detalhados e uma estrutura de comando e controle não prevê isso. Nesses cenários os problemas só se tornam claros no final do projeto, quando os prazos apertam e geralmente é tarde demais.`,
					},
				],
			},
		],
		userName: 'Rafael Dias',
	}),

	getters: {
		numbersOfFiles: state => state._files.length,
		files: state => state._files,
	},

	actions: {
		addContent(tagData, position) {
			this._files[0].content.splice(position, 0, tagData);
		},

		changeTag(tagData, tagIndex) {
			this._files[0].content[tagIndex] = tagData;
		}
	}
});