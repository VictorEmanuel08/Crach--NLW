//variaveis Let ou Const
// Const = valor constante
// Let = valor que pode ser alterado
// Criando dados estruturados/objetos no JS:
// let accept = true
// let user = {
//   name: 'Victor Emanuel',
//   phone: 98992303667
// }
// alert(user.phone)

// function showMeSomething(texto) {
//   alert(texto)
// }
// função mostra algo (um texto) que será puxado quando a função for chamada
// showMeSomething(links.instagram)

const LinksSocialMedia = {
  github: 'VictorEmanuel08',
  youtube: 'channel/UCzJ3rK8ijmKt_lEY-GS0-aw',
  facebook: 'VictorSantos',
  instagram: 'vvictor__emanuel',
  twitter: 'victor__san'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //uma variavel guarda uma classe definida na li através de um getAttribute

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //primeiro procura a href especifica, identifica o id social correto, vai em LinksSocialMedia e passa o social correto
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //acessando dados dentro do github
      //fetch pega a resposta e armazena no then com uma arrow function
      //gera uma resposta e armazena ela em json
      userName.textContent = data.name
      UserId.textContent = data.id //alterando o id inicial para o id que está no Json
      UserBio.textContent = data.bio //alterando a bio inicial para a bio que está no Json
      userLink.href = data.html_url ////alterando a url inicial
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

//response => é uma arrow function. forma rapida de fazer a função
//response=> {}

getGitHubProfileInfos()
