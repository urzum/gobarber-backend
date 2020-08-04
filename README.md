# Recuperação de senha

**RF**

- O usuário deve poder recuparar sua senha informando o email
- O usuário deve receber um email com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**

- Utilizar Mailtrap para testar envios em ambiente Dev
- Utilizar Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano (background job)

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar a sua senha

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha

**RN**

- O usuário não pode alterar seu email para um email já utilizado
- Para atualizar sua senha, o usuário deve informar a senaha antiga
- Para atualizar seu senha, o usuário precisa confirmar a nova senha

# Painel do Prestador

**RF**

- O usuário deve poder lista seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agedamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas em MongoDB
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviços cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre as 8h e as 18h (primeiro as 8h e ultimo as 17h)
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviço consigo mesmo

