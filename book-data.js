/**
 * Gervigreind — vefbók
 * Höfundur: Ragnar Þór Pétursson
 *
 * Allt efni bókarinnar er geymt hér. Hver kafli er hlutur með:
 *   id           — einstakt auðkenni (notað í vefslóð, t.d. #gjafir-gudanna)
 *   part         — númer á hluta bókarinnar (1, 2 eða 3)
 *   title        — titill kafla
 *   text         — fylki af málsgreinum (hver strengur verður ein <p>)
 *   concepts     — fylki af { term, explanation } — lykilhugtök á einföldu máli
 *   visual       — (valkvætt) { type, description } — staðsetning fyrir mynd eða skýringarmynd
 */

const bookData = {
  title: "Gervigreind",
  author: "Ragnar Þór Pétursson",

  parts: [
    { number: 1, title: "Uppruni og saga" },
    { number: 2, title: "Innviðir og undirstöður" },
    { number: 3, title: "Gervigreind og samfélagið" }
  ],

  chapters: [
    {
      id: "gjafir-gudanna",
      part: 1,
      title: "Gjafir guðanna og vélmenni fornaldar",
      text: [
        "Af mörgum áhugaverðum sögum í grískri goðafræði er sagan af Hefæstosi sérlega umhugsunarverð. Hann var sonur gyðjunnar Heru sem ákvað að eignast hann ein, án aðkomu Seifs eiginmanns síns. Þegar Hefæstos fæddist fer tvennum sögum af örlögum hans. Í annarri útgáfu sögunnar var móðir hans óánægð með útlit sonarins og varpaði honum nýfæddum fram af Ólympsfjalli. Í hinni útgáfunni var það Seifur sem kastaði honum fram af fjallsbrúninni í bræðiskasti yfir því að hafa verið skilinn út undan. Hver sem aðdragandinn var þá varð afleiðingin í báðum tilfellum hin sama: Hefæstos brotnaði á báðum fótum og glímdi við fötlun það sem eftir var ævinnar.",
        "Guðinn Hefæstos óx úr grasi. Til að auðvelda sér lífið smíðaði hann ýmis tæki og vélar. Hann mótaði varðhunda og ljón úr gulli og smíðaði sér aðstoðarmenn sem leiddu hann við gang og sinntu fyrir hann ýmsum tilfallandi verkefnum og gátu bæði hugsað og talað. Þekktasti smíðisgripur hans er hin ofur fallega Pandóra.",
        "Það var Seifur sjálfur sem bað hann að smíða konu. Hann sagðist vilja færa mönnunum hana að gjöf. Kannski grunaði Hefæstos að fiskur lægi undir steini en hann vann verkið samviskusamlega engu að síður. Hann mótaði konu úr leir og miðaði útlit hennar við fegurstu drætti í fari gyðjanna á Ólympsfjalli. Seifur var ánægður með smíðina og fékk í kjölfarið hina guðina til þess að gefa henni margvíslegar gjafir. Þannig öðlaðist hún gáfur og þokka; persónuleika og hæfileika. Henni voru meira að segja kennd húsverk og hannyrðir. Leirkonan fékk nafn sem merkir einhverja sem færir dýrmætar gjafir: Pandóra. Sjálfur ætlaði Seifur henni síðustu gjöfina.",
        "Áður en Pandóra var send niður af Ólympsfjalli til að giftast dauðlegum manni tók Seifur hana afsíðis. Hann dró fram úr pússi sínu fallega leirkrús sem lokuð var með tappa og innsigluð með vaxi. Hann bað hana að þiggja hana að gjöf en hún yrði að lofa að krúsina myndi hún aldrei opna.",
        "„Hvers vegna ekki?“ spurði hún. „Hvað er í henni?“",
        "„Alls ekki neitt merkilegt,“ svaraði hann, „og vertu ekki að pæla meira í því.“",
        "Að því sögðu var Pandóra flutt niður af fjallinu og heim til tilvonandi eiginmanns sem auðvitað kolféll fyrir henni um leið og hann sá hana.",
        "Pandóra og eiginmaður hennar héldu fallegt heimili og voru afar hamingjusöm. Krúsin var geymd á hillu og þegar eiginmaðurinn spurði um innihaldið svaraði Pandóra að þetta væri minjagripur að heiman og gaf ekki meiri skýringar. Eiginmaðurinn lét sér það líka en Pandóra varð sjálf smám saman forvitin. Henni þótti ekki trúlegt að Seifur myndi gefa ómerkilega gjöf. Þvert á móti varð hún brátt sannfærð um að inni í krúsinni væri eitthvað afar merkilegt. Hún óttaðist Seif og vildi ekki rjúfa heit sitt. Til að minnka freistinguna fjarlægði hún krúsina og gróf úti í garði við hliðina á stóru sólúri úr málmi.",
        "Hér má geta þess að líf mannanna var á þessum tíma harla gott. Þeir voru að minnsta kosti ekki jafn vanstilltir og guðirnir uppi á fjallinu. Stríð, átök og erfiðleikar voru varla til. Það helsta sem þurfti að óttast voru grimm dýr sem ráðist gátu á fólk. Sú hætta hafði reyndar minnkað verulega skömmu áður þegar mennirnir fengu eldinn að gjöf frá einum guðanna. Eldurinn bægði rándýrunum burt frá svefnstöðum þeirra og veitti öryggi.",
        "Það var einmitt eldurinn sem lá að baki ráðabruggi Seifs. Hann, æðstur guðanna, hafði stranglega bannað að mannkynið fengi eld. Skipun hans hafði verið höfð að engu og það þoldi hann ekki. Hann ákvað að hefna sín á mannfólkinu og nú beið refsingin þolinmóð í leirkrúsinni sem grafin var úti í garði.",
        "Það var svo eina stjörnubjarta nótt að Pandóra gat ekki sofið. Hún hafði skemmt sér vel um daginn. Þau hjónin höfðu haldið veislu fyrir vini sína. Eiginmaðurinn lá sofandi við hlið hennar en Pandóra veltist um án þess að festa svefn. Það var sama hvað hún reyndi, hugurinn leitaði stöðugt út í garð til krúsarinnar. Loks settist hún upp og horfði út í myrkrið. Hún sá hvernig tunglskinið endurkastaðist af sólúrinu. Pandóra reis á fætur og læddist út í garð. Hún kraup niður og hendur hennar rótuðu í moldinni. Titrandi af spennu lyfti hún krúsinni upp úr gröf sinni og kroppaði innsiglið af. Hún dró djúpt andann og kippti lokinu af.",
        "Eiginmaður hennar hrökk upp við ægilegt öskur. Hann hljóp út í garð og sá hvar Pandóra var nánast horfin í drungalegt, svart ský. Allt í kringum hana flugu dökkar, vængjaðar verur. Skjálfandi hendi greip Pandóra lokið og skellti aftur. Eitthvað flögraði enn innan í krukkunni en skaðinn var skeður. Svörtu, vængjuðu verurnar sem sloppið höfðu út stefndu upp í himininn og flugu þaðan í allar áttir. Líf mannkyns átti aldrei eftir að verða samt.",
        "Seifur vissi að forvitnin yrði aðgátinni yfirsterkari. Í krukkuna hafði hann safnað hræðilegum skrímslum úr undirheimunum. Hungur, Átök, Stríð, Tortryggni, Veikindi og Lygar voru aðeins nokkur af mörgum. Á örskotsstund breiddust skrímslin um jörðina. Illskan var komin í heiminn.",
        "Aðeins ein skepna varð eftir í leirkrukkunni og er þar enn. Hún heitir Von."
      ],
      concepts: [
        {
          term: "Vélmenni",
          explanation: "Gervi-maður eða -kona smíðuð úr efni eins og leir, málmi eða tré — hugmynd sem hefur verið til í þúsundir ára í goðsögum og sögum."
        },
        {
          term: "Sjálfvirkni",
          explanation: "Þegar vél eða kerfi framkvæmir verkefni sjálft, án þess að maður þurfi að grípa inn í hvert skipti."
        }
      ],
      visual: null
    },
    {
      id: "velar-og-hugsun",
      part: 1,
      title: "Vélar og hugsun",
      text: [
        "Það má eiginlega alltaf treysta því að í umræðu um gervigreind og möguleg áhrif hennar verði fyrr eða síðar farið að ræða um goðsögnina um Pandóru. Yfirleitt í varúðar- eða dæmaskyni, það sé hættulegt að láta forvitni stýra för. Við munum skoða það nánar í þriðja hluta. Í bili skulum við láta nægja að draga þá ályktun af goðsögninni að mannkynið hafi í árþúsundir getað ímyndað sér smíði talandi og hugsandi véla. Og jafn lengi ímyndað sér að slíkt gæti endað með ósköpum.",
        "Forvitnin hefur þó ekki alltaf verið litin hornauga. Rúmum tveimur árþúsundum eftir að grískir rithöfundar eins og Hómer lýstu bellibrögðum Seifs og hinna guðanna á Ólympsfjalli litu evrópskir hugsuðir eins og Frakkinn René Descartes og Þjóðverjinn Gottfried Wilhelm Leibniz á guð kristinna manna sem tryggan og hvetjandi samherja við rannsókn á heiminum. Sautjánda og átjánda öldin í Evrópu var tími mikilla uppgötvana þar sem óbilandi trú á mannlega skynsemi leiddi sannleiksleitina. Trúin á algóðan og alvitran guð varð til þess að fólk treysti því að einlæg forvitni afhjúpaði fyrir mannkyni fjölda spennandi sanninda. Upplýsingaöld (e. Age of Enlightenment) var runnin upp, blómatími vísinda og fræða. Öflugasta verkfærið var mannshugurinn sjálfur. Ef hugsað var nógu vel og vandlega virtist sannleikurinn um heiminn smám saman opinberast.",
        "Heimspekingurinn og stærðfræðingurinn René Descartes var svo róttækur í sannleiksleit sinni að honum fannst hann skulda sjálfum sér að setjast niður að minnsta kosti einu sinni á ævinni, loka sig af og gera ráð fyrir að allt sem honum hefði verið kennt væri rangt. Þannig gæti hann hugsað allt upp á nýtt og fundið sín eigin sannleikskorn. Þessu lýsti hann öllu í frægri bók sem heitir Hugleiðingar um frumspeki. Hann fékk sér sæti í stofu sinni og byrjaði að hugsa. Eftir að hafa efast um alla mögulega hluti taldi hann sig finna sannan kjarna sem hann lýsti með eftirfarandi setningu: „Je pense, donc je suis“ (Ég hugsa, þess vegna er ég til). Þetta var hið fyrsta sem Descartes taldi sig geta sannað án efasemda. Hann treysti ekki skynfærunum og benti sjálfum sér á að þau hefðu ótal sinnum brugðist honum og látið hann trúa því sem reyndist vera draumur. Það eina sem væri örugglega rétt væri að hann sjálfur væri til sem hugsandi vera. Hvort þessi vera hefði í raun og veru líkama gat hann ekki sannfært sjálfan sig um, að minnsta kosti ekki strax.",
        "Á grundvelli þessa sannleikskorns reyndi Descartes að byggja upp fleiri sannar fullyrðingar um sjálfan sig og heiminn. Í þeirri tilraun reiddi hann sig á að skapari heimsins – hinn alvirtri, almáttugi og algóði guð hefði útbúið menn með svo gagnlega hugsun að þeir fyndu sjálfir þegar hugsanir þeirra væru skýrar, sannar og réttar. Með vandvirkni rannsakaði Descartes hugmyndir sínar og reyndi að byggja ofan á sannleiksforða sinn. Við förum ekki nánar í það að öðru leyti en því að skoða hugmyndir hans um hugsunina sjálfa.",
        "Descartes taldi að líkamsstarfsemi manna og dýra bæri þess öll merki að líkjast vélum. Það væri vel mögulegt að smíða vélbrúður sem gætu hermt eftir líkamsstarfsemi fólks. Hugsandi vél taldi hann óhugsandi. Þótt hugsun fylgdi sannarlega reglum sem hægt væri að herma eftir upp að vissu marki (til dæmis gat hann ímyndað sér vél sem gæti reiknað) væri meðvitundin sjálf, ímyndunaraflið og hæfileiki hugans til að framkalla mál og hugmyndir einfaldlega af allt öðrum heimi.",
        "Þjóðverjinn Gottfried Wilhelm Leibniz var ekki eins viss um það.",
        "Leibniz var undrabarn og alin upp á vísindum og fræðum. Hann hóf háskólanám fjórtán ára og varð doktor tvítugur. Margar uppgötvana hans opnuðu dyr að þróun tækni dagsins í dag. Við ræðum sumt af því nánar seinna en skoðum fyrst hugmyndir hans um hugsunina. Hann var sammála Descartes um að skynjun væri erfitt að útskýra með vélrænum hætti en taldi að það þýddi ekki endilega að hugsunin sjálf fylgdi ekki skýrum lögmálum. Hugsun, að minnsta kosti upp að því marki sem hún væri skynsamleg og rökrétt, fylgdi reglum. Um þessar reglur mætti smíða kerfi sem gæti, óháð móðurmáli hvers og eins, lýst leið hugmynda að rökréttum niðurstöðum. Hann taldi að í framtíðinni gætu manneskjur sem væru ósammála um eitthvað leyst ágreining sinn með því að setjast niður, lýsa málinu rökfræðilega og reikna sig niður á sannleikann. Það væri jafnvel hægt að gera það með vél. Vél sem væri hönnuð til að hugsa rétt.",
        "Við skoðum þetta allt betur síðar, bæði hvernig nútímatækni byggir á uppgötvunum Leibniz og hvernig gagnrýni í anda Descartes leiðir enn í dag til efasemda um raunverulega greind gervigreindar. En fyrst skulum við skoða betur vélarnar sjálfar sem þetta snýst allt um á endanum."
      ],
      concepts: [
        {
          term: "Upplýsingaöld",
          explanation: "Tímabil á 17. og 18. öld þegar evrópskir hugsuðir trúðu að skynsemin og vísindinn gætu leyst öll vandamál og afhjúpað sannleikann um heiminn."
        },
        {
          term: "Heimspeki",
          explanation: "Fræðigrein sem fæst við grundvallarspurningar um tilvist, þekkingu, siðferði og rök — hvernig við vitum það sem við vitum, og hvernig við eigum að lifa."
        }
      ],
      visual: null
    },
    {
      id: "mynstur-og-velar",
      part: 1,
      title: "Mynstur og vélar",
      text: [
        "Í Vísindasafninu í London stendur glæsilegur gripur til sýnis í stórum glerkassa. Hann minnir helst á sambræðing pípuorgels og lyftingatækja. Skammt frá má sjá litla krukku og í henni hálfan mannsheila. Hinn helmingur heilans er í öðru safni í sömu borg. Þessi heili tilheyrði enskum manni sem oft er kallaður „faðir tölvunnar“. Hann hét Charles Babbage.",
        "Babbage var barn iðnbyltingarinnar (e. industrial revolution) tímabils á átjándu og nítjándu öld þar sem hlutirnir breyttust hratt. Gríðarstórar gufuvélar leystu nú af hólmi vinnu þúsunda manna eða hundruða hesta og framleiddu gríðarlegt magn af vörum.",
        "Babbage taldi hægt að smíða verðmæta vél sem kæmi að miklu gagni fyrir hið öfluga framleiðslusamfélag. Vél sem kynni að reikna á ógnarhraða og af mikilli nákvæmni. Ef smíðuð væri nógu stór vél með nógu mörgum pörtum yrði hægt að framkvæma á augabragði útreikninga sem annars tæki óratíma að leysa. Útreikningarnir yrðu alltaf réttir! Babbage hannaði vélina og kynnti fyrir fjárfestum sem studdu han dyggilega til verksins.",
        "Vélin lét þó bíða eftir sér og rúmum áratug eftir að smíðin hófst bólaði enn ekkert á útkomunni. Fjárfestarnir misstu áhugann og raunar hafði Babbage gert það sjálfur því hann hafði fengið nýja og betri hugmynd. Nú vildi hann smíða miklu stærri og fullkomnari vél. Hann vissi að franskur uppfinningamaður hafði hannað gufuknúinn vefstól sem gat ofið flókin mynstur alveg sjálfur. Það var hægt að velja mynstur með því setja í vélina gataspjöld sem höfðu að geyma upplýsingar um vefnaðinn. Þetta taldi Babbage að gæti orðið fyrirmynd að fullkominni reiknivél sem gæti framkvæmt mjög fjölbreyttar aðgerðir. Nú vildi hann smíða hana.",
        "Það reyndist ekki eins auðvelt að afla peninga í þetta skiptið en vinkona hans, Ada Lovelace, gerði margt til að hjálpa honum. Með hennar aðstoð var hugmyndin komið á framfæri meðal hinna ríku og frægu en Lovelace var sjálf í þeim hópi enda bæði greifynja og dóttir frægasta skálds Bretlands. Sjálf var hún raunar stórbrotinn hugsuður þótt áhrif hennar hafi ekki verið að fullu viðurkennd fyrr en löngu seinna.",
        "Babbage kláraði aldrei nýju vélina og dó frá smíðinni árið 1871, tæplega áttræður. Þá var Ada löngu dáin en hún hafði dáið úr krabbameini tæpum tveim áratugum áður. Í skjölum hennar sést að hún hafði áttað sig á að með gataspjöldum væri hægt að láta vélina framkvæma verkefni sem alls ekki þurfa að einskorðast við tölur og útreikninga. Hún gæti unnið með tákn sem gætu staðið fyrir ótal margt annað en tölur. Ada skrifaði niður verkefni fyrir vélina, reiknireglur til að leysa ákveðin viðfangsefni. Hún er þess vegna talin fyrsti forritari sögunnar.",
        "Vélin í glerkassanum í Vísindasafninu er einfölduð og endurbætt útgáfa af fyrstu reiknivél Babbages, smíðuð eftir teikningum hans sjálfs árið 1991. Hið merkilega er að hún virkar. Hugmyndir Babbage og teikningar voru góðar og gildar. Það reyndist einfaldlega of dýrt og tæknilega erfitt að smíða slík tæki á nítjándu öld."
      ],
      concepts: [
        {
          term: "Iðnbylting",
          explanation: "Tímabil á 18. og 19. öld þegar gufuvélar og verksmiðjur tóku við vinnu sem áður var unnin með handafli eða af dýrum. Þetta breytti samfélögum og daglegu lífi í grundvallaratriðum."
        },
        {
          term: "Gataspjald",
          explanation: "Þunnt spjald með götum á ákveðnum stöðum. Gat þýðir „já“ eða „kveikt“ og lokaður reitur þýðir „nei“ eða „slökkt“. Vél les spjaldið og fer eftir mynstrinu — því er hægt að nota röð gataspjalda til að gefa vél fyrirmæli."
        },
        {
          term: "Forritari",
          explanation: "Manneskja sem skrifar leiðbeiningar — forrit — sem segir vél hvernig hún á að leysa ákveðið verkefni skref fyrir skref. Ada Lovelace var sú fyrsta sem áttaði sig á að vél eins og sú sem Babbage hannaði gæti unnið með hvers konar tákn, ekki bara tölur."
        }
      ],
      visual: { type: "animation", description: "jacquard loom" }
    },
    {
      id: "tölva-kemur-til-bjargar",
      part: 1,
      title: "Tölva kemur til bjargar",
      text: [
        "Almenn bjartsýni einkenndi upphaf tuttugustu aldar. Iðnbyltingin hafði gerbreytt veröldinni. Risavaxin gufuskip sigldu yfir höfin og tengdu heimsálfurnar á nýjan hátt. Ferðir, sem áður tóku vikur eða mánuði, tóku nú klukkustundir eða daga. Vélum hélt áfram að fjölga, borgir stækkuðu, rafmagn byrjaði hægt og rólega að leysa af hólmi gufu eða gas og listir og menning stóðu í blóma.",
        "Bjartsýnin varði þó ekki lengi. Á öðrum áratug aldarinnar dróst heimsbyggðin inn í langvarandi og hrikaleg átök: fyrri heimsstyrjöldina. Eyðileggingin skildi margar þjóðir eftir í rústum og ofan í kaupið skall á skæður heimsfaraldur inflúensu. Uppbyggingunni var ekki lokið þegar heimurinn varð fyrir enn einu áfalli, fjármálakreppunni miklu, árið 1929. Fátækt og örvænting lagðist yfir heiminn eins og blæja með þeim afleiðingum að seint á þriðja áratugnum brotnaði hinn viðkvæmi friður og seinni heimsstyrjöldin hófst. Í þetta skiptið var stríðsreksturinn vélrænni, miskunnarlausari og skilvirkari.",
        "Árið 1940 var Bretland komið í erfiða stöðu. Þýskaland hafði lagt undir sig stóran hluta Norður-Evrópu. Bretland, sem var fyrst og fremst flotaveldi, virtist standa varnarlaust gagnvart yfirvofandi þýskri innrás. Börn voru send úr borgum í sveitir, götur myrkvuðust og allir sem vettlingi gátu valdið urðu að þjóðvarðliði í veikri von um að hrinda yfirvofandi árás.",
        "Bretar eignuðust á þessum tíma óvænt leynivopn. Hitler hafði óspart nýtt sér nýjustu tækni til að tryggja sér völd og áhrif. Meðal þess sem nasistar nýttu var útvarpstæknin sem nýlega var komin fram. Ódýr tæki voru framleidd í stórum stíl til að tryggja að áróður Foringjans skilaði sér inn í stofu hjá þjóðinni. Útvarpstæknin var líka notuð til að láta stríðið ganga hraðar.",
        "Í fyrri heimsstyrjöld hafði Hitler verið sendiboði. Hann hafði það hlutverk að hlaupa um á víglínunni til að koma skilaboðum áleiðis. Það var seinfær og hættuleg leið til að stjórna stríðsrekstri. Hitler hafði slasast illa í einni slíkri ferð og legið á sjúkrahúsi. Nú, tveimur áratugum seinna, notaði þýski herinn útvarpsbylgjur til að stjórna hernum.",
        "Þjóðverjar treystu á dulkóðaðar útvarpssendingar og notuðu til þess háþróaða vél, sem kölluð var Enigma (í. Ráðgáta). Vélin hafði lyklaborð, snúrur og hjól sem hægt var að stilla og þá varð til dulmál sem var ólæsilegt öllum nema þeim sem höfðu bæði aðgang að slíkri vél og upplýsingar um hvernig hún var stillt. Reglulega var stillingunum breytt.",
        "Bretar, sem með hjálp Pólverja höfðu áttað sig á virkni vélanna, vissu að skipt gæti sköpum í stríðinu ef þeir gætu fundið leiðir til að ráða dulmálið. Það var veruleg áskorun því Þjóðverjar gættu þess mjög vel að upplýsingar um stillingar vélanna fréttust ekki til óvinarins. Bretar treystu á að hægt væri að ráða dulmálið ef nægur mannskapur yrði settur í verkefnið. Þeir leynilega miðstöð í ensku sveitasetri, Bletchley Park, og stefndu þangað fólki með hæfileika við að leysa gátur og þrautir; rökfræðingum, stærðfræðingum og ýmsum gáfumennum. Eitt þeirra var Alan Turing.",
        "Turing hafði einstaka hæfileika til að leysa flóknar þrautir. Þegar hann var námsmaður vildi hann ekki láta kenna sér hvernig leysa verkefnin. Hann vildi hann leysa þau sjálfur. Hann var mjög upptekinn af vélum og velti því fyrir sér hvort í raun væri einhver munur á líkama og sál – og hvort hægt væri að láta vélar hugsa.",
        "Turing ákvað að reyna að brjóta dulmálið með vél. Vélin kallaðist Bombe. Hún var stór og mikil, vóg meira en tonn og byggði á flóknu kerfi af snúrum, rofum og rafrásum sem líktu eftir virkni Enigma-vélarinnar.",
        "Með Bombe var hægt að leita að ákveðnum þýskum orðum sem Bretar vissu að birtust reglulega í samskiptum þýska hersins. Eitt slíkt orð var Wettervorhersage (veðurspá). Vélin prófaði sjálfkrafa milljónir mögulegra stillinga og útilokaði þær sem ekki komu til greina. Það var hægt vegna þess að Enigma hafði mikilvægan veikleika. Bókstafur sem búið var að dulkóða gat aldrei endað sem hann sjálfur. Bombe lét vita ef tilteknar stillingar virtust virka. Þá tók starfsfólk við og reyndi að leysa kóðann handvirkt. Oft fannst lausnin ekki en stundum tókst það. Það leiddi til þess að Bretar höfðu reglulega aðgang að þýskum hernaðaráætlunum áður en óvinurinn hrinti þeim í framkvæmd. Eitt frægt dæmi er þegar skilaboð reyndust innihalda upplýsingar um yfirvofandi árás kafbáta á skipalest Bandamanna. Þökk sé viðvörun frá Bletchley Park náði flotinn að breyta um stefnu og koma í veg fyrir árásina. Þar var þúsundum mannslífa bjargað.",
        "Þrátt fyrir að þýski herinn þróaði ýmsar nýjar leiðir til dulkóðunar reyndist aðferðafræði Turings traust. Með því að smíða vélar og þróa reiknireglur til að prófa á þeim dulmálið tókst æði oft að afhjúpa hin mikilvægu hernaðarleyndarmál. Sagnfræðingar áætla nú að gögnin sem Turing og samstarfsfólk safnaði hafi stytt stríðið um tvö til fjögur ár og bjargað milljónum mannslífa.",
        "Eftir stríð hélt Turing áfram að rannsaka möguleika slíkra véla. Hann vann líka að hönnun fyrstu vélarinnar sem gat ekki aðeins framkvæmt útreikninga heldur einnig geymt og keyrt fyrirmæli. Það tæki er og talið hið fyrsta sem verðskuldar heitið „tölva“ í skilningi nútímans. Turing skildi að tölvur geta verið miklu meira en reiknivélar – og hann taldi að þær gætu einhvern daginn líkt eftir mannlegri hugsun og jafnvel sýnt merki um greind."
      ],
      concepts: [
        {
          term: "Dulmál",
          explanation: "Aðferð til að breyta skilaboðum þannig að enginn skilji þau nema sá sem hefur lykilinn að dulkóðuninni. Notað þegar mikilvægt er að halda upplýsingum leyndum — t.d. í stríði eða þegar þú sendir lykilorð yfir internetið."
        },
        {
          term: "Reiknireglur",
          explanation: "Skref-fyrir-skref leiðbeiningar sem segja vél eða manneskju nákvæmlega hvernig leysa á tiltekið verkefni. Á ensku er talað um „algorithm“. Þetta er kjarni allra forrita — og líka gervigreindar."
        },
        {
          term: "Tölva",
          explanation: "Vél sem getur bæði geymt fyrirmæli (forrit) og keyrt þau eftir þörfum. Bombe-vél Turings var ekki alveg tölva í þessum skilningi, en hugmyndir hans leiddu fáeinum árum síðar til fyrstu eiginlegu tölvunnar."
        }
      ],
      visual: { type: "interactive", description: "enigma puzzle" }
    },
    {
      id: "algrim",
      part: 1,
      title: "Algrím",
      text: [
        "Hugtakið „computer“ eða „tölva“ er mun eldra en tækið sem Turing sá fyrir sér. Orðið táknaði manneskju sem sinnti ákveðnum verkefnum. Heimur iðnbyltingarinnar krafðist mikillar talnavinnu sem stjórnendur og yfirmenn nenntu sjaldnast að sinna sjálfir. Þess vegna voru ráðnir stórir hópar fólks – yfirleitt kvenna – sem höfðu það hlutverk að framkvæma reikniaðgerðir. Manneskja með slíkt hlutverk var tölvan. Turing taldi að ef manneskja gæti framkvæmt flókin verkefni án þess að skilja jafnvel hvað hún væri að gera þá væri fullkomlega mögulegt að láta vél vinna verkefnið. Vélina þyrfti að hanna þannig að hún gæti unnið eftir nákvæmum fyrirmælum. Slík fyrirmæli köllum við nú algrím.",
        "Algrím, reiknirit eða algóritmar hafa fylgt mannkyninu í þúsundir ára. Það má líkja þeim við stærðfræðilegar uppskriftir. Dæmi um algrím frá fornöld eru kerfi frá Mesópótamíu sem notuð voru til að reikna út hve langan tíma það tæki að grafa áveituskurð með tilteknum fjölda verkamanna ef lengd skurðarins væri þekkt.",
        "Persneskur fjölfræðingur, Muhammad ibn Musa al-Khwarizmi (á persnesku: محمد بن موسى خوارزمی) er talinn til merkustu stærðfræðinga sögunnar. Með honum bárust stærðfræðitákn Indverja til hins íslamska heims fyrir meira en þúsund árum og það eru tölurnar sem heimsbyggðin notar enn í dag. Hann skrifaði fyrstu nákvæmu lýsinguna á algebru eða bókstafareikningi og hann lýsti fyrstur nákvæmlega algrímum. Alþjóðlega hugtakið „algóritmi“ er seinni tíma vísun í nafnið hans, al-Khwarizmi.",
        "Algrím eru fyrirmæli, þau geta sagt tölvu hvernig hún á að leysa verkefni. Þekkt dæmi um algrím er regla sem lýsir því hvernig finna má tiltekið orð í stóru safni orða. En það er einmitt verkefni sem tölva (hvort sem um er að ræða manneskju eða tæki) gæti verið falið.",
        "Í fullri stærð er orðabók Oxford-háskóla meira en tuttugu þúsund blaðsíður. Það er því ekki einfalt að finna eitt tiltekið orð. Auðvitað vinna nútímalegar tölvur hratt og það er hægt að setja ýmsar reglur um það hvernig leitað er að orðinu. Forritun (að semja fyrirmæli fyrir tölvur) snýst að verulegi leyti um að finna leiðir til að spara tíma og fyrirhöfn. Þar skipta vel hönnuð algrím megin máli. Frægt algrím leysir þrautina með orðaleitina þannig að safnið (í þessu tilfelli orðabókin) sem leitað er í skal fyrst opnað í miðju.",
        "Það er afar ólíklegt að orðið sem leitað er að sé nákvæmlega þar. En af því orðabók er í stafrófsröð sérðu strax hvort þú ert komin fram hjá orðinu. Þú ert búin að skipta leitarsvæðinu í tvennt og þarft ekki að leita frekar í þeim helmingi sem orðið er ekki í. Þú opnar nú þann hluta sem eftir er, aftur í miðju. Þetta endurtekur þú þar til orðið finnst.",
        "Ef orðið er mjög framarlega í stafrófinu má vel vera að hægt sé að finna það hraðar með annarri aðferð (til dæmis að fletta bara bókinni frá byrjun). Galdur algrímsins felst í því að bók sem er þúsund blaðsíður mun aldrei þurfa að opna oftar en tíu sinnum með þessari leitaraðferð. Bók sem er tæpar 22 þúsund blaðsíður (eins og Oxford-orðabókin) þarf ekki að opna oftar en fimmtán sinnum. Jafnvel milljón blaðsíðna bók þyrfti ekki að opna oftar en tuttugu sinnum.",
        "Sá grundvallarmunur er á tölvum og fólki að tölvur eiga mjög auðvelt með að nota algrím og ruglast hvorki né þreytast. Fólk sem lærir algrím getur átt erfitt með slíkt nám. Það þekkja allir nemendur sem lært hafa algrím eins og þau hvernig tekið er til láns af núlli eða deilt með stórum tölum. Tölva kvartar hvorki né misskilur svo lengi sem fyrirmælin eru skýr."
      ],
      concepts: [
        {
          term: "Algrím",
          explanation: "Skref-fyrir-skref leiðbeiningar sem segja hvernig leysa á tiltekið verkefni. Hugtakið Algóritmi er dregið af nafni persneska stærðfræðingsins al-Khwarizmi sem skrifaði fyrstu nákvæmu lýsinguna á slíkum aðferðum fyrir meira en þúsund árum."
        },
        {
          term: "Tvíleit",
          explanation: "Leitaraðferð sem helmingar leitarsvæðið með hverri ágiskun. Til að finna tölu á bilinu 1–100 þarf aldrei meira en 7 ágiskanir, og til að finna orð í 22 þúsund síðna orðabók þarf aldrei að opna hana oftar en 15 sinnum."
        },
        {
          term: "Tölvunarfræði",
          explanation: "Fræðigrein sem fæst við hvernig tölvur vinna og hvernig hægt sé að nýta þær. Stór hluti hennar snýst um að finna snjallar leiðir til að láta tölvur leysa verkefni á sem stystum tíma — það er einmitt það sem algrím gera."
        }
      ],
      visual: { type: "interactive", description: "binary search" }
    },
    {
      id: "prof-i-mennsku",
      part: 1,
      title: "Próf í mennsku",
      text: [
        "Alan Turing taldi að tilgangslaust að spyrja hvort vélar gætu hugsað. Bæði hugtökin, vélar og hugsun, væru of óskýr til að hægt væri að nota þau á vísindalegan hátt. Ef við ætlum að ná árangri í að skilja hversu líkar tölvur geta orðið mannfólki verðum við að nota aðrar aðferðir. Besta leiðin til að bera saman tölvur og fólk er, að mati Turings, að rannsaka hvort venjulegt fólk getur ruglast á tölvu og fólki. Í ritgerðinni Computing Machinery and Intelligence (Reiknivélar og vitsmunir) í tímaritinu Mind árið 1950 stakk hann upp á leið til að meta greind tölva með hermileik sem síðar hlaut nafnið Turing-próf.",
        "Prófið fer fram á eftirfarandi hátt: Dómari, sem er manneskja, á samskipti í gegnum textaskilaboð við tvo aðila, eina vél og eina manneskju. Ef dómaranum tekst ekki að greina áreiðanlega hvor er vélin og hvor manneskjan, hefur vélin staðist prófið og sýnt fram á einhvers konar greind. Turing hélt því fram að svona próf væri skynsamleg leið til að meta greind véla. Hann vildi forðast flóknar, heimspekilegar spurningar um eðli hugsunar eða meðvitundar.",
        "Turing-prófið er enn til í mörgum útgáfum en með aukinni getu forrita til að eiga skrifleg og munnleg samskipti hafa orðið til nýjar útgáfur af prófum sem gera miklu meiri kröfur en Turing gerði sjálfur. Við ræðum það betur síðar. Prófið var tímamótahugmynd sem veitt hefur kynslóðum vísindamanna, heimspekinga og verkfræðinga innblástur.",
        "Þrátt fyrir afrekin voru eftirstríðsárin erfitt tímabil í lífi Turings. Árið 1952 var hann dæmdur fyrir samkynhneigð, sem var þá refsiverð í Bretlandi, og í kjölfarið var hann þvingaður til að gangast undir grimmilega læknisaðgerð sem skaðaði hann bæði andlega og líkamlega. Hann lést árið 1954, aðeins fjörutíu og eins árs gamall. Hann féll að öllum líkindum fyrir eigin hendi.",
        "Löngu seinna var leynd aflétt af starfi hans og annarra í Bletchley Park. Árið 2009 baðst breska ríkisstjórnin formlega afsökunar á því hvernig komið var fram við hann og árið 2013 veitti Elísabet drottning honum konunglega sakaruppgjöf."
      ],
      concepts: [
        {
          term: "Turing-próf",
          explanation: "Hugmynd Alan Turings frá 1950 um hvernig hægt sé að meta hvort vél getur hugsað. Dómari talar í gegnum textaskilaboð við bæði manneskju og tölvu án þess að vita hvor er hvor — ef dómaranum tekst ekki að greina þau að, hefur tölvan staðist prófið."
        },
        {
          term: "Greind",
          explanation: "Hæfni til að læra, leysa þrautir og skilja. Turing taldi að óþarfi væri að deila um nákvæmlega hvað greind sé — það sé nóg að spyrja hvort vél geti hagað sér eins og greind manneskja."
        },
        {
          term: "Sakaruppgjöf",
          explanation: "Formleg fyrirgefning frá æðstu yfirvöldum sem eyðir dómi yfir manneskju. Turing fékk konunglega sakaruppgjöf frá Elísabetu drottningu árið 2013, tæpum sextíu árum eftir andlát sitt."
        }
      ],
      visual: null
    },
    {
      id: "tolva-nemur-land",
      part: 1,
      title: "Tölva nemur land",
      text: [
        "Hugmyndir Turings og annarra um tölvutæknina vöktu verðskuldaða athygli um heim allan. Tæki voru smíðuð víða um heim og þeim falin margvísleg verkefni sem mannlegu tölvurnar höfðu áður sinnt. Meira að segja á Íslandi birtust snemma í blöðum fréttir af hinni stórkostlegu nýju uppfinningu, rafeindaheilanum – tæki sem gæti unnið á örfáum klukkustundum verk sem tæki færustu menn mörg ár.",
        "Rafeindaheili var einnig nefndur rafheili, rafeindareiknivél og loks tölva. Orðið „tölva“ sameinar hugtakið „tala“, sem vísar til þess að tækin vinna með tölur og „völva“, spákerlingar í norrænni goðafræði. Þannig endurspeglar orðið bæði rökfræðilega og dulmagnaða eiginleika tölvunnar.",
        "Fyrsta tölvan sem kom til Íslands var flutt inn af fyrirtæki í Reykjavík árið 1963 og geymd í húsnæði þess við Klapparstíg. Hún kostaði stórfé og var nærri hálft tonn að þyngd. Hún notaði gataspjöld, líkt og Babbage hafði séð fyrir sér. Fræðimenn voru tíðir gestir á skrifstofunni enda leyfði eigandi tölvunnar fremstu vísindamönnum þjóðarinnar að nota tækið til flókinna útreikninga. Tölvuöld var hafin á Íslandi.",
        "Það getur verið erfitt fyrir nútímafólk að skilja hve mikil breyting fylgdi tilkomu tölvanna og enn erfiðara að gera sér grein fyrir hve einfaldar, hægvirkar og takmarkaðar þær voru. Fyrsta tölvan á Íslandi kostaði milljónir en gat samt aðeins framkvæmt afar frumstæð verkefni sem nútímatölvur leysa á brotabroti úr sekúndu. Til samanburðar eru margfalt öflugri tölvur í örbylgjuofnum eða einföldum vasareiknum. Tölvan á Klapparstígnum hefði aldrei getað mælt púls í rauntíma, þótt snjallúr í dag geri það meðfram því að spila tónlist og taka á móti skilaboðum. Tölva í bíl, sem tengist við farsíma, er margfalt öflugri. Ef reynt væri að spila tölvuleik með reikniafli fyrstu íslensku tölvunnar myndi taka marga klukkutíma eða daga að birta eina línu myndarinnar á skjánum. Í dag birtast heilar myndir á tölvuskjá mörgum sinnum á sekúndu. Snjallsíminn í vasanum þínum er meira en milljón sinnum öflugri tölva en sú sem stýrði Apollo-geimfarinu til lendingar á tunglinu árið 1969.",
        "Það getur verið freistandi að líta um öxl og finnast lítið til afreka fyrri kynslóða koma. Það eru mikil mistök. Þvert á móti er magnað hve stór afrek voru unnin við erfiðar aðstæður. Einfaldar og lúshægar tölvur á nútíma mælikvarða kröfðust frábærrar verkfræði, forritunar og nær óendanlegrar seiglu og útsjónarsemi. Án þeirra væri nútímatækni ekki til."
      ],
      concepts: [
        {
          term: "Rafeindaheili",
          explanation: "Eldra íslenskt orð yfir tölvu, notað um miðja 20. öld. Önnur eldri heiti voru rafheili og rafeindareiknivél, áður en orðið „tölva“ — sambland af tala og völva — festist í málinu."
        },
        {
          term: "Reikniafl",
          explanation: "Hve marga útreikninga vél getur framkvæmt á sekúndu. Reikniafl tölva hefur u.þ.b. tvöfaldast annað hvert ár síðustu áratugi — því er nútímasnjallsími milljón sinnum öflugri en tölva sem fyllti heilt herbergi á sjöunda áratugnum."
        },
        {
          term: "Apollo-geimfarið",
          explanation: "Bandarísk geimferð sem flutti fyrstu menn til tunglsins árið 1969. Tölvan sem stýrði ferðinni var afar einföld á nútíma mælikvarða — snjallsíminn í vasanum þínum er meira en milljón sinnum öflugri."
        }
      ],
      visual: { type: "interactive", description: "computing power comparison" }
    },
    {
      id: "faeding-gervigreindar",
      part: 1,
      title: "Fæðing gervigreindar",
      text: [
        "Árið 1956 hittist hópur bandarískra vísindamanna á sumarnámskeiði við Dartmouth-háskóla. Til umræðu var hvernig tölvur gætu líkt eftir mannlegri hugsun. John McCarthy, einn af þátttakendum, stakk upp á nafni á viðfangsefnið: Gervigreind (e. Artificial Intelligence).",
        "Tvö sjónarmið voru upp um það hvernig kenna mætti tölvum að „hugsa“. Annað byggði á hugmyndum í anda Leibniz, hitt kom úr smiðju Turings. Hópurinn í Dartmouth varð sammála um að fyrri leiðin væri líklegri til árangurs. Tölvur eiga auðvelt með að fylgja reglum og skýrum fyrirmælum. Leibniz taldi að vandaða, mannlega hugsun mætti búta niður í skýrar einingar og rökrétt skref. Með því að forrita tölvu með einhverskonar táknum sem fylgja röklegum reglum ætti að vera hægt að framkvæma einhverskonar hugsun.",
        "Gervigreind af þessu tagi gengur undir ýmsum nöfnum. Hún er stundum sögð vera táknræn (e. symbolic) eða „klassísk“ eða jafnvel GOFAI (Good Old-Fashioned AI). Hún felur í sér að forritarinn skilgreinir mjög vandlega þær „hugsanir“ sem hann vill að tölvan hafi á valdi sínu og lýsir þeim nákvæmlega með forritum. Með því að tengja röklegar reglur við þekkingarforða er hægt að „kenna“ tölvum að leiðrétta stafsetningu, spá fyrir um veður, greina sjúkdóma, spila myllu eða svara spurningum um afmarkað efni.",
        "Turing hafði aðrar hugmyndir.",
        "Tengingarhyggja (e. connectionism) er hugtak sem stundum er notuð til að lýsa hugmyndum í anda Turings. Samkvæmt henni er hægt að líkja vélrænt eftir hugsun án þess að útskýra í smáatriðum fyrir tölvunni hvernig hún eigi að fara að því að leysa verkefni.",
        "Fáar leiðir eru betri til að varpa ljósi á muninn á aðferðunum en að rifja upp söguna af Heimska-Hans, drengnum sem var að gera móður sína brjálaða með því að hanga heima og gera ekki neitt. Þegar hún skipaði honum að fara út og finna sér vinnu tókst Hans að afla sér peninga en á leiðinni heim missti hann þá í ána. Móðir hans skammaði hann og sagði að hann ætti að stinga laununum í vasann. Daginn eftir fékk hann vinnu hjá bónda sem launaði honum með skál af mjólk. Hans mundi hvað honum hafði verið sagt og hellti mjólkinni í vasann og kom heim með rennblauta buxnaskálm. „Næst skaltu bera launin á höfðinu!“ skipaði mamman. Það endaði auðvitað með ósköpum því næsta dag fékk Hans smjörstykki að launum sem bráðnaði niður andlitið á honum á leiðinni heim.",
        "Segja má að móðir Heimska-Hans sé táknbundinn forritari. Hún reynir að gefa honum skýr fyrirmæli til þess að honum takist ætlunarverkið – sem er að koma vinnulaununum heim. Vandinn er sá að hver fyrirmæli eiga aðeins við mjög afmörkuð tilfelli og þegar forsendur breytast getur aðferðin hætt að skila árangri. Þess vegna þarf Hans á endanum töluvert stórt safn fyrirmæla eigi honum að takast ætlunarverkið og jafnvel þá þarf lítið að bera út af til þess að Hans geri einhverja vitleysu.",
        "Í tengslanálgun fengi Hans einfaldlega þau fyrirmæli að koma laununum heilum heim. Hann væri svo látinn vinna dag eftir dag og fengi ekki að hætta fyrr en hann hefði lært af mistökum sínum. Að lokum, að því gefnu að ekki væri gefist upp, myndi hann sjálfur finna leiðir til að koma ólíkum hlutum alla leið heim í kotið til móður sinnar.",
        "McCarthy og félagar veltu þessu öllu vandlega fyrir sér og töldu, eins og áður er nefnt, að mun raunhæfara væri að þróa gervigreind á táknbundinn hátt miðað við þann vélbúnað og aðstæður sem þeir bjuggu við. Það leiddi til þess að fyrstu áratugir rannsókna á gervigreind snerust að mestu leyti um táknræna nálgun. Hins vegar áttu hugmyndir Turings um tengslahyggju eftir að eiga magnaða endurkomu eins og rætt verður síðar."
      ],
      concepts: [
        {
          term: "Gervigreind",
          explanation: "Vélar eða forrit sem geta unnið verkefni sem yfirleitt krefjast mannlegrar greindar — eins og að skilja tungumál, þekkja andlit eða leysa þrautir. Hugtakið var fyrst notað af John McCarthy árið 1956 á sumarnámskeiði í Dartmouth-háskóla."
        },
        {
          term: "Táknbundin gervigreind",
          explanation: "Eldri nálgun á gervigreind þar sem forritarinn skrifar nákvæmar reglur og fyrirmæli til að lýsa því hvernig tölvan á að „hugsa“. Stundum kölluð GOFAI (Good Old-Fashioned AI). Hentar vel til afmarkaðra verkefna eins og að spá fyrir um veður eða leiðrétta stafsetningu."
        },
        {
          term: "Tengingarhyggja",
          explanation: "Nálgun á gervigreind sem byggir á því að láta tölvuna læra sjálfa af reynslu, frekar en að segja henni nákvæmlega hvað hún á að gera. Líkist meira því hvernig fólk lærir — með því að prófa sig áfram og laga sig að mistökum."
        }
      ],
      visual: null
    },
    {
      id: "sumur-og-vetur",
      part: 1,
      title: "Sumur og vetur í sögu gervigreindar",
      text: [
        "Sögu gervigreindar er stundum skipt í árstíðir þar sem skiptast á tímabil mikillar bjartsýni, þar sem rannsóknir og þróun virðast skila miklum árangri, aðgengi að fjármagni er auðvelt og væntingar miklar. Slík tímabil eru kölluð sumur og þau hafa verið að minnsta kosti þrjú síðan gervigreind varð til sem sjálfstætt rannsóknarsvið í Dartmouth árið 1956.",
        "Á milli sumranna hafa verið vetur. Þeir einkennast af vonbrigðum, vantrú og erfiðleikum við að fjármagna tækniþróun og rannsóknir. Hinn fyrsti vetur hófst upp úr 1970 þegar ljóst varð að táknbundin gervigreindarforrit stóðu ekki undir þeim miklu væntingum sem til þeirra voru gerðar. Jafnvel fullkomnustu hugsandi vélar brugðust illa í ófyrirsjáanlegum aðstæðum. Sem dæmi lögðu bandarísk stjórnvöld mikla peninga í forrit sem áttu að þýða sjálfkrafa á milli tungumála. Þrátt fyrir mikinn tilkostnað og mikið erfiði lenti tæknin ítrekað í vandræðum, sérstaklega ef notað var óformlegt, flókið eða óvenjulegt málfar.",
        "Gervigreind náði sér tímabundið á strik aftur og annað sumar hennar hófst um 1980. Um það leyti ríkti mikil bjartsýni um tölvutækni og einkatölvum fjölgaði hratt. Tölvuleikir urðu vinsæl afþreying og miklir peningar runnu til kaupa á búnaði og forritum. Gervigreind vakti aftur áhuga og athygli, sérstaklega við hönnun svokallaðra sérfræðikerfa sem í einhverjum tilfellum gátu sparað stórfyrirtækjum og stofnunum mikið fé og tíma. Á þessum tíma var mikið tæknikapphlaup milli stórveldanna, sérstaklega Bandaríkjanna og Japan, sem gerði það að verkum að auðvelt var að skapa áhuga fjárfesta á möguleikum tækninnar.",
        "Annar veturinn hófst um 1990 þegar sérfræðikerfin höfðu náð nokkurn veginn eins langt og hægt varð. Þau reyndust ágæt stuðningskerfi fyrir ýmsa sérfræðinga, eins og lækna, fjárfesta eða lyfjafræðinga, þar sem þau gátu sótt upplýsingar í gagnagrunna og rökstutt upp að ákveðnu marki tillögur sínar. Almenningur komst einnig upp á lag með að nota slík kerfi til að leiðrétta stafsetningu. Því fór samt fjarri að tæknin stæði undir þeim miklu væntingum sem til hennar höfðu verið gerðar. Því fjaraði hratt undan áhuga á gervigreind á árunum fyrir aldamót og rannsakendur forðuðust jafnvel að nefna gervigreind (AI) í umsóknum um rannsóknarstyrki til að eiga meiri möguleika.",
        "Þriðja sumri gervigreindar (því sem nú stendur sem hæst) verða gerð sérstök skil síðar í efninu."
      ],
      concepts: [
        {
          term: "Gervigreindarvetur",
          explanation: "Tímabil í sögu gervigreindar þegar áhugi, fjármagn og bjartsýni minnka — yfirleitt eftir að nýjustu tæknin hefur ekki staðið undir væntingum. Síðan 1956 hafa að minnsta kosti tveir slíkir vetur átt sér stað, frá um 1970 og frá um 1990."
        },
        {
          term: "Sérfræðikerfi",
          explanation: "Tölvuforrit sem ætlað er að líkja eftir sérfræðingi á tilteknu sviði. Það fær safn af reglum og þekkingu (t.d. um sjúkdóma eða lögfræði) og getur svarað spurningum eða mælt með ákvörðun. Sérfræðikerfi voru megináhersla gervigreindar á níunda áratug 20. aldar."
        },
        {
          term: "Vélræn þýðing",
          explanation: "Sjálfvirk þýðing milli tungumála með tölvu. Hún var eitt af fyrstu verkefnum gervigreindar og olli miklum vonbrigðum á áttunda áratug 20. aldar þegar tæknin réð ekki við flókið málfar. Nútímakerfi eins og Google Translate byggja á alveg annarri nálgun — tengingarhyggju."
        }
      ],
      visual: null
    },
    {
      id: "tolvur-reyna-vid-turing-prof",
      part: 1,
      title: "Tölvur reyna við Turing-próf",
      text: [
        "Fyrsta forritið sem gerði sæmilega sannfærandi atlögu að Turing-prófi leit dagsins ljós árið 1966. Vísindamenn við MIT-háskóla hönnuðu spjallmennið Elísu (ELIZA). Forritið var einfalt en virkni þess byggði á því að spyrja opinna spurninga og nota svörin til að halda samtalinu gangandi. „Hvað viltu ræða?“, „Hvað finnst þér um það?“ og „Geturðu útskýrt það betur?“ eru dæmigerðar setningar úr safni Elísu. Ef notandinn reyndi að taka frumkvæðið af Elísu sagði hún: „Tölum ekki um það…“ og reyndi að beina samtalinu inn á fyrri braut.",
        "Það tók yfirleitt ekki langan tíma fyrir notandann að átta sig á því að ekki var allt með felldu. Svör forritsins voru einhæf, grunn og gátu verið alveg úr takti við það sem rætt var. Elísa féll því á Turing-prófinu.",
        "Löngu seinna, árið 2014, var haldinn viðburður í Háskólanum í Reading í Englandi þar sem margfalt fullkomnara spjallforrit náði að blekkja þriðjung viðmælenda sinna. Árangurinn er umdeildur því forritið, Eugene Goostman, þóttist vera þrettán ára úkraínskur drengur. Fólkið sem ræddi við hann átti auðvelt með að fyrirgefa hinum falska viðmælanda allskonar misskilning og skort á þekkingu þar sem um væri að ræða barn sem kynni takmarkaða ensku og þekkti ekki endilega mjög vel til þeirra málefna sem rædd voru.",
        "Það má segja að vænlegustu tilraunirnar við að standast Turing-prófið hafi í meira en hálfa öld snúist um að lækka væntingar viðmælandans til forritsins sem verið var að prófa. Það breyttist árið 2024.",
        "Í maí það ár birtu rannsakendur við Kaliforníuháskóla í San Diego í Bandaríkjunum niðurstöður af tilraunum þar sem ChatGPT-4 tók Turing-próf með því að spjalla við fólk í fimm mínútna samtölum. Niðurstaðan var sú að í 54 prósent tilfella hélt viðmælandinn að hann væri að tala við aðra manneskju. Það bendir sterklega til þess að þróun gervigreindar sé komin nógu langt til að standast einhverjar útgáfur af Turing-prófi.",
        "Þýðir það að tölvur geti hugsað?",
        "Það fer auðvitað eftir því hvernig á það er litið. Aðdáandi Turings gæti sagt að lengra verði ekki komist. Aðrir benda á að hugmyndir okkar um hugsun og greind hafi mikið breyst frá árinu 1950 og því sé eðlilegt að við gerum meiri kröfur en gerðar voru þá.",
        "Í þeim hópi er heimspekingurinn John Searle sem birti árið 1980 litla dæmisögu eða hugsanatilraun sem gengur undir nafninu Kínverska herbergið. Hún er um manneskju sem lokuð er inni í herbergi. Á borði er bók á tungumáli sem manneskjan skilur. Blaði er rennt undir hurðina inn í herbergið. Á því er kínverskt tákn sem manneskjan skilur alls ekki en hún sér að viðkomandi tákn er í bókinni ásamt fyrirmælum um að svara tákninu með öðru tákni. Manneskjan teiknar táknið og rennir því til baka undir hurðina.",
        "Frá sjónarhorni manneskjunnar sem stendur fyrir utan herbergið gæti tilraunin talist sönnun þess að inni í herberginu sé einhver sem kunni kínversku.",
        "Þessa sögu er ágætt að hafa í huga þegar spjallmenni eru hugleidd. Það þarf nefnilega ekki að fara saman: Að svara rétt og að skilja svörin sjálfur."
      ],
      concepts: [
        {
          term: "Spjallmenni",
          explanation: "Tölvuforrit sem getur átt textasamtal við notanda. Elísa (1966) var fyrsta þekkta spjallmennið; nútímakerfi eins og ChatGPT eru mun fullkomnari og hafa lært samskipti með því að skoða gríðarstórt safn af texta."
        },
        {
          term: "Hugsanatilraun",
          explanation: "Aðferð í heimspeki þar sem ímynduð saga eða sviðsmynd er notuð til að rannsaka hugmynd. Það þarf ekki að framkvæma tilraunina til að sjá hvað hún kennir — það nægir að ímynda sér hvernig hún yrði."
        },
        {
          term: "Kínverska herbergið",
          explanation: "Hugsanatilraun heimspekingsins John Searle frá 1980 sem á að sýna fram á að það að svara rétt á tungumáli sé ekki sama og að skilja það. Hún er enn umdeild og er oft notuð til að gagnrýna hvort gervigreind sé „í raun og veru“ greind."
        }
      ],
      visual: { type: "diagram", description: "chinese room" }
    },
    {
      id: "tvíundarkerfid",
      part: 2,
      title: "Tvíundarkerfið, tungumál tölvunnar",
      text: [
        "Til að skilja heiminn nota menn tákn. Þar sem veröldin er stór og flókin er útilokað að hvert einasta fyrirbæri eða hugtak fái sitt eigið tákn. Í öllum samfélögum hafa með tímanum orðið til aðferðir við að lýsa fjölbreyttum veruleika með takmörkuðum fjölda tákna. Táknunum er gjarnan raðað saman eftir ákveðnum kerfum til að búa til ólíkar merkingar.",
        "Orð eru dæmi um tákn. Stafróf eru söfn tákna sem nota má til að lýsa orðum. Í okkar heimshluta innihalda stafróf yfirleitt 24 til 32 ólíka stafi sem tákna mismunandi hljóð. Stafróf geta einnig táknað fyrirbæri.",
        "Tölur má tákna með bókstöfum [tíu] eða tölustöfum [10]. Tölustafirnir sem við notum eiga rætur að rekja til Indlands og eru tíu talsins: 0, 1, 2, 3, 4, 5, 6, 7, 8 og 9. Með þeim er hægt að tákna hvaða ræða tölu sem er. Það er aðeins hægt ef sama táknið getur haft fleiri en eina merkingu. Það er gert með því að sæti talnanna í röð hefur sérstakt gildi.",
        "Leibniz pældi mikið í táknkerfum og árið 1703 birti hann greinina Explication de l'Arithmétique Binaire (Útskýring á tvíundareikningi). Þar útskýrði hann að lýsingar væru í gömlum kínverskum heimildum á ritmáli sem notaði aðeins tvö tákn til að tákna hvaða tölu sem er. Þar sem táknin voru aðeins tvö kallaði hann kerfið tvíundarkerfi (fr. binaire). Leibniz stakk upp á nýrri útgáfu kerfisins og enn í dag er það grundvallarkerfi í stærðfræði og vísindum. Skrifuð útgáfa þess notast eingöngu við táknin 1 og 0. Rétt eins og í tugakerfinu ræðst merking táknsins af sætinu sem það situr í. Munurinn á kerfunum er sá að í tvíundakerfinu tvöfaldast stærðin þegar farið er úr lægra sæti í hærra í stað þess að tífaldast í tugakerfinu.",
        "Það sést skýrt þegar fyrstu tíu tölurnar eru skoðaðar í báðum kerfum:",
        "Tvíundarkerfið er hið eiginlega tungumál allrar tölvutækni.",
        "Þegar við notum tölvu eða snjallsíma erum við yfirleitt ekki endilega meðvituð um að tækið sé að fást við runur af tölum. Við sjáum texta og myndir og heyrum hljóð. Samt er það svo að hver einasti bókstafur, hver einasta mynd og hvert einasta hljóð hefur, í meðförum tækninnar, verið þýtt og táknað sem runur af „1“ og „0“.",
        "Hvernig í ósköpunum?"
      ],
      concepts: [
        {
          term: "Tvíundarkerfi",
          explanation: "Talnakerfi sem notar aðeins tvö tákn, 0 og 1. Hvert sæti táknar tvöfalt gildi á við sætið hægra megin (1, 2, 4, 8, 16, 32 …). Talan 13 er til dæmis skrifuð 1101 í tvíundarkerfinu. Allar tölvur og snjallsímar reikna á þennan hátt undir niðri."
        },
        {
          term: "Tugakerfi",
          explanation: "Talnakerfi sem notar tíu tákn, 0 til 9. Hvert sæti táknar tífalt gildi á við sætið hægra megin (1, 10, 100, 1000 …). Þetta er kerfið sem fólk notar dags daglega; tölustafirnir eiga rætur að rekja til Indlands."
        },
        {
          term: "Tákn",
          explanation: "Merki sem stendur fyrir eitthvað annað en sjálft sig — bókstafur fyrir hljóð, tölustafur fyrir magn, myndtákn fyrir hugmynd. Samfélög nota takmarkaðan fjölda tákna og raða þeim saman í kerfi til að lýsa öllum heiminum."
        }
      ],
      visuals: [
        { type: "table",       description: "binary table",     after: 4 },
        { type: "interactive", description: "binary converter", after: 7 }
      ]
    },
    {
      id: "ritad-mal-i-tviundarkerfi",
      part: 2,
      title: "Ritað mál í tvíundarkerfi",
      text: [
        "Bókstafi er einfalt að tákna í tvíundakerfi. Eina sem þarf er að gefa þeim númer. Númerið getur þá vísað á mynd eða hljóð bókstafsins sem tölvan geymir á vísum stað.",
        "Eldri Íslendingar muna vel eftir að hafa stundum opnað skjöl með íslenskum texta og í stað sumra stafanna birtist óskiljanlegt rugl. Það er vegna þess að tölvutæknin hefur ekki alltaf tekið tillit til tungumála sem fáir tala. Íslenskir sérstafir hafa ekki alltaf haft númer og því hafa ekki öll forrit getað framkallað þá.",
        "Framan af notuðu flest ritunarforrit staðal sem kallast ASCII (American Standard Code for Information Interchange). Í því kerfi fékk hver bókstafur úthlutað númeri frá einum og upp í 127. Stórt „A“ var sextíu og fimm (1000001) en lítið „a“ níutíu og sjö (1100001).",
        "ASCII notaði aðeins sjö tvíundatákn eða bita (e. bits) til að breyta bókstöfum í tölur. Með sjö tvíundatáknum er bara hægt að telja frá 0 og upp í 127. Þar sem flest forrit þurfa líka að geta unnið með tákn eins og + eða * eða @ eða ~ voru plássin fljót að fara. Margar þjóðir sem nota sjaldgæfa sérstafi urðu að sætta sig við það að þeir væru ekki með. Íslensk börn sem léku sér í einkatölvum þegar þær urðu fyrst algengar hér á landi sáu sjaldan eða aldrei íslenska stafi á skjánum og þar til nýlega höfnuðu mörg forrit íslenskum sérstöfum.",
        "Það varð til meira pláss þegar búin var til lengd útgáfa byggð á ASCII-staðlinum. Hún var aukinn um eitt pláss og var þá átta bita. Þá skapast rými fyrir 256 tákn. Átta bitar eru kallaðir eitt bæti (e. byte) og eftir því sem tölvur urðu öflugri hefur orðið algengara að telja gagnamagn í bætum (jafnvel megabætum, gígabætum og terabætum) frekar en bitum. Eftir stækkun fengu íslensku sérstafirnir loks örugg sæti (reyndar mjög aftarlega á listanum) og upp frá því varð auðveldara að nota íslenskt mál í hinum stafræna heimi.",
        "Í dag er ASCII enn stundum notað við mjög sérhæfð verkefni eins og forritun. Langalgengast er þó að nota svokallaðan Unicode staðal, sérstaklega UTF-8 staðal. Hann er byggður þannig upp að tákn geta haft mismunandi lengd, sum eru enn 8 bitar (eitt bæti) en önnur eru lengri. Flest gömlu ASCII-táknin halda sér en ótal mörg ný bætast við. Staðallinn nær auðveldlega utan um kínversku, japönsku, rússnesku, arabísku og önnur tungumál enda hefur hann rými fyrir meira en milljón tákn. UTF-8 táknar íslenska sérstafi með 2 bætum (16 bitum). Með þremur bætum (24 bitum) er hægt að nota kínversk tákn eins og 字 eða 节 og með fjórum bætum (32 bitum) er hægt að skrifa tjákn eða emoji 🤓.",
        "Fæst höfum við hugmynd um það hvort táknið sem við erum að skrifa á skjáinn er eitt bæti, tvö eða jafnvel fjögur. Það getur samt skipt máli. Íslenskur texti tekur nú meira pláss í tölvum en enska. Það þýðir að nota þarf meira gagnamagn til að senda íslensku á milli tækja og vinnslan tekur lengri tíma. Það getur þýtt aukinn kostnað fyrir notandann, bæði við flutning gagna og vinnslu."
      ],
      concepts: [
        {
          term: "Bæti",
          explanation: "Hópur af átta bitum (átta núllum eða einum). Bæti er minnsta einingin sem flestar tölvur geyma og vinna með í einu — og gagnamagn er oftast mælt í kílóbætum (þúsund bæti), megabætum (milljón bæti) eða gígabætum (milljarður bæti)."
        },
        {
          term: "ASCII",
          explanation: "Gamall staðall frá árinu 1963 sem úthlutar enskum bókstöfum og tölustöfum númerum á bilinu 0–127. Hentaði vel fyrir ensku en gerði ekki ráð fyrir íslenskum eða öðrum sérstöfum — þeir komust ekki að fyrr en seinna."
        },
        {
          term: "Unicode",
          explanation: "Nútímalegur staðall sem getur táknað meira en milljón tákn úr öllum tungumálum heimsins — frá íslensku Þ og Ð yfir í kínversk tákn og tjákn (emoji). UTF-8 er algengasta útgáfan og notar 1 til 4 bæti á tákn eftir því hve algengt það er."
        }
      ],
      visual: { type: "interactive", description: "character encoder" }
    },
    {
      id: "hljod-og-mynd-i-tviundarkerfi",
      part: 2,
      title: "Hljóð og mynd í tvíundarkerfi",
      text: [
        "Snilldin við tvíundakerfið er sú að það getur jafn auðveldlega búið til tölustaf, mynd, hljóð og bókstafi. Eina krafan er sú að búnaðurinn sem notaður er sé stafrænn. Það þýðir að hann er hannaður til þess að vinna með upplýsingar sem búið er að þýða á tvíundakerfið. Tölvuskjár er stafrænn og í sjálfu sér breytir engu hvort á honum birtist texti eða mynd. Einungis þarf að senda skjánum skilaboð um það hvar hann eigi að hafa ljós og hvar ekki.",
        "Þú veist að ef þú blandar saman hvítum lit og svörtum færðu gráan. Og ef meira er sett af svartri málningu verður liturinn dekkri og ef meira er sett af hvítri verður hann ljósari. Fyrstu tölvuskjáirnir og sjónvörpin voru einlita (svarthvít, svartgræn eða jafnvel svartgul). Myndin sýndi aðeins einn lit sem gat verið misbjartur. Skjáir voru þannig hannaðir að nokkur hundruð dílar eða deplar (sem við köllum oft pixla) lágu hlið við hlið þvert yfir skjáinn í beinni röð. Með því að fylla skjáinn af slíkum röðum var hægt að búa til myndir. Það þurfti bara að senda skilaboð til skjásins um það hversu bjartur hver díll ætti að vera. Með rafeindabyssu var geisla skotið á innanverðar skjáinn af mismiklu afli. Geislinn rann svo hratt milli díla að augað taldi sig sjá allan skjáinn upplýstan í einu.",
        "Litaskjáir virkuðu eins nema að hver díll var gerður úr þremur minni dílum: einum rauðum, einum grænum og einum bláum. Ástæðan er sú að mannsaugað sér aðeins þessa þrjá liti með þeim frumum sem í auganu eru. Allir aðrir litir sem augað sér eru blanda af þessum litum.",
        "Nýir skjáir eru stafrænir. Í stað rafeindabyssu sem bunar misöflugum geisla á innanverðan skjáinn á fleygiferð er búið að skilgreina nákvæmlega hve bjartur hver díll á skjánum á að vera. Jafnan fær hver díll úthlutað einu bæti (átta bitum) og þar með gildi frá núll (engin birta, 0000 0000) til 255 (mesta birta, 1111 1111).",
        "Hér má sjá hvernig ólíkir litir eru framkallaðir með stafrænum hætti. Með því að stjórna því hve bjart hver litur skín er hægt að búa til milljónir litasamsetninga. Taktu eftir því að augað sér hvítan lit ef nálægir rauðir, grænir og bláir dílar eru allir af sama styrk.",
        "Þegar mynd er teiknuð á skjá, hvort sem það er broskall eða ljósmynd; kínversk tákn eða íslenskur bókstafur, þarf tölvan að senda skjánum upplýsingar um hvern einasta díl og styrk allra þriggja litanna í undirdílum hans. Þar sem síma- og tölvuskjáir nútímans geta haft milljónir díla sem sýna tugi eða hundruði mynda á sekúndu er ljóst að þessar upplýsingar eru gríðarlega umfangsmiklar. Ef tvíundakóði fyrir tölvuskjá væri prentaður í bók af stærðinni A4 með leturstærð 12 og línubili 1,5 þyrfi nærri fimmtíu bækur (sem væru 300 blaðsíður hver) undir kóðann sem fylgir einni skjámynd úr tölvuleik! Höfum hugfast að flestir skjáir skipta um mynd sextíu sinnum eða oftar á sekúndu.",
        "Augljóslega þarf mjög öflugan búnað fyrir slíka vinnslu og oft er tölvubúnaður innbyggður í skjái til að auðvelda verkið. Einnig er mikilvægt að finna snjallar leiðir til að minnka magn upplýsinganna, til dæmis með því að skipuleggja gögnin vel eða þjappa þeim saman. Ef skjár á allur að vera svartur í nokkrar sekúndur er til dæmis nóg að senda tölvunni í skjánum upplýsingar um að liturinn R:0, G:0 og B:0 eigi við um alla díla í ákveðinn tíma frekar en að senda þær upplýsingar trekk í trekk fyrir hvern einasta díl.",
        "Hljóð fylgir sömu lögmálum. Það er hægt að taka upp hljóð sem röð af stafrænum upplýsingum sem hægt er að vista, senda og spila úr hátalara. Þegar fólk talar saman í farsíma mælir hljóðnemi styrk hljóðsins nærri tíu þúsund sinnum á sekúndu. Styrkurinn er táknaður með tölu. Gögnin eru síðan send þráðlaust í síma viðmælandans þar sem rafstraumur lætur hátalara titra með sama styrk og takti. Við það er hljóðið endurskapað. Í fullkomnu hljóðupptökuveri er ekki óalgengt að sýni séu tekin af tónlist nærri tvö hundruð þúsund sinnum á sekúndu en þegar þú hlustar á lög á streymisveitum er yfirleitt búið að fjarlægja megnið af upplýsingunum án þess að þú heyrir muninn. Algengast er að tónlist sé streymt sem inniheldur 44100 mælingar á sekúndu. Það er um tvöfalt það sem þarf til svo hægt sé að spila skærustu hljóð sem mannseyrað getur greint."
      ],
      concepts: [
        {
          term: "Díll",
          explanation: "Minnsti hluti af mynd á skjá — stundum kallaður pixill (e. pixel). Síma- og tölvuskjáir nútímans innihalda milljónir díla, og hver þeirra getur tekið á sig hvaða lit sem er með blöndu af rauðu, grænu og bláu ljósi."
        },
        {
          term: "RGB",
          explanation: "Litakerfi sem notar þrjá grunnliti: rauðan (R), grænan (G) og bláan (B). Hver litur er gefinn upp með tölu á bilinu 0–255 og blanda þeirra þriggja getur framkallað meira en 16 milljónir litasamsetninga — nóg fyrir allt sem mannsaugað sér."
        },
        {
          term: "Sýnataka",
          explanation: "Að mæla samfellt merki — eins og hljóð — með reglulegu millibili og breyta í tölur. Tónlist á streymisveitum er yfirleitt tekin 44.100 sinnum á sekúndu, sem er nóg til þess að mannseyrað skynjar ekki muninn frá samfelldu hljóði."
        }
      ],
      visuals: [
        { type: "interactive", description: "rgb mixer",       after: 4 },
        { type: "interactive", description: "audio frequency", after: 7 }
      ]
    },
    {
      id: "rokrett-hugsun",
      part: 2,
      title: "Rökrétt hugsun",
      text: [
        "Við höfum nú rætt hvernig þýða má tölur, bókstafi, myndir og hljóð yfir á tvíundarkerfið. Þær upplýsingar má hæglega senda sem rafboð, þar sem kveikt eða slökkt er á rafmagni til þess að tákna einn og núll. Eins vitum við að lampar, og seinna smárar, gegndu mikilvægu hlutverki við að búa til kerfi rafrása sem sáu til þess að tölvur gátu ekki aðeins tekið á móti slíkum upplýsingum, heldur unnið með þær. Hér erum við ekki aðeins að tala um að breyta rafboðum í mynd á skjá eða hljóð í hátalara. Hér erum við líka að ræða það hvort, og þá hvernig, tölvur geti sjálfar framkvæmt hluti eins og samlagningu eða annað sem við höfum tilhneigingu til að telja að sé aðeins á færi þeirra sem geta hugsað.",
        "Leibniz var fjarri því fyrstur til að telja að lýsa mætti hugsun sem reglum. Um tvö þúsund árum áður en hann fæddist var orðin til býsna öflug vísindagrein sem stundum hefur verið kölluð þrætubókarlist en er betur þekkt sem rökfræði. Hún fjallar um hugsanir en er ólík nýrri greinum, eins og til dæmis sálfræði, að því leyti að rökfræði lýsir því hvernig hugsað er rétt.",
        "Ef hægt væri að kenna tölvu að herma eftir réttri hugsun gæti hún orðið að tæki eins og því sem Leibniz hélt að fólk gæti notað til að finna sannleikann í flóknum málum. Til þess þarf tölvan að ráða við rökfræði. Slíkt tæki gæti ekki aðeins náð valdi á því að hugsa, það gæti jafnvel orðið betra í rökhugsun en manneskjur.",
        "Rétt eða rökrétt hugsun er alls ekki alltaf einföld. Það er frekar auðvelt fyrir mannshugann að hrapa að ályktunum, týna þræði í hugmyndum sínum eða komast að rangri niðurstöðu.",
        "Frægt dæmi um slíkt er nefnt eftir sjónvarpsmanninum Monty Hall. Það er venjulega sett þannig upp að þátttakandi tekur þátt í gjafaleik. Á bak við einar dyr af þremur er veglegur vinningur. Þátttakandinn velur einar dyr. Þegar hann hefur valið, opnar stjórnandinn (sem í upprunalegu útgáfunni var Monty Hall) aðrar af dyrunum sem ekki voru valdar. Hann sýnar að þar var enginn vinningur. Nú fær þátttakandinn að velja hvort hann heldur sig við upprunalega valið eða skiptir um dyr. Flestir kjósa að halda sig við upprunalega valið og telja að það sé jafn líklegt að þar sé vinningurinn eins og bak við hinar dyrnar. En það er rangt. Það eru töluvert meiri líkur á að vinningurinn sé bak við dyrnar sem þátttakandinn valdi ekki.",
        "Ástæðan er sú að það eru þriðjungs líkur á að þitt fyrsta val sé rétt. Vinningurinn er miklu oftar bak við aðra af hinum dyrunum tveimur. Þú munt þess vegna vinna oftar ef þú þiggur boð um að skipta yfir í lokuðu dyrnar í stað þess að halda þig við þitt fyrsta val.",
        "Í formlegri rökfræði er hægt að kortleggja rétta og ranga hugsun. Það er oft gert með því að nota tákn og lýsa svo með reglum hvernig táknin tengjast á sama hátt og gert er í stærðfræði.",
        "Tökum einfalt dæmi. Gefum okkur að þetta sé satt: Í rigningu blotnar jörðin við húsið mitt. Auðvitað gæti svona setning verið röng. Húsið mitt gæti staðið í svo þéttum skógi að jörðin blotnar ekki þótt það rigni. Það gæti líka staðið á stultum úti í stöðuvatni þar sem alls engin jörð er í kring. Við erum í raun ekki komin að rökfræðinni sjálfri. Hennar hlutverk er að finna reglur um það hvernig forsendur tengjast réttum niðurstöðum. Við erum bara komin með eina forsendu og enga niðurstöðu enn.",
        "Gefum okkur því aðra forsendu: Það er rigning. Nú spyrjum við. Ef báðar forsendurnar eru sannar, getum við þá dregið af þeim rökrétta niðurstöðu? Til dæmis þessa: Jörðin við húsið mitt er blaut.",
        "Svarið er „já“. Ef báðar forsendur eru réttar þá er niðurstaðan rökrétt.",
        "Í sjálfu sér er þetta frekar einfalt. Við vitum þó að það þarf ekki mikið til svo að rökhugsun okkar lendi í vandræðum. Líklega er einfaldasta leiðin til að sýna hve brothugsun okkar er að skoða þessa röksemdafærslu: Ef það rignir þá blotnar garðurinn við húsið mitt. Nú er garðurinn blautur og því hefur rignt. Mjög eðlilegt er að þykja þessi fullyrðing nákvæmlega jafn rökrétt og sú sem við vorum að ræða. Það er rangt. Þessi fullyrðing er ekki rökrétt. Hún getur verið sönn. Það getur vel verið að garðurinn sé blautur út af rigningu en svo þarf ekki að vera. Garðurinn gæti verið blautur af einhverri annarri ástæðu en því að það hafi rignt. Kannski hefur einmitt alls ekki rignt í langan tíma og þess vegna vökvaði ég sjálfur lóðina.",
        "Leibniz og táknbundnir forritarar myndu reyna að kenna tölvu að hugsa rökrétt og sjá til þess að hún fylgi réttum reglum. Til þess að gera það er nauðsynlegt að brúa bilið milli tvíundarkerfisins og rökfræðinnar."
      ],
      concepts: [
        {
          term: "Rökfræði",
          explanation: "Fræðigrein sem rannsakar hvernig hugsað er rétt — hvaða niðurstöður má rökrétt draga af gefnum forsendum. Hún er um tvö þúsund ára gömul og er enn í dag undirstaða stærðfræði og tölvunarfræði."
        },
        {
          term: "Forsenda",
          explanation: "Fullyrðing sem gefin er sem grundvöllur röksemdafærslu. Í rökfræði þarf yfirleitt að taka tvær eða fleiri forsendur saman til að draga rökrétta niðurstöðu — t.d. „það rignir“ og „í rigningu blotnar garðurinn“ leiða af sér „garðurinn er blautur“."
        },
        {
          term: "Líkur",
          explanation: "Mat á því hversu oft tiltekinn atburður á sér stað. Líkur eru oftast gefnar upp sem brot eða prósent — t.d. eru þriðjungslíkur (⅓ eða um 33%) á að geta upp á réttum dyrum af þremur þegar allt er jafn líklegt."
        }
      ],
      visuals: [
        { type: "diagram",     description: "logic diagrams", after: 9 },
        { type: "interactive", description: "monty hall",    after: 5 }
      ]
    },
    {
      id: "rok-og-algebra",
      part: 2,
      title: "Rök og algebra",
      text: [
        "George Boole var enskur rökfræðingur og samtímamaður Babbage. Árið 1854 kom út bók eftir hann sem heitir Lögmál hugsunarinnar (The Laws of Thought). Þar lýsti hann því hvernig hægt er að nota algebru til að tákna rökrétta hugsun. Hann bendir á leiðir til að sýna tengsl með stærðfræðilegum táknum sem síðan má nota til að reikna sig að réttri niðurstöðu, með hjálp tvíundarkerfisins.",
        "Mjög algeng leið til að beita aðferð Booles er að teikna svokallaða sanngildistöflu. Gefum okkur tvö dæmi:",
        "Ef Jón OG Gunna koma í heimsókn helli ég upp á kaffi.",
        "og",
        "Ef Jón EÐA Gunna koma í heimsókn helli ég upp á kaffi.",
        "Hér er um ólíkar forsendur að ræða. Í þeirri neðri er nóg að annað þeirra komi í heimsókn til að hellt sé upp á kaffi. Í hinni fyrri þurfa þau að mæta bæði. Við getum líka skrifað þetta svona:",
        "(J og G) → K",
        "(J eða G) → K",
        "Með aðferð Boole notum við margföldun til að lýsa tengslum sem táknuð eru með „og“. Að sama skapi getum við notað samlagningu til að lýsa tengslum sem táknuð eru með „eða“. Síðan notum við tvíundarkerfið, 0 og 1, til að reikna okkur að niðurstöðu. Ef eitthvað er satt fær það táknið einn en ef það er ósatt fær það táknið núll.",
        "Við skulum nota forsendurnar í dæmunum af Jóni og Gunni. Sjáum svo hvaða niðurstöður eru mögulegar. A táknar að Jón komi í heimsókn og B að Gunna komi í heimsókn.",
        "Hér er mikilvægt að muna að við notum aðeins 1 og 0 til að tákna satt eða ósatt. Þess vegna verður 1+1 ekki að 2.",
        "Við sjáum í dæmunum að fyrri forsendan býr aðeins yfir einni leið til að skila sannri niðurstöðu. Bæði Jón og Gunna þurfa að mæta til að hún sé sönn. Í þeirri seinni eru möguleikarnir þrír.",
        "Eða hvað?",
        "Hér má færa rök fyrir því að sumt fólk notið hugtakið „eða“ þannig að það merki bara annað hvort, en ekki bæði. Flestum þætti okkur það heilmikill útúrsnúningur ef einhver svaraði spurningunni: „Viltu vatn eða mjólk með matnum?“ með því að segja „já.“",
        "Það er einfaldlega svo að „eða“ getur haft fleiri en eina merkingu. Þess vegna er hægt að tákna það með fleiri en einum hætti í algebru Boole. Hér notuðum við samband sem kallast OR og hefur gildin hér að ofan. Hitt sambandið, þar sem eitthvað er annað hvort eða, en ekki bæði, köllum við XOR."
      ],
      concepts: [
        {
          term: "Bólsk algebra",
          explanation: "Stærðfræðikerfi sem George Boole þróaði 1854 til að lýsa rökrétta hugsun með táknum og reglum. Sannleiksgildin eru aðeins tvö (1 fyrir satt, 0 fyrir ósatt), og hægt er að nota margföldun til að lýsa „og“ og samlagningu til að lýsa „eða“."
        },
        {
          term: "Sanngildistafla",
          explanation: "Tafla sem sýnir allar mögulegar útkomur af röklegri fullyrðingu. Hver röð sýnir eina samsetningu inntaka (t.d. 0 og 1 fyrir tvær inngangsbreytur) og hvaða niðurstöðu hún gefur."
        },
        {
          term: "XOR",
          explanation: "„Annað hvort eða“ — sambandið skilar 1 ef NÁKVÆMLEGA EITT inntak er 1, annars 0. Þetta er ólíkt OR sem skilar 1 ef AÐ MINNSTA KOSTI eitt er 1. Þannig er 1 XOR 1 = 0, en 1 OR 1 = 1."
        }
      ],
      visuals: [
        { type: "table",       description: "boole table",              after: 8 },
        { type: "interactive", description: "logic gates comparison", after: 9 }
      ]
    },
    {
      id: "bilid-bruad",
      part: 2,
      title: "Bilið brúað frá stærðfræði til tölva",
      text: [
        "Claude Shannon var bandarískur stærðfræðingur og verkfræðingur sem fyrstur áttaði sig fyllilega á því hvernig fara mætti að því að sameina heim stærðfræðilegrar rökfræði og vélar. Hann var fjórum árum yngri en Alan Turing, og raunar störfuðu þeir báðir um tíma við dulmálsfræði. Þeim þótti mikið koma til hvors annars og höfðu hvetjandi áhrif hvor á annan.",
        "Shannon hefði nær örugglega unnið Nóbelsverðlaun fyrir rannsóknir sínar ef verðlaunin væru ekki veitt á mjög þröngu sviði. Hann var stærðfræðingur, tölvunarfræðingur og verkfræðingur. Engin Nóbelsverðlaun eru veitt fólki fyrir slík störf. Hann var þó fyrsti verðlaunahafi sérstakra verðlauna sem kallast Kyoto-verðlaunin og eru hugsuð sem viðurkenning á vísindalegum afrekum sem bætt hafa heiminn.",
        "Þegar við ræddum hér að framan um það hvernig hægt er að skrá nánast hvaða upplýsingar sem er í tvíundarkerfi skoðuðum við ekkert hvernig fólk áttaði sig á því að það væri hægt. Leibniz sýndi vissulega fram á að til væri gömul kerfi sem gátu táknað tölur með aðeins tveim táknum. Það var Shannon sem áttaði sig á því að með tvíundarkerfi væri hægt að skapa heilan heim upplýsinga sem safna mætti saman og senda manna á milli með áreiðanlegum og skilvirkum hætti.",
        "Shannon vann um hríð hjá stóru símafyrirtæki og með því að nota rofa, víra og segla sem hann fékk heim með sér úr vinnunni og dót sem hann fékk í jólagjöf frá konu sinni smíðaði hann völundarhús og litla gervimús. Músin virtist geta lært sjálf að rata um völundarhúsið og er oft nefnd sem merkur viðburður í sögu gervigreindar.",
        "Nú ætlum við að einbeita okkur að elstu uppgötvunum Shannons. Uppgötvunum sem hann gerði þegar hann var enn nemandi í háskóla. Þá áttaði hann sig á því að hægt væri að nota rafmagn til að framkvæma röklega hugsun.",
        "Við höfum nokkrum sinnum rætt um það hvernig tölvur í dag eru eins og flókið vegakerfi, gert úr örsmáum rásum sem leiða rafmagn eftir flóknu kerfi. Shannon sýndi fram á auðvelt væri að brúa bilið milli Boole og rafrása enda sé rafmagn þannig að annað hvort streymir það áfram eða ekki, alveg eins og gildin í algebru Boole eru annað hvort einn eða núll.",
        "Hvernig fer rafrás að því að athuga hvort tvö skilyrði séu uppfylt?",
        "Jú, hér höfum við hannað einfaldan búnað sem getur mælt hvort skilyrðið A og B sé uppfyllt. Ef svo er, kviknar ljós.",
        "Rafleiðsla er tengt gegnum ljósaperu, tvo rofa og rafhlöðu. Rofarnir standa fyrir A og B. Lokaður rofi (hleypir rafmagni áfram) fær gildið einn en opinn er núll (því þar fer ekkert rafmagn í gegn). Rofarnir eru raðtengdir þannig að rafmagn þarf fyrst að streyma gegnum rofa A og síðan B til að komast að perunni. Aðeins þegar þeir eru báðir lokaðir getur rafmagn streymt eftir vírnum. Komist rafmagnið alla þá leið kviknar á ljósi.",
        "Við köllum vélbúnað sem svona mælir sannleiksgildi röklegra fullyrðinga rökhlið og tölvur byggja á þeim. Það má líkja rökhliðum við taugakerfi örgjörvans. Þetta rökhlið kallast AND-hlið og er táknað svona."
      ],
      concepts: [
        {
          term: "Rökhlið",
          explanation: "Lítill vélbúnaður sem mælir sannleiksgildi röklegrar fullyrðingar með rafmagni. AND-hlið gefur til dæmis straum aðeins ef BÆÐI inntök hafa straum. Allar tölvur eru gerðar úr milljörðum slíkra hliða — þau eru eins og taugakerfi örgjörvans."
        },
        {
          term: "Rafrás",
          explanation: "Lokuð leið sem rafmagn streymir eftir, samsett úr vírum, rofum og hlutum eins og ljósaperum eða tölvuíhlutum. Þegar Shannon sá að rafrás gæti tjáð satt og ósatt eins og algebra Boole, var brúin milli stærðfræði og tölvu mynduð."
        },
        {
          term: "Raðtenging",
          explanation: "Þegar tveir eða fleiri rofar eru tengdir í röð á sömu vírgrein. Rafmagn þarf að komast í gegnum þá ALLA til þess að ljós kvikni — því virka raðtengdir rofar nákvæmlega eins og AND-hlið."
        }
      ],
      visuals: [
        { type: "interactive", description: "and circuit", after: 7 }
      ]
    },
    {
      id: "ilag-og-fralag",
      part: 2,
      title: "Ílag og frálag",
      text: [
        "Tölvur eru stöðugt að vinna með ílög og frálög (e. input/output). Rökhliðið sem við lýstum rétt áðan skilaði frálagi (ljósi) að réttum skilyrðum (lokaðir rofar) uppfylltum. Ílagið var gefið handvirkt með því að opna eða loka rofunum. Það hefði líka getað gerst sjálfkrafa. Shannon sýndi hvernig tengja má rökhlið í stór kerfi þar sem frálag eins rökhliðs verður ílag þess næsta með þeim afleiðingum að hægt er að framkvæma ótrúlega flókna hluti, allt eftir einföldum röklegum reglum.",
        "Hér höfum við hannað hlið sem metur A OR B.",
        "Nú höfum við hliðtengt rofana og þá þarf aðeins annar þeirra að loka rafrásinni til að ljós kvikni.",
        "Rökhliðin eru fleiri en í grunninn gegna þau öll sama hlutverki. Að vera rökfræðiregla sem verður að tilteknu frálagi ef ílagið er rétt. Svona virkar örgjörvinn, heili tölvunnar, á grunni milljóna eða milljarða röklegra prófa sem hvert um sig er frekar einfalt en saman geta skilað mjög flókinni útkomu."
      ],
      concepts: [],
      visuals: [
        { type: "interactive", description: "or circuit",     after: 1 },
        { type: "interactive", description: "gate builder",   after: 3 },
        { type: "interactive", description: "truth table",    after: 3 }
      ]
    },
    {
      id: "thegar-rokhlid-vinna-saman",
      part: 2,
      title: "Þegar rökhlið vinna saman",
      text: [
        "Á myndinni sjáum við tvö rökhlið sem búið er að tengja saman. Neðra hliðið er AND-hlið og efra XOR. Ílögin eru tveir rofar og frálagið er einn biti af tvíundakóða fyrir hvort hlið (sem sýna annaðhvort 1 eða 0).",
        "Þetta hlið getur lagt saman einföldustu tölur í tvíundarkerfi. Þar sem ílögin eru aðeins tvö getur þessi rafrás aðeins unnið með þessi dæmi: 1+1, 1+0 og 0+1 (fyrir stærri dæmi þarf fleiri ílög og frálög). Munum að í tvíundarkerfi er talan tveir „10“.",
        "Reiknum dæmið „1+1“. Þá er kveikt á báðum rofum. XOR-rökhliðið skilar niðurstöðunni 0 í samræmi við sanngildistöfluna:",
        "AND-rökhliðið mun aftur á móti skila niðurstöðunni 1 þar sem bæði ílögin eru 1:",
        "Frálagið verður því: 1 frá AND-hliðinu og 0 frá XOR-hliðinu. Sem sagt: talan 10 (tveir) í tvíundakerfi.",
        "Hefði aðeins annað ílagið verið 1 og hitt 0 snerist þetta við. Þá myndi AND hliðið skila 0 og XOR-rökhliðið 1. Það er talan einn í tvíundakerfi."
      ],
      concepts: [
        {
          term: "Hálf-deilari",
          explanation: "Lítill vélbúnaður sem leggur saman tvö einbita tölur. Hann er gerður úr einu XOR-hliði (gefur summuna) og einu AND-hliði (gefur flutninginn). Þetta er ein af einföldustu reikni-einingunum sem finna má innan örgjörva — og hún sýnir hvernig flókin reikning er aðeins röð af einföldum rökhliðum tengdum saman."
        },
        {
          term: "Flutningur",
          explanation: "Þegar samlagning gefur of stóra niðurstöðu fyrir eitt sæti þarf að „taka með“ í næsta sæti. Í tugakerfi: 7+5=12, þar sem 1 er flutningurinn. Í tvíundarkerfi: 1+1=10, sem þýðir 0 í lægra sæti og 1 í flutningssæti."
        }
      ],
      visuals: [
        { type: "interactive", description: "half adder visual", after: 0 }
      ]
    }
  ]
};
