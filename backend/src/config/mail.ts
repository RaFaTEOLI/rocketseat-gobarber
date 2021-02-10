interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'diego@rocketseat.com.br',
      name: 'Diega da Rocketseat',
    },
  },
} as IMailConfig;
