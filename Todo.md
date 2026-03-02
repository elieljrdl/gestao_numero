# App Gestao

# 🟢 RF — Requisitos Funcionais

- [x] Deve ser possível cadastrar clientes.
- [x] Deve ser possível cadastrar conexões para um cliente.
- [x] Deve ser possível cadastrar números.
- [x] Deve ser possível cadastrar celulares.
- [x] Deve ser possível cadastrar perfis vinculados a um celular.
- [x] Deve ser possível registrar um WhatsApp vinculando:
      - cliente
      - conexão
      - número
      - perfil

- [x] Deve ser possível atualizar os dados de cliente, número, celular, conexão e perfil.
- [x] Deve ser possível excluir clientes.
- [x] Deve ser possível excluir números.
- [x] Deve ser possível excluir celulares.
- [x] Deve ser possível consultar a listagem de WhatsApps.

# 🟡 RN — Regras de Negócio

- [x] Ao excluir um cliente, as conexões vinculadas devem ser excluidas automaticamente e campos relacionados na tabela whatsapp devem receber valores nulos.
- [x] Ao excluir um celular, todos os perfis vinculados devem ser excluídos automaticamente.  
- [x] Ao excluir um perfil, todos os registros de WhatsApp vinculados devem ser excluídos automaticamente.
- [x] Um número não pode estar vinculado a mais de um WhatsApp ativo simultaneamente.


# 🔵 RNF — Requisitos Não Funcionais

- [x] A aplicação deve persistir dados em banco PostgreSQL.
- [x] Todas as exclusões que afetem múltiplas entidades devem ocorrer dentro de transações.
- [x] A API deve responder em formato JSON.
- [x] A autenticação deve ser feita via JWT.
- [x] Todas as listagens devem ser paginadas.
- [x] O sistema deve garantir integridade referencial através de foreign keys.
- [x] A aplicação deve tratar erros de integridade (ForeignKeyConstraintError) retornando mensagens padronizadas ao cliente.