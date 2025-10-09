1. [Descrição conceitual](#descricao-conceitual)
2. [Acessando o repositório de arquivos](#acessando-o-repositorio)
3. [Entendendo a estrutura de pastas e arquivos do repositório](#entendendo-a-estrutura)
4. [Formato de um arquivo de conteúdo](#formato-de-um-arquivo)
5. [Publicando novo conteúdo](#publicando-novo-conteudo)

--

## Descrição conceitual <a name="descricao-conceitual"></a>

O conteúdo do site do Ofício Febril está armazenado em arquivos do tipo MDX, que ficam armazenados em um repositório colaborativo de arquivos. Sempre que novos arquivos são publicados neste repositório, um processo de reconstrução do site é automaticamente disparado. Esta reconstrução fará com que o conteúdo presente nos novos arquivos seja integrado às telas do site.

Estes arquivos possuem estruturas de dados específicas e são armazenados em pastas pré-definidas. Estas estruturas e pastas garantem que todas as informações necessárias para a reconstrução do site estejam presentes e o conteúdo seja corretamente integrado ao site.

## Acessando o repositório de arquivos <a name="acessando-o-repositorio"></a>

O serviço utilizado como repositório colaborativo é o GitHub (https://github.com/). O endereço direto para o repositório do Ofício Febril é https://github.com/fabricio-boppre/oficio-febril. Neste endereço, o trecho "fabricio-boppre" é referente ao usuário do criador do repositório, ao qual obrigatoriamente este permanece associado. É possível, em todo o caso, associar quantos colaboradores forem necessários.

Foi criado um colaborador genérico utilizando a conta do Google "oficiofebril@gmail.com". Na tela de "Sign in" do serviço (https://github.com/login), basta clicar em "Continue with Google". Feita a autenticação, basta você navegar até o repositório “oficio-febril". O link a seguir levará diretamente à pasta “content”, onde estão armazenados os arquivos de conteúdo do site: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content.

**Atenção!** Não modifique nenhum arquivo que esteja em outra pasta que não seja a “content” e suas subpastas. Estes outros arquivos são responsáveis pelo funcionamento do site, e alterações podem significar danos ao seu funcionamento e layout.

## Entendendo a estrutura de pastas e arquivos do repositório <a name="entendendo-a-estrutura"></a>

Todos os arquivos que correspondem ao conteúdo do site estão na pasta “content" do repositório (https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content), enquanto que as subpastas lá presentes servem para agrupar os arquivos de conteúdos que fazem parte de uma mesma categoria. Por exemplo, a subpasta "processos-artisticos" armazena todos os conteúdo publicados na seção "processos artísticos" do site.

Os arquivos e subpastas utilizam o formato de nomenclatura conhecido como "slug". Um slug é uma expressão que pode ser utilizada como parte de um endereço web, ou seja, não possui espaços e nem caracteres especiais. Por exemplo, o título “Convenção de tipógrafos”, no formato slug, vira “convencao-de-tipografos”. Utilize sempre este formato para nomear os arquivos a serem enviados para a pasta “content”.

## Formato de um arquivo de conteúdo <a name="formato-de-um-arquivo"></a>

Os arquivos de conteúdo devem possuir a terminação MDX. Por exemplo, o arquivo “grande-festa.mdx”, armazenado na subpasta processos-artisticos e com o conteúdo exibido abaixo, será o responsável pela tela “Grande festa” a ser exibida na seção "processos artísticos”:

```
---
titulo: Grande festa.
rascunho: true | false
destaque_na_capa: true | false
imagem_para_indice: ./grande-festa-index.jpg
descricao: Descrição do processo artístico.
data_da_publicacao: YYYY-MM-DD
artistas:
  - slug_do_artista_1
  - slug_do_artista_2
---

Teremos uma grande festa! Para usar itálico, você deve colocar o *conteúdo entre asteriscos*. Para negrito, **dois asteriscos**.

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
```

Explicando este formato:

1. O trecho inicial, cercado por três traços, é o que chamamos de “front matter”, e traz informações sobre o conteúdo: o título do texto, a data de publicação, etc. Essas informações são obrigatórias e seus títulos (em azul no exemplo acima) não devem ser alterados; preencha somente seus valores depois dos dois pontos;
2. Ainda na “front matter”, imagens ilustrativas (ou outras, se existirem) devem ser preenchidas com o nome do arquivo precedido por um ponto e uma barra (./). Datas devem obedecer o formato YYYY-MM-DD;
3. A “front matter” dos arquivos pode variar, dependendo das seções do site às quais eles pertencem. Por exemplo, uma seção pode ter um índice ilustrado por imagens e outra por apenas títulos textuais; neste caso, a “front matter” dos arquivos deste segunda seção não teria o item “imagem_ilustrativa”;
4. Após o fechamento da “front matter” vem o conteúdo propriamente dito. Para formatação, utilize códigos Markdown, que servem para formatar textos que serão exibidos em sites: conteúdo entre dois asteriscos, por exemplo, vai aparecer em negrito. No link a seguir estão explicados todos os códigos Markdown: https://www.markdownguide.org/basic-syntax/. Neste outro é possível fazer testes online: https://markdownlivepreview.com/.
5. Para exibir imagens, podemos recorrer também ao Markdown. Uma imagem é inserida da seguinte forma:

```
![Texto alternativo](./arquivo.jpg)
_Legenda_
```

“Texto alternativo” é o texto a ser exibido em caso de falha na exibição da imagem ou a ser lido por dispositivos de leitura de sites para deficientes visuais; “arquivo.jpg” é o nome do arquivo da imagem; “Legenda" é a legenda da imagem (opcional). Não deve haver linha em branco entre estas duas linhas.

## Publicando novo conteúdo <a name="publicando-novo-conteudo"></a>

É recomendável preparar os arquivos referentes a um novo conteúdo (arquivo MDX e imagens relacionadas, se existirem) previamente em um computador local, e somente quando prontos partir para a publicação no repositório.

Em computadores locais, arquivos MDX devem ser criados em editores de texto puro, já que não podem ter nenhum tipo de formatação proprietária (como as dos arquivos do tipo DOC, por exemplo). Para ver o formato da "front matter” do arquivo que você irá criar (que depende da seção à qual ele pertencerá), você pode abrir um arquivo já existente no repositório, na pasta desta seção, e copiar seu conteúdo e colá-lo no arquivo local que você irá criar.

As imagens devem ser colocadas na mesma pasta do arquivo MDX que faz referência a elas.

Recomenda-se também nomear os arquivos referentes a um conteúdo todos com a mesma slug, para que estes fiquem agrupados na listagem de arquivos, facilitando seu acesso e compreensão. Para diferenciar arquivos que ficariam com o mesmo nome, acrescente uma terminação que os distinga. Por exemplo, um evento nomeado “Feira de tipos móveis” poderia ser formado pelos seguintes arquivos:

- feira-de-tipos-moveis.mdx
- feira-de-tipos-moveis-index.jpg
- feira-de-tipos-moveis-1.jpg
- feira-de-tipos-moveis-2.jpg

O primeiro arquivo é o do conteúdo; o segundo é a imagem que vai ser utilizada no índice de eventos (que será informada na “front matter” do arquivo MDX); os dois últimos são imagens a serem exibidos no corpo do texto.

Quando os arquivos estiverem prontos para serem publicados, siga o roteiro abaixo:

1. Acesse o repositório de arquivos e vá até a pasta “content" (link direto para ela: https://github.com/fabricio-boppre/oficio-febril/tree/main/src/content);
2. Entre no devido diretório do conteúdo que você quer publicar;
3. Clique no botão “Add file”, no canto superior direito, e, na sequência, “Upload files”;
4. Faça o upload dos arquivos usando um dos métodos sugeridos;
5. Quando os arquivos aparecerem relacionados como prontos para publicação, você pode preencher o campo de descrição logo abaixo de "Commit changes”, descrevendo o que está sendo publicado, quem está publicando e quaisquer outras informações que achar importante deixar registradas. Utilize para isso o campo para “extended description”, deixando o primeiro campo com o texto padrão “Add files via upload”. Mas isso é opcional e pode ser deixado intacto;
6. Clique no botão verde “Commit changes” (que significa algo como “Efetivar mudanças”);
7. Começará então o processo de reconstrução do site. Na tela seguinte, o pequeno ponto marrom ao lado de “Add files via upload” significa que o processo está em andamento; ao finalizar, ele será substituído por um ícone verde de sucesso caso tenha funcionado corretamente ou um ícone vermelho de falha. Tendo funcionado, você já pode visitar o site para verificar a atualização no conteúdo. (Caso tenha ocorrido alguma falha, o site permanecerá funcionando em sua última versão pré-falha, ou seja, sem o conteúdo cuja publicação ocasionou a falha.)
