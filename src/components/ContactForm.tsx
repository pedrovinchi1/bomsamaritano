import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    try {
      console.log('Form data:', data);
      // Wait for 1 second to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('name', { required: 'Nome é obrigatório' })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('email', { 
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('phone', { required: 'Telefone é obrigatório' })}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            {...register('subject', { required: 'Assunto é obrigatório' })}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('message', { 
            required: 'Mensagem é obrigatória',
            minLength: { value: 10, message: 'A mensagem deve ter no mínimo 10 caracteres' }
          })}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;