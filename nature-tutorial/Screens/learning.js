import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      screen: '',
    };
  }
  render() {
    if (!this.state.isPressed) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Good habits that should be practiced</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/*Container touchables*/}
            <View style={styles.containerTouchables}>
              <View style={styles.containerTouchables2}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '1',
                    })
                  }>
                  <Text style={styles.title}>
                    Uso Sustentável de Automóveis
                  </Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        Aprenda sobre conceitos de uso sustentável quando
                        falamos de automóveis. Clique nessa aba para saber mais.
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/eletricCar2Img.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '2',
                    })
                  }>
                  <Text style={styles.title}>Reciclagem do lixo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        Aprenda mais sobre os benefícios da reciclagem e como
                        reciclar no dia a dia. Clique nessa aba para saber mais.
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/reciclagem.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '3',
                    })
                  }>
                  <Text style={styles.title}>Conservação da Água</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        Está na hora de aprender mais sobre a conservação da
                        água no nosso planeta. Clique nessa aba para saber mais.
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/gua.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '4',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/img1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '5',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '6',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '7',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '8',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '9',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    this.setState({
                      isPressed: true,
                      screen: '10',
                    })
                  }>
                  <Text style={styles.title}>Conteúdo</Text>
                  <View style={styles.infoContainer}>
                    <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitle}>
                        O subtítulo está expresso aqui
                      </Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image
                        source={require('../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      //Telas o learning
      if (this.state.screen === '1') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>
              {' '}
              Promovendo a Mobilidade sustentável
            </Text>
            <Text style={screenStyles.subtitle}>
              {' '}
              O Uso Sustentável e Alternativas para o Uso de Automóveis
            </Text>
            <View>
              <Image
                style={screenStyles.image}
                source={require('../assets/eletricCarImg.png')}
                resizeMode="cover"
              />
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 10 }}>
              <View style={screenStyles.textContainer}>
                <Text style={screenStyles.p}>
                  {' '}
                  A preservação ambiental é uma questão de extrema importância
                  quando falamos sobre automóveis, especialmente considerando os
                  impactos negativos dos veículos movidos a combustíveis
                  fósseis. Ao longo dos anos, esses automóveis têm contribuído
                  significativamente para a poluição atmosférica e as mudanças
                  climáticas. No entanto, alternativas mais sustentáveis estão
                  se tornando cada vez mais relevantes e podem ajudar a mitigar
                  esses problemas.{' '}
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Os automóveis que utilizam combustíveis fósseis, como gasolina
                  e diesel, emitem grandes quantidades de dióxido de carbono
                  (CO2) e outros poluentes atmosféricos. Essas emissões são
                  responsáveis pelo aumento do efeito estufa e pelo aquecimento
                  global, levando a consequências graves, como o derretimento
                  das calotas polares, o aumento do nível do mar e eventos
                  climáticos extremos.{' '}
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Uma alternativa melhor para a preservação ambiental é a adoção
                  de veículos elétricos. Os carros elétricos não emitem gases de
                  escape durante a condução, o que reduz drasticamente a
                  poluição do ar. Além disso, se a eletricidade utilizada para
                  carregar esses veículos provier de fontes renováveis, como
                  solar ou eólica, o impacto ambiental será ainda menor.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Outra opção interessante são os veículos híbridos, que
                  combinam um motor de combustão interna com um motor elétrico.
                  Esses veículos são capazes de reduzir as emissões de CO2, pois
                  o motor elétrico auxilia o motor a combustão, diminuindo assim
                  o consumo de combustível e a poluição.{' '}
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Além da eletrificação, medidas como o compartilhamento de
                  veículos também podem contribuir para a preservação ambiental.
                  Ao adotar sistemas de carona ou compartilhamento de carros,
                  reduz-se a quantidade de veículos nas estradas, diminuindo
                  assim as emissões de poluentes.{' '}
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Investir em transporte público eficiente também é essencial
                  para a preservação ambiental. Sistemas de transporte público
                  bem desenvolvidos e integrados incentivam as pessoas a
                  deixarem seus carros em casa, reduzindo o congestionamento nas
                  cidades e a poluição atmosférica.{' '}
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Além disso, o uso de biocombustíveis também pode ser uma
                  alternativa sustentável. Os biocombustíveis são produzidos a
                  partir de matérias-primas renováveis, como óleo de palma ou
                  etanol de cana-de-açúcar. Eles emitem menos CO2 durante a
                  queima em comparação aos combustíveis fósseis, o que os torna
                  uma opção mais limpa.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Para preservar o ambiente, é fundamental que os automóveis
                  sejam projetados de maneira mais eficiente e com materiais
                  sustentáveis. A utilização de materiais leves, como a fibra de
                  carbono, pode reduzir o peso dos veículos, resultando em menor
                  consumo de combustível e emissões reduzidas.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Além disso, medidas de conservação de energia, como sistemas
                  de recuperação de energia cinética (por exemplo, frenagem
                  regenerativa) e a melhoria na eficiência dos motores, podem
                  ajudar a reduzir o consumo de combustível e a emissão de
                  poluentes.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  A preservação ambiental também envolve a manutenção adequada
                  dos veículos. Realizar revisões regulares, trocar filtros e
                  manter os motores limpos são práticas importantes para
                  garantir o bom desempenho dos veículos e reduzir as emissões
                  poluentes.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  A promoção de políticas governamentais favoráveis à
                  preservação ambiental também é crucial. Incentivos fiscais
                  para a compra de veículos elétricos, a criação de
                  infraestruturas de carregamento e a implementação de normas de
                  emissão mais rigorosas são exemplos de medidas que podem
                  impulsionar a transição para um transporte mais sustentável.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  A conscientização da população também desempenha um papel
                  fundamental na preservação ambiental no contexto dos
                  automóveis. Educar as pessoas sobre os impactos negativos dos
                  veículos movidos a combustíveis fósseis e as vantagens das
                  alternativas sustentáveis pode motivar mudanças de
                  comportamento e escolhas mais conscientes.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Além disso, é importante fomentar a pesquisa e o
                  desenvolvimento de tecnologias ainda mais avançadas. Investir
                  em inovação pode levar ao surgimento de novas soluções, como
                  baterias de longa duração e carros movidos a hidrogênio, que
                  apresentam potencial para reduzir ainda mais as emissões e
                  minimizar o impacto ambiental dos automóveis.
                </Text>
                <Text style={screenStyles.p}>
                  {' '}
                  Em resumo, a preservação ambiental no contexto dos automóveis
                  exige a adoção de alternativas mais sustentáveis, como
                  veículos elétricos e híbridos, o compartilhamento de carros, o
                  uso de biocombustíveis, o investimento em transporte público
                  eficiente e a melhoria da eficiência dos veículos. Essas
                  medidas, aliadas a políticas governamentais e conscientização
                  da população, podem contribuir significativamente para a
                  redução da poluição atmosférica e das mudanças climáticas,
                  garantindo um futuro mais sustentável para o nosso planeta.
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '2') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Reciclagem</Text>
            <Text style={screenStyles.subtitle}>
              Contribuindo para um Futuro Sustentável
            </Text>
            <View>
              <Image
                style={screenStyles.image}
                source={require('../assets/reciclagem2.png')}
                resizeMode="cover"
              />
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 10 }}>
              <View style={screenStyles.textContainer}>
                <Text style={screenStyles.p}>
                  A reciclagem é uma prática essencial que desempenha um papel
                  fundamental na construção de um futuro sustentável para o
                  nosso planeta. Ela envolve o processo de transformar materiais
                  descartados em novos produtos, reduzindo assim a demanda por
                  recursos naturais, economizando energia e minimizando os
                  impactos ambientais.
                </Text>
                <Text style={screenStyles.p}>
                  Ao adotarmos a reciclagem como um hábito cotidiano, podemos
                  alcançar uma série de benefícios ambientais. Um dos aspectos
                  mais notáveis é a redução da quantidade de resíduos que vão
                  parar em aterros sanitários. Esses locais são responsáveis por
                  uma grande parcela da poluição do solo, da água e do ar, além
                  de ocuparem áreas preciosas que poderiam ser utilizadas de
                  forma mais sustentável.
                </Text>
                <Text style={screenStyles.p}>
                  Além disso, a reciclagem contribui para a economia circular,
                  na qual os materiais são reutilizados e reintegrados no ciclo
                  produtivo. Isso cria empregos em diversas etapas do processo,
                  desde a coleta e classificação dos materiais até o seu
                  processamento e fabricação de novos produtos. Ao investir em
                  infraestrutura adequada para a reciclagem, os governos podem
                  promover o desenvolvimento econômico local e regional, além de
                  reduzir a dependência de recursos naturais escassos.
                </Text>
                <Text style={screenStyles.p}>
                  Outro ponto relevante é a conservação de energia. A reciclagem
                  permite economizar energia significativa em comparação com a
                  produção de materiais a partir de recursos virgens. Por
                  exemplo, ao reciclar alumínio, é possível economizar até 95%
                  da energia necessária para produzir o mesmo material a partir
                  da bauxita. Essa redução no consumo de energia não apenas
                  preserva recursos naturais, mas também reduz a emissão de
                  gases de efeito estufa e outros poluentes associados aos
                  processos de produção convencionais.
                </Text>
                <Text style={screenStyles.p}>
                  A reciclagem também desempenha um papel importante na
                  preservação dos ecossistemas naturais. Ao reduzirmos a
                  extração de matérias-primas, diminuímos a pressão sobre os
                  habitats naturais, como florestas e áreas selvagens, evitando
                  assim a degradação e a perda de biodiversidade. Além disso,
                  muitos materiais reciclados podem substituir produtos
                  fabricados a partir de recursos não renováveis, como plásticos
                  derivados do petróleo.
                </Text>
                <Text style={screenStyles.p}>
                  No entanto, para alcançar plenamente os benefícios da
                  reciclagem, é necessário o envolvimento de todos: governos,
                  indústrias, comunidades e indivíduos. Os governos devem
                  investir em políticas e infraestrutura para a coleta seletiva
                  e a reciclagem eficiente, além de incentivar a educação
                  ambiental. As indústrias têm a responsabilidade de projetar
                  produtos com menor impacto ambiental e de utilizar materiais
                  reciclados em seus processos produtivos. As comunidades podem
                  se organizar para promover a coleta seletiva e a
                  conscientização sobre a importância da reciclagem. Por fim,
                  cada indivíduo pode adotar práticas sustentáveis, como separar
                  corretamente os resíduos e optar por produtos reciclados.
                </Text>
                <Text style={screenStyles.title}>
                  Mas como eu posso reciclar?
                </Text>
                <Text style={screenStyles.p}>
                  Reciclar é um processo que envolve diferentes etapas, desde a
                  separação adequada dos resíduos até o seu encaminhamento para
                  os locais corretos de reciclagem. Aqui estão algumas
                  orientações básicas sobre como reciclar:
                </Text>
                <Text style={screenStyles.p2}>
                  Conheça os materiais recicláveis: Informe-se sobre os
                  materiais que podem ser reciclados em sua região. Geralmente,
                  papel, plástico, vidro, metal e alguns tipos de resíduos
                  orgânicos são recicláveis. Verifique as diretrizes e
                  regulamentos locais para entender quais itens específicos são
                  aceitos.
                </Text>
                <Text style={screenStyles.p2}>
                  Separe corretamente: A separação correta dos resíduos é
                  essencial para facilitar o processo de reciclagem. Utilize
                  recipientes diferentes para cada tipo de material reciclável,
                  como caixas ou sacos separados para papel, plástico, vidro e
                  metal. Certifique-se de remover qualquer tipo de contaminante,
                  como alimentos ou líquidos, dos materiais recicláveis.
                </Text>
                <Text style={screenStyles.p2}>
                  Utilize os contêineres adequados: Muitas comunidades possuem
                  contêineres específicos para a coleta seletiva, seja em sua
                  residência, local de trabalho ou áreas públicas. Identifique e
                  utilize esses recipientes para descartar corretamente os
                  materiais recicláveis. Se não houver contêineres disponíveis,
                  você pode utilizar sacolas reutilizáveis ou caixas para
                  armazenar temporariamente os materiais até poder levá-los a um
                  ponto de recolhimento.
                </Text>
                <Text style={screenStyles.p2}>
                  Informe-se sobre os serviços de coleta seletiva: Descubra se
                  há serviços de coleta seletiva em sua região. Algumas
                  localidades têm programas de coleta porta a porta, onde os
                  resíduos recicláveis são recolhidos diretamente em sua
                  residência. Outras áreas podem ter pontos de coleta
                  específicos onde você pode entregar os materiais recicláveis.
                  Consulte os órgãos responsáveis ou empresas de gestão de
                  resíduos locais para obter informações precisas sobre os
                  serviços disponíveis em sua região.
                </Text>
                <Text style={screenStyles.p2}>
                  Procure pontos de recolhimento: Além da coleta seletiva,
                  muitas comunidades possuem pontos de recolhimento dedicados a
                  diferentes tipos de materiais recicláveis, como papelão,
                  plástico, vidro e metal. Esses pontos podem ser encontrados em
                  centros de reciclagem, supermercados, escolas ou outros locais
                  designados. Certifique-se de separar os materiais
                  adequadamente e entregá-los nos locais corretos.
                </Text>
                <Text style={screenStyles.p2}>
                  Reduza, reutilize e repense: Lembre-se de que a reciclagem é
                  apenas uma parte do processo de gestão de resíduos. Antes de
                  reciclar, procure reduzir o consumo de produtos descartáveis,
                  reutilizar itens sempre que possível e repensar seu estilo de
                  vida de forma mais sustentável. Essas ações ajudam a diminuir
                  a quantidade de resíduos produzidos e a demanda por recursos
                  naturais.
                </Text>
                <Text style={screenStyles.p2}>
                  Eduque-se e inspire os outros: Mantenha-se informado sobre os
                  benefícios da reciclagem e compartilhe esse conhecimento com
                  sua família, amigos e comunidade. Incentive outros a adotarem
                  práticas sustentáveis e a participarem ativamente do processo
                  de reciclagem.
                </Text>
                <Text style={screenStyles.title}>Conclusão</Text>
                <Text style={screenStyles.p}>
                  Em resumo, a reciclagem é uma ferramenta poderosa na busca por
                  um futuro sustentável. Ela oferece benefícios ambientais,
                  econômicos e sociais significativos, contribuindo para a
                  preservação dos recursos naturais, a redução da poluição e a
                  criação de empregos. Ao adotarmos a reciclagem como parte de
                  nossas vidas diárias, estamos dando um passo importante em
                  direção a um mundo mais equilibrado e saudável para as
                  gerações presentes e futuras.
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '3') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Conservação da Água</Text>
            <Text style={screenStyles.subtitle}>Um Compromisso Necessário</Text>
            <View>
              <Image
                style={screenStyles.image}
                resizeMode="cover"
                source={require('../assets/agua.png')}
              />
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 10 }}>
              <View style={screenStyles.textContainer}>
                <Text style={screenStyles.p}>
                  A conservação da água é um tópico essencial na agenda da
                  preservação ambiental. Esse recurso natural vital desempenha
                  um papel fundamental em nossas vidas, na manutenção dos
                  ecossistemas e no desenvolvimento sustentável. Reconhecer a
                  importância da água e adotar medidas para conservá-la são
                  compromissos necessários para garantir a disponibilidade desse
                  recurso precioso para as gerações futuras.
                </Text>
                <Text style={screenStyles.p}>
                  Uma das primeiras etapas para a conservação da água é o uso
                  eficiente desse recurso. Isso significa evitar o desperdício e
                  adotar práticas conscientes no dia a dia. Pequenas ações
                  cotidianas podem fazer uma grande diferença, como fechar a
                  torneira enquanto escova os dentes, consertar vazamentos,
                  utilizar sistemas de descarga com baixo consumo de água e
                  utilizar a água de forma racional na limpeza doméstica.
                </Text>
                <Text style={screenStyles.p}>
                  Além do uso eficiente, é crucial proteger e preservar os
                  ecossistemas aquáticos. Rios, lagos, aquíferos e áreas úmidas
                  desempenham um papel vital na manutenção da qualidade e
                  quantidade de água disponível. A conservação desses
                  ecossistemas envolve a proteção de suas margens, a recuperação
                  de áreas degradadas, a redução da poluição e a promoção de
                  práticas agrícolas sustentáveis, evitando o uso excessivo de
                  agrotóxicos e fertilizantes que podem contaminar os recursos
                  hídricos.
                </Text>
                <Text style={screenStyles.p}>
                  Outro aspecto importante na conservação da água é a
                  conscientização e educação da sociedade. É fundamental que as
                  pessoas compreendam a importância desse recurso e sejam
                  informadas sobre práticas sustentáveis de uso e conservação da
                  água. A educação ambiental pode engajar indivíduos, famílias e
                  comunidades, incentivando-os a adotar medidas de conservação
                  em suas atividades diárias, bem como a participar de
                  iniciativas de preservação da água em nível local.
                </Text>
                <Text style={screenStyles.p}>
                  A gestão integrada dos recursos hídricos também é essencial
                  para a conservação da água. Governos, empresas e sociedade
                  civil devem trabalhar juntos para desenvolver políticas e
                  práticas que promovam o uso sustentável desse recurso. Isso
                  inclui a implementação de regulamentações que evitem a
                  poluição, a promoção de tecnologias mais eficientes no uso da
                  água, a recuperação de bacias hidrográficas e a criação de
                  mecanismos de governança participativa para a gestão dos
                  recursos hídricos.
                </Text>
                <Text style={screenStyles.title}>Água no mundo</Text>
                <Text style={screenStyles.p}>
                  A conservação da água vai além das fronteiras geográficas. A
                  escassez de água é uma realidade em muitas regiões do mundo, e
                  a cooperação internacional é fundamental para enfrentar esse
                  desafio. A troca de conhecimentos, a partilha de boas práticas
                  e a colaboração entre países podem contribuir para o
                  desenvolvimento de soluções inovadoras e eficazes na
                  conservação da água em escala global.
                </Text>
                <Text style={screenStyles.title}>
                  Dicas comuns que você deve ouvir e praticar:
                </Text>
                <Text style={screenStyles.p2}>
                  Reduza o tempo de banho: Tome banhos mais curtos, reduzindo o
                  tempo de chuveiro. Isso pode economizar uma quantidade
                  significativa de água ao longo do tempo.
                </Text>
                <Text style={screenStyles.p2}>
                  Feche a torneira enquanto escova os dentes: Evite deixar a
                  torneira aberta enquanto escova os dentes ou faz a barba. Essa
                  prática simples pode economizar uma quantidade considerável de
                  água.
                </Text>
                <Text style={screenStyles.p2}>
                  Conserte vazamentos: Verifique regularmente se há vazamentos
                  em torneiras, chuveiros e sanitários. Mesmo pequenos
                  vazamentos podem resultar em desperdício de água significativo
                  ao longo do tempo. Conserte-os assim que os detectar.
                </Text>
                <Text style={screenStyles.p2}>
                  Reutilize a água: Ao lavar frutas e vegetais, por exemplo,
                  recolha a água em uma bacia e utilize-a para regar plantas ou
                  para outras tarefas domésticas. A água utilizada na máquina de
                  lavar roupas também pode ser reaproveitada para limpar pisos e
                  calçadas.
                </Text>
                <Text style={screenStyles.p2}>
                  Utilize máquinas de lavar e lava-louças com capacidade máxima:
                  Sempre que possível, espere até que a máquina de lavar roupas
                  ou a lava-louças estejam cheias para utilizá-las. Isso otimiza
                  o uso da água e reduz o número de ciclos de lavagem.
                </Text>
                <Text style={screenStyles.p2}>
                  Ajuste a irrigação de jardins e plantas: Verifique se o
                  sistema de irrigação do seu jardim está configurado
                  corretamente e evite regar as plantas em horários de maior
                  evaporação, como durante o período mais quente do dia.
                  Considere também o uso de sistemas de irrigação eficientes,
                  como gotejamento ou irrigação por microaspersão.
                </Text>
                <Text style={screenStyles.p2}>
                  Utilize cobertura no solo dos jardins: Aplique cobertura morta
                  ou mulch no solo dos seus canteiros e jardins. Isso ajuda a
                  reter a umidade, reduzindo a necessidade de rega frequente.
                </Text>
                <Text style={screenStyles.p2}>
                  Evite lavar veículos com mangueira: Opte por lavar o carro
                  utilizando um balde de água e um pano. Isso reduz o consumo de
                  água em comparação com a lavagem com mangueira.
                </Text>
                <Text style={screenStyles.p2}>
                  Instale dispositivos economizadores de água: Utilize redutores
                  de vazão ou aeradores nas torneiras, que ajudam a diminuir o
                  fluxo de água sem comprometer o desempenho. Além disso,
                  escolha chuveiros e sanitários com tecnologias que reduzem o
                  consumo de água.
                </Text>
                <Text style={screenStyles.p2}>
                  Conscientize-se e eduque os outros: Compartilhe essas dicas
                  com familiares, amigos e colegas. Incentive-os a adotar
                  práticas de preservação da água em suas rotinas diárias.
                </Text>
                <Text style={screenStyles.title}>Conclusão</Text>
                <Text style={screenStyles.p}>
                  Em resumo, a conservação da água é um compromisso necessário
                  para garantir a sustentabilidade e a qualidade de vida em
                  nosso planeta. Ao adotarmos uma abordagem consciente e
                  engajada em relação ao uso e proteção desse recurso, estaremos
                  contribuindo para a preservação ambiental e para a construção
                  de um futuro onde a água seja valorizada, respeitada e
                  disponível para todos.
                </Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '4') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '5') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '6') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '7') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '8') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '9') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else if (this.state.screen === '10') {
        return (
          <View style={screenStyles.container}>
            <TouchableOpacity
              style={screenStyles.touchable}
              onPress={() => this.setState({ isPressed: false })}>
              <Text>Voltar</Text>
            </TouchableOpacity>
            <Text style={screenStyles.title}>Title</Text>
            <Text style={screenStyles.subtitle}>Subtitle</Text>
            <View>
              <Image style={screenStyles.image} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={screenStyles.textContainer}>
                <Text>Aqui é onde o texto fica</Text>
              </View>
            </ScrollView>
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5CE1E6',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  containerTouchables: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerTouchables2: {
    flex: 1,
    justifyContent: 'space-between',
  },
  touchable: {
    backgroundColor: '#008056',
    marginTop: 40,
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginLeft: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
  subtitleContainer: {
    width: 150,
    height: 160,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#2FF7FF',
  },
  imageContainer: {
    width: 150,
    height: 160,
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 10,
    backgroundColor: '#2FF7FF',
    alignContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    marginLeft: 10,
    marginTop: 1,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 100 * 1.4,
    height: 100 * 1.4,
    marginTop: 11,
    borderRadius: 10,
  },
});

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#5CE1E6',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 0,
    fontSize: 10,
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: 350,
    backgroundColor: '#2FF7FF',
    borderRadius: 10,
    borderWidth: 1,
  },
  textContainer: {
    marginTop: 10,
    flex: 1,
    borderRadius: 10,
    alignContent: 'center',
    backgroundColor: '#008056',
  },
  touchable: {
    backgroundColor: '#008056',
    width: 100,
    alignItems: 'center',
    marginLeft: -200,
    borderRadius: 10,
    marginTop: 20,
  },
  p: {
    alignSelf: 'center',
    marginTop: 10,
  },
  p2: {
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 30,
  },
});
