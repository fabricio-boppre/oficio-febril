1. [Introdução](#introducao)
2. [Acessando o repositório de arquivos](#acessando-o-repositorio)
3. [Entendendo a estrutura de pastas e arquivos do repositório](#entendendo-a-estrutura)
4. [Formato de um arquivo de conteúdo](#formato-de-um-arquivo)
5. [Publicando novo conteúdo](#publicando-novo-conteudo)
6. [Editando conteúdo](#editando-conteudo)
7. [Dicas gerais para a publicação de textos](#dicas-gerais)
8. [Publicando vídeos](#publicando-videos)
9. [Descrição detalhada das seções do site](#descricao-detalhada-das-secoes)
   1. [Tela inicial](#tela-inicial)
      1. [Clichês](#cliches)
      2. [Febres](#febres)
      3. [Artistas](#artistas)
   2. [Sobre os projetos](#sobre-os-projetos)
   3. [Processos artísticos](#processos-artisticos)
   4. [Quando os tipos se movem](#quando-os-tipos-se-movem)
   5. [Pesquisa e publicações](#pesquisa-e-publicacoes)
      1. [Arquivo PDF](#arquivo-pdf)
      2. [Link externo](#link-externo)
      3. [Link interno](#link-interno)
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

Os arquivos de conteúdo devem possuir a terminação .mdx. Por exemplo, o arquivo _grande-festa.mdx_, armazenado na subpasta _processos-artisticos_ e com o conteúdo exibido abaixo, será o responsável pela tela _Grande festa_ a ser exibida na seção _Processos artísticos_:

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
2. Ainda na _front matter_, imagens devem ser preenchidas com o nome do arquivo precedido por um ponto e uma barra (./). Datas devem obedecer ao formato AAAA-MM-DD;
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
- No corpo de um texto, para criar um novo parágrafo, você deve deixar uma linha em branco entre o bloco anterior (se houver) e o posterior (se houver). Se não existir esta linha em branco, o bloco de texto será antecedido ou precedido por uma simples quebra de linha em relação aos seu(s) bloco(s) vizinho(s). Este comportamento vale para qualquer bloco: textos (parágrafos), listas, imagens, vídeos etc.
- Para publicar subtítulos ao longo dos textos, utilize apenas a marcação de segundo nível em diante, uma vez que a marcação de primeiro nível é reservada no layout para o título principal da tela. Na formatação Markdown, subtítulos são definidos com o caracter cerquilha (#) antes do título, sendo que a quantidade de cerquilhas define o nível. Veja exemplos [aqui](#formato-de-um-arquivo).
- Se você quiser publicar um novo conteúdo mas avaliá-lo e revisá-lo antes de torná-lo público, você pode cadastrar o campo _rascunho_ na _front matter_ como _true_. Desta forma este texto não irá imediatamente aparecer no site público, mas estará disponível para revisão na tela de [administração de rascunhos](/admin/rascunhos). Feita a revisão, basta [editar o conteúdo](#editando-conteudo), configurando desta vez o campo _rascunho_ como _false_. Então, na reconstrução que irá se seguir, o texto irá aparecer no site público.

## Publicando vídeos <a name="publicando-videos"></a>

Para publicar um vídeo do YoutTube junto do conteúdo de uma tela, é possível simplesmente colar o código de integração que o próprio YouTube oferece para seus vídeos. Esta funcionalidade do YouTube, no entanto, é insatisfatória pois os vídeos assim publicados não são responsivos, ou seja, são sempre exibidos com uma largura fixa que não se adequa à visualização em telas pequenas. Para resolver este problema, podemos utilizar uma solução independente chamada _Astro Embed_. Trata-se de uma extensão que deve ser invocada no começo do arquivo MDX. Segue exemplo abaixo:

```
---
titulo: Grande festa
rascunho: true | false
(...)
---

import { YouTube } from "astro-embed"

Veja este bonito vídeo abaixo:

<YouTube id="https://www.youtube.com/watch?v=MbxRu7fwR24" />

Aqui continua o texto.
```

A linha que vem logo embaixo da _front matter_, que inicia com _import_, deve ser copiada exatamente da maneira exemplificada acima (ela não será exibida no texto a ser publicado no site). O vídeo aparecerá onde for inserido o módulo _< YouTube id="URL do vídeo" >_, que deve ser escrito examente como exemplificado acima, substituindo apenas o endereço do vídeo de exemplo pelo do vídeo que você quer exibir.

A extensão _Astro Embed_ também pode ser utilizada para exibir vídeos do Vimeo e tweets do Twitter. Clique [aqui](https://astro-embed.netlify.app/getting-started/#supported-services) para mais instruções.

## Descrição detalhada das seções do site <a name="descricao-detalhada-das-secoes"></a>

### Tela inicial <a name="tela-inicial"></a>

A tela inicial é composta por algumas seções. Abaixo seguem as instruções para cada uma delas:

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

#### Febres <a name="febres"></a>

Os itens apresentados sob o título _Febres_ provêm das seções _Processos artísticos_, _Quando os tipos se movem_ e _A oficina e o ofício_. Para que um conteúdo destas seções seja exibido aqui, basta marcar o campo _destaque_na_capa_ em sua _front matter_ como _true_.

#### Artistas <a name="artistas"></a>

Os nomes exibidos nesta lista são os dos artistas publicados no âmbito da seção _Processos artísticos_. Ver instruções [aqui](#processos-artisticos).

### Sobre os projetos <a name="sobre-os-projetos"></a>

A tela _sobre os projetos_, sendo uma página simples (e não uma coleção de diversas páginas agrupadas em uma seção ou categoria), é formada por um único arquivo MDX. Este arquivo tem apenas o texto da tela, sem _front matter_. Para editá-lo, você pode acessar o link a seguir: https://github.com/fabricio-boppre/oficio-febril/blob/main/src/content/sobre-os-projetos/sobre-os-projetos.mdx. No cabeçalho sobre o texto, no canto direito, há o ícone de um lápis: após clicá-lo você entra no modo de edição e poderá efetuar as mudanças. Ao finalizar, clique em _Commit changes_ para iniciar o processo de reconstrução do site.

### Processos artísticos <a name="processos-artisticos"></a>

Antes de publicar ou editar processos, você deve se certificar de que seus artistas associados já estão publicados no site. Os arquivos MDX dos artistas encontram-se em https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/artistas. A _front matter_ do arquivo de um artista possui apenas seu nome. Se você quiser acrescentar informações sobre os artistas (a serem exibidas na tela que cada artista possui dentro da seção _Processos artísticos_), você pode fazê-lo no corpo de seus respectivos arquivos MDX, logo abaixo da _front matter_, utilizando o formato Markdown. O nome do arquivo de cada artista deve ser a versão _slug_ de seu nome, e este nome _slug_ será utilizado na associação entre artistas e processos.

Os _Processos artísticos_ estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/processos-artisticos. Para publicar um novo processo, você deve submeter um novo arquivo com a seguinte _front matter_:

```
---
titulo: Processo artístico
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./processo-de-teste-index.jpg
descricao: Descrição do processo artístico.
data_da_publicacao: AAAA-MM-DD
artistas:
  - diego-rayck
  - aline-dias
---
```

O campo _rascunho_ serve para que o processo não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _destaque_na_capa_ serve para indicar que este processo deve aparecer em destaque na capa do site. Assim como o campo _rascunho_ acima, seu valor deve ser _true_ ou _false_.

O campo _imagem_para_indice_ serve para indicar o arquivo de imagem que será utilizado para ilustrar este processo nos índices em que ele será exibido. Utilize arquivos que tenham 200px de largura e 200px de altura, para manter estes índices bem alinhados e padronizados.

O campo _descricao_ serve para descrever o processo em índices de sistemas de pesquisa (coomo, por exemplo, no Google), compartilhamentos em redes sociais etc. Deve ser um pequeno resumo do processo, com no máximo 160 caracteres.

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

O campo _artistas_ serve para indicar os artistas envolvidos neste processo. Para isso, iniciando em uma nova linha, faça uma lista das _slugs_ dos artistas deste processo (um ou mais), com dois espaços antes de cada item e um traço precedendo as _slugs_, exatamente como no exemplo acima. Fazendo corretamente esta associação, o site se encarrega de exibir os artistas na tela de um processo e também de exibir os processos de um artista em sua tela.

Por fim, abaixo da _front matter_, insira o conteúdo de texto e imagens deste processo utilizando o formato Markdown.

Para a organização e nomenclatura dos arquivos, siga as sugestões descritas [aqui](#publicando-novo-conteudo). Dicas gerais se encontram [aqui](#dicas-gerais).

### Quando os tipos se movem <a name="quando-os-tipos-se-movem"></a>

Os textos da seção _Quando os tipos se movem_ estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/quando-os-tipos-se-movem. Para publicar um novo texto, você deve submeter um novo arquivo com a seguinte _front matter_:

```
---
titulo: Título do texto
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./titulo-do-texto-index.jpg
descricao: Descrição do texto.
data_da_publicacao: AAAA-MM-DD
---
```

O campo _rascunho_ serve para que o texto não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _destaque_na_capa_ serve para indicar que este texto deve aparecer em destaque na capa do site. Assim como o campo _rascunho_ acima, seu valor deve ser _true_ ou _false_.

O campo _imagem_para_indice_ serve para indicar o arquivo de imagem que será utilizado para ilustrar este texto nos índices em que ele será exibido. Utilize arquivos que tenham 200px de largura e 200px de altura, para manter estes índices bem alinhados e padronizados.

O campo _descricao_ serve para descrever o texto em índices de sistemas de pesquisa (coomo, por exemplo, no Google), compartilhamentos em redes sociais etc. Deve ser um pequeno resumo do texto, com no máximo 160 caracteres.

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

Por fim, abaixo da _front matter_, insira o conteúdo de texto e imagens utilizando o formato Markdown.

Para a organização e nomenclatura dos arquivos, siga as sugestões descritas [aqui](#publicando-novo-conteudo). Dicas gerais se encontram [aqui](#dicas-gerais).

### Pesquisa e publicações <a name="pesquisa-e-publicacoes"></a>

Os itens da seção _Pesquisa e publicações_ estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/pesquisa-e-publicacoes. Estes itens podem ser de três tipos diferentes: links para arquivos no formato PDF, links para telas de sites externos e links para telas do próprio site do Ofício Febril. O comportamento de cada item será definido pela _front matter_ de seu arquivo MDX correspondente. Abaixo seguem as instruções sobre como publicar cada tipo:

#### Arquivo PDF <a name="arquivo-pdf"></a>

Antes da publicação de um link para um arquivo PDF, é necessário publicar este arquivo. Diferentemente das imagens, que podem ser publicadas nas mesmas pastas dos arquivos MDX que as utilizam, arquivos PDF devem ser publicados em uma pasta separada específica. Portanto a publicação de um link para um PDF deve ser feita em duas etapas: primeiro, publique o arquivo PDF na pasta https://github.com/fabricio-boppre/oficio-febril/tree/main/public/pdf. Finalizado o _workflow_ de reconstrução do site, agora você deve publicar o devido arquivo MDX na pasta https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/pesquisa-e-publicacoes e com a seguinte _front matter_:

```
---
titulo: Título do item
rascunho: true | false
arquivo_pdf: ./titulo-do-item.pdf
data_da_publicacao: AAAA-MM-DD
---
```

O campo _titulo_ será o texto exibido como link para o PDF.

O campo _rascunho_ serve para que o item não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _arquivo_pdf_ é o título do arquivo PDF que você publicou na etapa anterior.

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

#### Link externo <a name="link-externo"></a>

Itens no formato de link para um outro site devem possuir a seguinte _front matter_:

```
---
titulo: Título do item
rascunho: true | false
link_externo: https://www.endereco.com.br
data_da_publicacao: AAAA-MM-DD
---
```

O campo _titulo_ será o texto exibido como link para o site externo.

O campo _rascunho_ serve para que o item não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _link_externo_ é o endereço para o qual o link deve remeter (não esqueça do http:// ou https://).

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

#### Link interno <a name="link-interno"></a>

Por último, links para conteúdos publicados no próprio site do Ofício Febril têm a seguinte _front matter_:

```
---
titulo: Título do item
rascunho: true | false
descricao: Uma descrição deste conteúdo.
data_da_publicacao: AAAA-MM-DD
---
```

O campo _titulo_ será o texto exibido como link para este item.

O campo _rascunho_ serve para que o item não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _descricao_ serve para descrever o texto em índices de sistemas de pesquisa (coomo, por exemplo, no Google), compartilhamentos em redes sociais etc. Deve ser um pequeno resumo do texto, com no máximo 160 caracteres. Note que nos dois outros formatos (links para arquivos PDF ou sites externo) este campo não existe, mas para links que abrirão telas no próprio site do Ofício Febril, ele é obrigatório.

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

Por fim, o conteúdo da tela deste item deve ser publicado em formato Markdown logo abaixo da _front matter_.

### A oficina e o ofício <a name="a-oficina-e-o-oficio"></a>

Os textos da seção _A oficina e o ofício_ estão cadastrados em arquivos MDX localizados nesta pasta: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content/a-oficina-e-o-oficio. Para publicar um novo texto, você deve submeter um novo arquivo com a seguinte _front matter_:

```
---
titulo: Título do texto
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./titulo-do-texto-index.jpg
descricao: Descrição do texto.
data_da_publicacao: AAAA-MM-DD
---
```

O campo _rascunho_ serve para que o texto não apareça de imediato no site após a sua reconstrução, para que você possa revisá-lo antes através de um link separado. Ver instruções em [Dicas gerais para a publicação de textos](#dicas-gerais).

O campo _destaque_na_capa_ serve para indicar que este texto deve aparecer em destaque na capa do site. Assim como o campo _rascunho_ acima, seu valor deve ser _true_ ou _false_.

O campo _imagem_para_indice_ serve para indicar o arquivo de imagem que será utilizado para ilustrar este texto nos índices em que ele será exibido. Utilize arquivos que tenham 200px de largura e 200px de altura, para manter estes índices bem alinhados e padronizados.

O campo _descricao_ serve para descrever o texto em índices de sistemas de pesquisa (coomo, por exemplo, no Google), compartilhamentos em redes sociais etc. Deve ser um pequeno resumo do texto, com no máximo 160 caracteres.

O campo _data_da_publicacao_ deve ser peenchido com a data da publicação deste conteúdo (no formato AAAA-MM-DD), que será utilizado para ordenar os itens nos índices em que eles aparecerem.

Por fim, abaixo da _front matter_, insira o conteúdo de texto e imagens utilizando o formato Markdown.

Para a organização e nomenclatura dos arquivos, siga as sugestões descritas [aqui](#publicando-novo-conteudo). Dicas gerais se encontram [aqui](#dicas-gerais).
