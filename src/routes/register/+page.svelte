<style>
  input {
      text-align: center;
      margin-top: 5px;
  }

  .espacamento {
      padding-top: 10px;
  }
</style>

<body class="flex items-center">
  <div class="card p-10 text-center w-[30%] mx-auto">
    <div>
      <span>Nome de usuário:</span>
      <input class="input" type="text" placeholder="username"/>
    </div>
    <div class="espacamento">
      <span>Email:</span>
      <input class="input" type="email" placeholder="email"/>
    </div>
    <div class="espacamento">
      <span>Senha:</span>
      <input class="input" type="password" placeholder="senha"/>
    </div>
    <div class="mt-5">
      <button type="button" class="btn variant-ghost">Cadastrar</button>
    </div>
  </div>
</body>