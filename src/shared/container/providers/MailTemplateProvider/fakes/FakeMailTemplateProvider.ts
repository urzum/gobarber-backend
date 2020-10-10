import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProviders';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
