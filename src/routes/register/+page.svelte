<style>
  input {
      margin-top: 5px;
  }

  .espacamento {
      padding-top: 10px;
  }

  .espacamento_icones {
      padding-right: 5px;
  }
</style>

<body class="flex items-center">
  <div class="card p-10 w-[30%] mx-auto">
    <div>
      <i class="espacamento_icones fa-solid fa-user"></i>
      <span>Nome de usuário:</span>
      <input class="input" type="text" placeholder="username"/>
    </div>
    <div class="espacamento">
      <i class="espacamento_icones fa-regular fa-envelope"></i>
      <span>Email:</span>
      <input class="input" type="email" placeholder="email"/>
    </div>
    <div class="espacamento">
      <i class="espacamento_icones fa-solid fa-lock"></i>
      <span>Senha:</span>
      <input class="input" type="password" placeholder="senha"/>
    </div>
    <div class="mt-5">
      <button type="button" class="btn variant-ghost">Cadastrar</button>
    </div>
  </div>
</body>