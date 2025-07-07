import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  availability: string;
  skills: string;
  reason: string;
};

const VolunteerForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    try {
      console.log('Volunteer form data:', data);
      // Wait for 1 second to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-lg shadow-md p-6 md:p-8">
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
        <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Disponibilidade</label>
        <select
          id="availability"
          className={`w-full px-4 py-2 border ${errors.availability ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('availability', { required: 'Selecione sua disponibilidade' })}
        >
          <option value="">Selecione uma opção</option>
          <option value="weekdays">Dias de semana</option>
          <option value="weekends">Finais de semana</option>
          <option value="both">Ambos</option>
          <option value="flexible">Flexível</option>
        </select>
        {errors.availability && <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>}
      </div>
      
      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Habilidades e Experiências</label>
        <textarea
          id="skills"
          rows={3}
          className={`w-full px-4 py-2 border ${errors.skills ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Descreva suas habilidades, experiências ou áreas de interesse para o voluntariado"
          {...register('skills', { required: 'Por favor, descreva suas habilidades' })}
        ></textarea>
        {errors.skills && <p className="mt-1 text-sm text-red-600">{errors.skills.message}</p>}
      </div>
      
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">Por que você quer ser voluntário?</label>
        <textarea
          id="reason"
          rows={4}
          className={`w-full px-4 py-2 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          {...register('reason', { 
            required: 'Por favor, compartilhe sua motivação',
            minLength: { value: 20, message: 'Por favor, forneça uma resposta mais detalhada' }
          })}
        ></textarea>
        {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>}
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Inscrição'}
        </button>
      </div>
    </form>
  );
};

export default VolunteerForm;