## Full Cycle Node.js App com MySQL 🚀


#### GET /

```bash
curl http://localhost:3000/
```
#### POST /insert
Corpo JSON obrigatório: { "name": "Seu Nome" }

```bash
curl -X POST http://localhost:3000/insert \
  -H "Content-Type: application/json" \
  -d '{"name":"Seu Nome"}'
```
#### GET /people
```bash
curl http://localhost:3000/people

```
Necessário ter o docker instalado na máquina
Basta fazer o pull do projeto e executar o comando "docker compose up --build"
