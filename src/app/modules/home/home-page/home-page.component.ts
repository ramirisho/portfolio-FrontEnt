import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [NgClass],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent {

	@ViewChild('contactSection') contactSection!: ElementRef;

	logos = [
		{
			name: 'Angular',
			src: '../../../../assets/logos/angular-logo.svg'
		},
		{
			name: 'Typescript',
			src: '../../../../assets/logos/typescript-logo.svg'
		},
		{
			name: 'Tailwind CSS',
			src: '../../../../assets/logos/tailwindcss-logo.svg'
		},
		{
			name: 'Figma',
			src: '../../../../assets/logos/figma-logo.svg'
		},
	];

	offers = [
		{
			title: 'Landing Page',
			description: 'Lo esencial para mostrar tu trabajo o empresa a tus clientes. Destaca tus mejores proyectos con estilo.',
			price: '$95',
			currency: 'USD',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Entrega en 4 días',
			details: [
				'1 página',
				'Diseño web moderno',
				'Integración de redes sociales',
				'2 revisiones',
				'Código fuente'
			]
		},
		{
			title: 'Sitio web',
			description: 'Amplifica tu presencia en línea. Maximiza tu impacto digital con esta potente solución.',
			price: '$130',
			currency: 'USD',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Entrega en 4-10 días',
			details: [
				'2-4 páginas',
				'Diseño web moderno',
				'Integración de redes sociales',
				'2-4 revisiones',
				'Código fuente',
				'Modo oscuro/claro',
				'Animaciones'
			]
		},
		{
			title: 'Sitio web personalizado',
			description: 'Diseñado para aquellos que buscan algo más específico y atinado a su sector.',
			price: 'Personalizado',
			currency: '',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Indefinido',
			details: [
				'Ilimitadas páginas y revisiones',
				'Diseño/estilo personalizado',
				'Características personalizadas ',
				'Modo oscuro/claro',
				'Código fuente'
			]
		}
	];

	contactLinks= [
		{	
			ariaLabel: 'Link de email',
			icon: '../../../../assets/icons/email.svg',
			text: 'rramiro.solano@gmail.com',
			link: 'mailto:rramiro.solano@gmail.com'
		},
		{
			ariaLabel: 'Link de Github',
			icon: '../../../../assets/icons/github-logo.svg',
			text: 'Github',
			link: 'https://github.com/ramiro-solano'
		},
		{
			ariaLabel: 'Link de WhatsApp',
			icon: '../../../../assets/icons/whatsapp-logo.svg',
			text: 'WhatsApp',
			link: 'https://wa.me/message/5X3YVOHO2UFLB1'
		},
		{
			ariaLabel: 'Link de LinkedIn',
			icon: '../../../../assets/icons/linkedin-logo.svg',
			text: ' LinkedIn',
			link: 'www.linkedin.com/in/ramiro-solano'
		},
	]

	scroollToContat() {
		this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
	}
}