// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KCNA Notes',
			description:
				'My personal study notes for the Kubernetes and Cloud Native Associate (KCNA) exam.',
			social: [
				// TODO: replace with your real GitHub URL
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/your-username' },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [{ label: 'Overview', slug: 'overview' }],
				},
				{
					label: 'Domains',
					items: [
						{ label: 'Kubernetes Fundamentals', slug: 'domains/kubernetes-fundamentals' },
						{ label: 'Container Orchestration', slug: 'domains/container-orchestration' },
						{ label: 'Cloud Native Architecture', slug: 'domains/cloud-native-architecture' },
						{ label: 'Cloud Native Observability', slug: 'domains/observability' },
						{ label: 'Cloud Native Application Delivery', slug: 'domains/application-delivery' },
					],
				},
			],
		}),
	],
});
