// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.activistchecklist.org',
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: 'Activist Checklist Contributor Guide',
			favicon: '/favicon-32x32.png',
			customCss: ['./src/styles/global.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ActivistChecklist/docs.activistchecklist.org' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/activistchecklist.org' },
			],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Homepage', slug: '' },
						{ label: 'Getting started', slug: 'getting-started' },
						{ label: 'Code of conduct', slug: 'getting-started/code-of-conduct' },
						{ label: 'Protecting your privacy', slug: 'getting-started/protecting-your-privacy' },
					],
				},
				{
					label: 'Writing Guides',
					items: [
						{ label: 'Start editing and writing', slug: 'writing/start-writing' },
						{ label: 'Using the visual editor', slug: 'writing/visual-editor' },
						{ label: 'Writing a guide from scratch', slug: 'writing/writing-a-guide-from-scratch' },
						{ label: 'Style guide', slug: 'writing/style' },
						{ label: 'Page structure & formatting', slug: 'writing/structure' },
					],
				},
				{
					label: 'Translating',
					items: [
						{ label: 'Start translating', slug: 'translating/start-translating' },
						{ label: 'Translation style guide', slug: 'translating/translation-style' },
					],
				},
				{
					label: 'Coding',
					items: [
						{ label: 'Start coding', slug: 'coding/start-coding' },
						{ label: 'Anonymous commits', slug: 'coding/anonymous-commits' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Create an anonymous GitHub account', slug: 'reference/anonymous-github' },
					],
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});