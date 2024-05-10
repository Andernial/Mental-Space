# Mental Space API 🌌​

## 👾Tecnologias utilizadas
node, express, cors, nodemon, sequelize, dot env lib, jsonWebToken lib, mysql2.

## 📗Descrição
Esta API foi desenvolvida como uma versão atualizada da Mental Health API : https://github.com/Andernial/Mental-Health-Api.

A API foi refatorada para atender melhor as necessidades de um deploy para o projeto mental space, o front pode ser acessado aqui : https://github.com/Andernial/Mental-Space-Front

Com esta atualização foi possível realizar o deploy da API utilizando o railway. Você pode acessar a API e suas rotas aqui : https://mental-space-api.up.railway.app + /rota. *se não rodar provavelmente o deploy atingiu o limite temporario(tente novamente outra hora)*


## ➡️Atualização mais Recente 

Versão 0.0.1 -> Atualização de Lançamento

## ⚙️Configuração do Ambiente

Crie um arquivo **.env** na pasta raiz do seu projeto e configure as variavies de ambiente necessarias:

Exemplo MySql:
```

DB_USERNAME='nome de usuario'
DB_PASSWORD='senha'
DATABASE='nome do banco'
DB_HOST= 'tipo de host do banco exemplo:'localhost''
DB_PORT='porta do mysql'
PORT='porta do servidor'
DB_DIALECT=mysql
JWT_SECRET = secret da api
```

## 📫Endpoints
### User

**create** `metodo post`

```
API:(porta se o acesso for local)/User/create-user

body: {"email":"email" "password":"password" "name":"name" }
```

**login** `metodo post`

```
API:(porta se o acesso for local)/user/login-user

body: {"email":"email" "password":"password"}
```

**logout** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/User/logout-user

headers:x-acess-token
```

**update** `metodo patch`

```
API:(porta se o acesso for local)/User/update-user

body(somente 1 dos parâmentros é necessário): {"email":"email" "password":"password"}
headers:x-acess-token
```

### Messages

**create** `metodo post`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Messages/create-message
body: {"message":"message"}
headers:x-acess-token
```

**like** `metodo patch`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Messages/toggle-like/2
headers:x-acess-token
```

**update** `metodo patch`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Messages/update-message/2
body: {"message":"message"}
headers:x-acess-token
```

**mensagems de apoio** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Messages/mensagensDeApoio
```

**minhas mensagems** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Messages/my-messages
headers:x-acess-token
```


### Sites

**abrangendo tema** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Sites/abrangendo-tema
```

**ajuda** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Sites/ajuda
```


### Adm

**cadastra primeiro adm** `metodo get` só para o caso do acesso do projeto localmente:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/registerAdm-first
body: {"name":"name" "password":"password"}
```

**cadastra** `metodo post`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/create-adm
body: {"name":"name" "password":"password"}
headers:x-acess-token
```

**login** `metodo post`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/login-adm
body: {"name":"name" "password":"password"}
```

**show all users** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/showALL-users
headers:x-acess-token
```

**logout** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/logout-adm
headers:x-acess-token
```

**update adm** `metodo patch`:

exemplo de requisição:
```
API:(porta se o acesso for local)/Adm/update-adm
body(somente 1 dos parâmentros é necessário): {"name":"name" "password":"password"}
headers:x-acess-token
```

**delete message** `metodo delete`:

exemplo de requisição:
```
API:(porta se o acesso for local)Adm/delete-message/:messageid
headers:x-acess-token
```

**delete adm** `metodo delete`:

exemplo de requisição:
```
API:(porta se o acesso for local)Adm/delete-adm/:admid
headers:x-acess-token
```

**delete user** `metodo delete`:

exemplo de requisição:
```
API:(porta se o acesso for local)Adm/delete-user/:userid
headers:x-acess-token
```

### Relaxing

**Random Sounds** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)Relaxing/random-sound
```

**Random Music** `metodo get`:

exemplo de requisição:
```
API:(porta se o acesso for local)Relaxing/random-music
```

## Considerações Finais 📦​
A API possívelmente ainda vai passar por atualizações para melhorar e trazer mais ferramentas que atendem seu proposito!

