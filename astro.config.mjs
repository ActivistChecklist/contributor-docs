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
			components: {
				ThemeProvider: './src/components/starlight/ThemeProvider.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
			},
			title: 'Contributor Guide',
			logo: {
				light: './src/assets/logo-bg-transparent.png',
				dark: './src/assets/logo-bg-white-transparent.png',
				alt: 'Activist Checklist',
			},
			editLink: {
				baseUrl: 'https://github.com/ActivistChecklist/contributor-docs/blob/main/',
			},
			lastUpdated: true,
			favicon: '/favicon-32x32.png',
			customCss: ['./src/styles/global.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/ActivistChecklist/contributor-docs' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/AtivistChecklist.org' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Homepage', slug: '' },
						{ label: 'Getting started', slug: 'getting-started' },
						{ label: 'Code of conduct', slug: 'getting-started/code-of-conduct' },
						{ label: 'Protecting your privacy', slug: 'getting-started/protecting-your-privacy' },
					],
				},
				{
					label: 'Editing & Writing',
					items: [
						{ label: 'Start editing and writing', slug: 'writing/start-writing' },
						{ label: 'Using the visual editor', slug: 'writing/visual-editor' },
						{ label: 'Style guide', slug: 'writing/style' },
						{ label: 'Writing a guide from scratch', slug: 'writing/writing-a-guide-from-scratch' },
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