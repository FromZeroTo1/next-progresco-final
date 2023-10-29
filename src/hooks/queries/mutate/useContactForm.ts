import { IContactFormFields } from '@/components/ui/contact-form/interface/contact-form.interface'
import { ContactService } from '@/services/contact-form.service'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

export const useContactForm = (
	setValue: UseFormSetValue<IContactFormFields>
) => {
	const { mutateAsync } = useMutation({
		mutationKey: ['send contact form'],
		mutationFn: (data: IContactFormFields) => ContactService.sendForm(data),
		onError: () => console.log('Ошибка при отправке'),
		onSuccess: () => console.log('Успешно отправлено'),
	})

	const onSubmit: SubmitHandler<IContactFormFields> = async (
		data: IContactFormFields
	) => {
		await mutateAsync(data)
	}

	return { onSubmit }
}
