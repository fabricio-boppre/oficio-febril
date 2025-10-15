1. [Introdução](#introducao)
2. [Acessando o repositório de arquivos](#acessando-o-repositorio)
3. [Entendendo a estrutura de pastas e arquivos do repositório](#entendendo-a-estrutura)
4. [Formato de um arquivo de conteúdo](#formato-de-um-arquivo)
5. [Publicando novo conteúdo](#publicando-novo-conteudo)
6. [Editando conteúdo](#editando-conteudo)
7. [Dicas gerais para a publicação de textos](#dicas-gerais)
8. [Descrição detalhada das seções do site](#descricao-detalhada-das-secoes)
   1. [Tela inicial](#tela-inicial)
      1. [Clichês](#cliches)
   2. [Sobre os projetos](#sobre-os-projetos)
   3. [Processos artísticos](#processos-artisticos)
   4. [Quando os tipos se movem](#quando-os-tipos-se-movem)
   5. [Pesquisa e publicações](#pesquisa-e-publicacoes)
   6. [A oficina e o ofício](#a-oficina-e-o-oficio)

--

## Introdução <a name="introducao"></a>

O conteúdo do site do Ofício Febril está armazenado em arquivos do tipo MDX, que ficam armazenados em um repositório colaborativo de arquivos. Sempre que novos arquivos são publicados neste repositório, um processo de reconstrução do site é automaticamente disparado. Esta reconstrução fará com que o conteúdo presente nos novos arquivos (ou a alteração feita em conteúdo pré-existente) seja integrado às telas do site.

Estes arquivos possuem estruturas de dados específicas e são armazenados em pastas pré-definidas. Estas estruturas e pastas garantem que todas as informações necessárias para a reconstrução do site estejam presentes e o conteúdo seja corretamente integrado ao site.

## Acessando o repositório de arquivos <a name="acessando-o-repositorio"></a>

O serviço utilizado como repositório colaborativo é o GitHub (https://github.com/). O endereço direto para o repositório do Ofício Febril é https://github.com/fabricio-boppre/oficio-febril. Neste endereço, o trecho _fabricio-boppre_ é referente ao usuário do criador do repositório, ao qual obrigatoriamente este permanece associado. É possível, em todo o caso, associar quantos colaboradores forem necessários.

Foi criado um colaborador genérico utilizando a conta do Google _oficiofebril@gmail.com_. Na tela de _Sign in_ do serviço (https://github.com/login), basta clicar em _Continue with Google_. Feita a autenticação, o link a seguir levará diretamente à pasta _content_, onde estão armazenados os arquivos de conteúdo do site: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content.

**Atenção!** Não modifique nenhum arquivo que esteja em outra pasta que não seja a _content_ e suas subpastas. Estes outros arquivos são responsáveis pelo funcionamento do site, e alterações podem significar danos ao seu funcionamento e layout.

## Entendendo a estrutura de pastas e arquivos do repositório <a name="entendendo-a-estrutura"></a>

Os arquivos que abrigam o conteúdo do site estão na pasta _content_ do repositório (https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content), agrupados em pastas que correspondem às categorias ou seções. Por exemplo, a subpasta _processos-artisticos_ armazena o conteúdo publicado na seção _Processos artísticos_ do site.

Os arquivos e subpastas utilizam o formato de nomenclatura conhecido como _slug_. Um _slug_ é uma expressão que pode ser utilizada como parte de um endereço web, ou seja, não possui espaços e nem caracteres especiais. Por exemplo, o título _Convenção de tipógrafos_, no formato _slug_, vira _convencao-de-tipografos_. Utilize sempre este formato para nomear os arquivos a serem enviados para a pasta _content_.

## Formato de um arquivo de conteúdo <a name="formato-de-um-arquivo"></a>

Os arquivos de conteúdo devem possuir a terminação MDX. Por exemplo, o arquivo _grande-festa.mdx_, armazenado na subpasta _processos-artisticos_ e com o conteúdo exibido abaixo, será o responsável pela tela _Grande festa_ a ser exibida na seção _Processos artísticos_:

```
---
titulo: Grande festa
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./grande-festa-index.jpg
descricao: Descrição do processo artístico.
data_da_publicacao: YYYY-MM-DD
artistas:
  - slug_do_artista_1
  - slug_do_artista_2
---

Para usar itálico, você deve colocar o *conteúdo entre asteriscos*. Para negrito, **dois asteriscos**.

Um link é [assim](https://link.com.br). Neste caso, a palavra com link será a “assim”.

Listas funcionam assim:

- Item 1
- Item 2

Listas numeradas:

1. Item 1
2. Item 2

## Subtítulo nível 2

Uma imagem:

![Grande festa](./grande-festa-1.jpg)
_Legenda da imagem_

### Subtítulo nível 3

(...)

#### Subtítulo nível 4

(...)

```

Explicando este formato:

1. O trecho inicial, cercado por três traços e chamado _front matter_, traz informações sobre o conteúdo: o título do texto, a data de publicação, etc. Essas informações são obrigatórias e seus títulos (antes dos dois pontos) não devem ser alterados; preencha somente o conteúdo depois dos dois pontos;
2. Ainda na _front matter_, imagens devem ser preenchidas com o nome do arquivo precedido por um ponto e uma barra (./). Datas devem obedecer ao formato YYYY-MM-DD;
3. A _front matter_ dos arquivos pode variar de acordo com o layout de cada seção. Por exemplo, uma seção pode ter seu índice ilustrado por imagens enquanto outra tem o índice formado apenas por links textuais; neste caso, a _front matter_ dos arquivos deste segunda seção não teria o item _imagem_ilustrativa_;
4. Após o fechamento da _front matter_ vem o conteúdo propriamente dito. Para formatação, utilize códigos Markdown, que servem para formatar textos que serão exibidos em sites. Alguns dos códigos mais comuns estão no exemplo acima. No link a seguir estão explicados todos os códigos Markdown: https://www.markdownguide.org/basic-syntax/. Neste outro é possível fazer testes online: https://markdownlivepreview.com/.
5. Para exibir imagens, podemos recorrer também ao Markdown. Uma imagem é inserida da seguinte forma:

```
![Texto alternativo](./arquivo.jpg)
_Legenda_
```

_Texto alternativo_ é o texto a ser exibido em caso de falha na exibição da imagem ou a ser lido por dispositivos de leitura de sites para deficientes visuais; _arquivo.jpg_ é o nome do arquivo da imagem; _Legenda_ é a legenda da imagem (opcional). Não deve haver linha em branco entre estas duas linhas.

## Publicando novo conteúdo <a name="publicando-novo-conteudo"></a>

É recomendável preparar os arquivos referentes a um novo conteúdo (arquivo MDX e imagens relacionadas, se existirem) previamente em um computador local, e somente quando prontos partir para a publicação no repositório.

Em computadores locais, arquivos MDX devem ser criados em editores de texto puro, já que não podem ter nenhum tipo de formatação proprietária (como as dos arquivos do tipo DOC, por exemplo). Para ver o formato da _front matter_ do arquivo que você irá criar (que depende da seção à qual ele pertencerá), você pode abrir um arquivo já existente no repositório, na subpasta desta seção, e copiar seu conteúdo e colá-lo no arquivo local que você irá criar.

As imagens devem ser colocadas na mesma pasta do arquivo MDX que faz referência a elas.

Recomenda-se também nomear os arquivos referentes a um conteúdo todos com a mesma _slug_, para que estes fiquem agrupados na listagem de arquivos, facilitando seu acesso e compreensão. Para diferenciar arquivos que ficariam com o mesmo nome, acrescente uma terminação que os distinga. Por exemplo, um evento nomeado _Feira de tipos móveis_ poderia ser formado pelos seguintes arquivos:

- feira-de-tipos-moveis.mdx
- feira-de-tipos-moveis-index.jpg
- feira-de-tipos-moveis-1.jpg
- feira-de-tipos-moveis-2.jpg

O primeiro arquivo é o do conteúdo; o segundo é a imagem que vai ser utilizada no índice da seção (e que será informada na _front matter_ do arquivo MDX); os dois últimos são imagens a serem exibidos no corpo do texto.

Quando os arquivos estiverem prontos para serem publicados, siga o roteiro abaixo:

1. Acesse o repositório de arquivos e vá até a pasta _content_ (link direto para ela: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content);
2. Entre na devida subpasta do conteúdo que você quer publicar;
3. Clique no botão _Add file_, no canto superior direito, e, na sequência, _Upload files_;
4. Faça o upload dos arquivos usando um dos métodos sugeridos;
5. Quando os arquivos aparecerem relacionados como prontos para publicação, você pode preencher o campo de descrição logo abaixo de _Commit changes_, descrevendo o que está sendo publicado, quem está publicando e quaisquer outras informações que achar conveniente deixar registradas. Utilize para isso o campo _extended description_, deixando o primeiro campo com o texto padrão _Add files via upload_. Mas isso é opcional e pode ser deixado intacto;
6. Clique no botão verde _Commit changes_ (que significa algo como _Efetivar mudanças_);
7. Começará então o processo (ou _workflow_) de reconstrução do site. Para acompanhar o andamento deste _workflow_, clique em _Actions_ (link direto: https://github.com/fabricio-boppre/oficio-febril/actions). Ao finalizar, um ícone verde ao lado do mais recente _workflow_ sinalizará seu sucesso; em caso de falha, será exibido um ícone vermelho. Tendo funcionado, você já pode visitar o site para verificar a atualização em seu conteúdo. Caso ocorra alguma falha, o site permanecerá funcionando em sua última versão pré-falha, ou seja, sem o conteúdo cuja publicação ocasionou o problema.

## Editando conteúdo <a name="editando-conteudo"></a>

Para editar um conteúdo previamente publicado no site, você deve localizar seu arquivo MDX na estrutura de conteúdo (https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content) e abri-lo para visualização. No cabeçalho sobre o texto, no canto direito, há o ícone de um lápis: após clicá-lo você entra no modo de edição e poderá efetuar as mudanças. Ao finalizar, clique em _Commit changes_ para iniciar o processo de reconstrução do site.

## Dicas gerais para a publicação de textos <a name="dicas-gerais"></a>

- As imagens que serão publicadas junto com os textos devem ter no máximo 960px de largura, uma vez que esta é a largura máxima do site. Images maiores serão redimensionadas para este limite, porém o peso dos arquivos permanecerá desnecessariamente o mesmo, o que trará prejuízos para a performance do site.
- Imagens publicadas com menos do que 960px são exibidas com suas medidas originais. O site não aumenta artificialmente as medidas das imagens.
- Para publicar subtítulos ao longo dos textos, utilize apenas a marcação de segundo nível em diante, uma vez que a marcação de primeiro nível é reservada no layout para o título principal da tela. Na formatação Markdown, subtítulos são definidos com o caracter cerquilha (#) antes do título, sendo que a quantidade de cerquilhas define o nível. Veja exemplos [aqui](#formato-de-um-arquivo).

## Descrição detalhada das seções do site <a name="descricao-detalhada-das-secoes"></a>

### Tela inicial <a name="tela-inicial"></a>

#### Clichês <a name="cliches"></a>

Os clichês estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/cliches. Para publicar um novo clichê, você deve submeter um novo arquivo com a seguinte _front matter_:

```
---
titulo: título do clichê
descricao: autoria, créditos etc.
imagem: ./slug_do_cliche.jpg
---
```

Como nome do arquivo MDX e de sua imagem correspondente, utilize a slug do título do clichê. A imagem deve ser armazenada na mesma pasta dos arquivos MDX. Por exemplo, um clichê intitulado _Máquina_ será formado por dois arquivos:

- maquina.mdx
- maquina.jpg

Para a imagem, utilize arquivos com no máximo 350px de largura e 450px de altura.

### Sobre os projetos <a name="sobre-os-projetos"></a>

A tela _sobre os projetos_, sendo uma página simples (e não uma coleção de diversas páginas agrupadas em uma seção ou categoria), é formada por um único arquivo MDX. Este arquivo tem apenas o texto da tela, sem _front matter_. Para editá-lo, você pode acessar o link a seguir: https://github.com/fabricio-boppre/oficio-febril/blob/main/src/content/sobre-os-projetos/sobre-os-projetos.mdx. No cabeçalho sobre o texto, no canto direito, há o ícone de um lápis: após clicá-lo você entra no modo de edição e poderá efetuar as mudanças. Ao finalizar, clique em _Commit changes_ para iniciar o processo de reconstrução do site.

### Processos artísticos <a name="processos-artisticos"></a>

Antes de publicar ou editar processos, você deve se certificar de que seus artistas associados já estão publicados no site. Os arquivos MDX dos artistas encontram-se em https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/artistas. A _front matter_ do arquivo de um artista possui apenas seu nome. O nome do arquivo deve ser a versão _slug_ do nome do artista, e este nome _slug_ será utilizado na associação entre artistas e processos.

Os _Processos artísticos_ estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/processos-artisticos. Para publicar um novo processo, você deve submeter um novo arquivo com a seguinte _front matter_:

```
---
titulo: Processo artístico
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./processo-de-teste-index.jpg
descricao: Descrição do processo artístico.
data_da_publicacao: 2025-10-14
artistas:
  - diego-rayck
  - aline-dias
---
```

O campo _rascunho_ serve para que o processo não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. (Mais instruções em breve.)

O campo _destaque_na_capa_ serve para indicar que este processo deve aparecer em destaque na capa do site. Assim como o campo _rascunho_ acima, seu valor deve ser _true_ ou _false_.

O campo _imagem_para_indice_ serve para indicar o arquivo de imagem que será utilizado para ilustrar este processo nos índices em que ele será exibido. Utilize arquivos que tenham 200px de largura e 200px de altura, para manter estes índices bem alinhados e padronizados.

O campo _descricao_ serve para descrever o processo em índices de sistemas de pesquisa (coomo, por exemplo, no Google), compartilhamentos em redes sociais etc. Deve ser um pequeno resumo do processo, com no máximo 160 caracteres.

O campo _artistas_ serve para indicar os artistas envolvidos neste processo. Para isso, iniciando em uma nova linha, faça uma lista das _slugs_ dos artistas deste processo (um ou mais), com dois espaços antes de cada item e um traço precedendo as _slugs_, exatamente como no exemplo acima. Fazendo corretamente esta associação, o site se encarrega de exibir os artistas na tela de um processo e também de exibir os processos de um artista em sua tela.

Por fim, abaixo da _front matter_, insira o conteúdo de texto e imagens deste processo utilizando o formato Markdown.

Para a organização e nomenclatura dos arquivos, siga as sugestões descritas [aqui](#publicando-novo-conteudo). Dicas gerais se encontram [aqui](#dicas-gerais).

### Quando os tipos se movem <a name="quando-os-tipos-se-movem"></a>

[em construção]

### Pesquisa e publicações <a name="pesquisa-e-publicacoes"></a>

[em construção]

### A oficina e o ofício <a name="a-oficina-e-o-oficio"></a>

[em construção]
