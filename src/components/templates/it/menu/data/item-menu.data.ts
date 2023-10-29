import { IItMenu } from '../interface/it-menu.interface'

export const itMenu: IItMenu = {
	items: [
		{
			name: 'Календарь',
		},
		{
			name: 'Задачи',
		},
		{
			name: 'Проекты',
		},
		{
			name: 'CRM',
		},
		{
			name: 'Диск',
		},
		{
			name: 'Склад',
		},
		{
			name: 'Аналитика',
		},
		{
			name: 'Финансы',
			items: [
				{
					name: 'Все счета',
				},
				{
					name: 'Все транзакции',
				},
				{
					name: 'Отчеты',
					items: [
						{
							name: 'Анализ расходов',
						},
						{
							name: 'Анализ P&L',
						},
						{
							name: 'Отчет о движении средств (CashFlow)',
						},
					],
				},
			],
		},
		{
			name: 'Настройки',
		},
	],
}
