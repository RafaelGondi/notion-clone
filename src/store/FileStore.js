import { defineStore } from 'pinia';

export const useFileStore = defineStore('FileStore', {
	state: () => ({
		_currentFile: 0,
		_files: [
			{
				metadata: {
					name: 'Resumo: O teste da mãe',
					author: 'Julio Casablancas',
					created_at: '2020-09-12T00:00:00Z',
					dom_id: 'tw70',
				},
				content: [
					{
						tag: 'h1',
						value: `Resumo: O teste da mãe`,
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
						value: `Introdução`,
					},
					{
						tag: 'p',
						value: `Muitas pessoas usam “dinamites e máquinas pesadas” nas suas “escavações”. De um jeito ou de outro eles ficam forçando as pessoas a dizerem algo legal sobre os seus negócios e usam perguntas muito tendenciosas como “Você gostou dessa ideia?”, enquanto chacoalham um prêmio de participação no que consideram uma pesquisa.`,
					},
					{
						tag: 'p',
						value: '',
					},
					{
						tag: 'h3',
						value: `1. O teste da mãe`,
					},
					{
						tag: 'p',
						value: 'Muita gente diz que você não deveria perguntar para a sua mãe se o seu negócio é uma boa ideia. E tecnicamente isso é verdade, mas o ponto é outro. Você não deveria perguntar para *ninguém* se o seu negócio é uma boa ideia. Pelo menos não com essas palavras. A sua mãe é quem mais vai mentir sobre isso (pelo simples fato de lhe amar), mas perguntar isso, ainda mais desse jeito, é uma carta branca para que todos mintam para você, nem que seja um pouco.'
					},
					{
						tag: 'p',
						value: '',
					},
					{
						tag: 'p',
						value: 'O teste da mãe é um conjunto de regras para elaborar perguntas boas que nem a sua mãe conseguirá lhe mentir a respeito.'
					},
					{
						tag: 'p',
						value: '',
					},
				],
			},
			{
				metadata: {
					name: 'Resumo: Scrum - A arte de fazer o dobro na metade do tempo',
					author: 'Rafael Dias',
					created_at: '2020-09-09T00:00:00Z',
					dom_id: 'ob0c',
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
					{
						tag: 'p',
						value: '',
					},
				],
			},
		],
	}),

	getters: {
		numbersOfFiles: state => state._files.length,
		files: state => state._files,
		file: state => state._files[state._currentFile],
		currentFile: state => state._currentFile,
		fileId: state => state._files[state._currentFile].metadata.dom_id,
	},

	actions: {
		addContent(tagData, position) {
			this._files[this.currentFile].content.splice(position, 0, tagData);
		},

		changeTag(tagData, tagIndex) {
			this._files[this.currentFile].content[tagIndex] = tagData;
		},

		changeFile(currentFile) {
			
			this._currentFile = currentFile;
		},
	}
});