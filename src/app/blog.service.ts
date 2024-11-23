import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  publishDate: string;
  author: string;
  readMoreLink: string;
  city: string;
  h1:string;
  seoMetaDescription: string;
  metaDescription :string;
  seoKeywords: string;
  content:string,
  quote:string,
  tags:string[]
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [
    {
      id: 1,
      metaDescription: 'Marrakech, ville mythique du Maroc, regorge de lieux à découvrir. Voici cinq activités incontournables à ne pas manquer.',
      h1: 'Découvrir Marrakech : 5 Activités Incontournables',

      title: 'Découvrir Marrakech : 5 Activités Incontournables',
      description: 'Marrakech, ville mythique du Maroc, regorge de lieux à découvrir. Voici cinq activités incontournables à ne pas manquer.',
      imageUrl: '../../assets/images/city-marrakech1.jpg',
      publishDate: 'Novembre 2024',
      author: 'Mohammed A.',
      quote: 'Marrakech est le carrefour parfait entre histoire, culture et modernité.',
      tags: ['Marrakech', 'Voyage', 'Tourisme', 'Maroc'],
      readMoreLink: '/marrakech-activites-incontournables',
      city: 'Marrakech',
      seoMetaDescription: 'Découvrez les activités incontournables de Marrakech, la perle du sud du Maroc. Explorez ses souks, jardins et monuments historiques.',
      seoKeywords: 'Marrakech, activités incontournables, tourisme, Maroc, voyage à Marrakech, culture marocaine, souks, palais de la Bahia, jardin Majorelle, riads',
      content: `
        <p>Marrakech, aussi appelée la Ville Rouge, est une destination de rêve pour les voyageurs en quête d'authenticité, de dépaysement et d'aventures. Située au pied des montagnes de l'Atlas, cette ville vibrante mêle histoire millénaire et modernité.</p>
        <h2>Pourquoi visiter Marrakech ?</h2>
        <p>Avec son climat ensoleillé toute l'année, sa cuisine exquise et ses sites emblématiques, Marrakech attire des millions de visiteurs chaque année. Que vous soyez passionné d'histoire, amateur d'architecture ou simplement à la recherche d'une expérience unique, Marrakech saura vous séduire.</p>
        <h2>Les 5 Activités Incontournables</h2>
        <h3>1. Perdez-vous dans les souks de la Médina</h3>
        <p>Les souks de Marrakech sont un véritable labyrinthe de couleurs, de sons et d'odeurs. Ici, vous pourrez acheter des tapis artisanaux, des lampes en cuivre, des épices exotiques et bien plus encore. N'oubliez pas de négocier : c'est une partie intégrante de l'expérience !</p>
        <h3>2. Admirez la place Jemaa el-Fna</h3>
        <p>Classée au patrimoine mondial de l'UNESCO, cette place centrale s'anime dès la tombée de la nuit avec des conteurs, des charmeurs de serpents, et des stands de nourriture. Une immersion dans la culture marocaine garantie !</p>
        <h3>3. Visitez le Jardin Majorelle</h3>
        <p>Créé par l'artiste français Jacques Majorelle et restauré par Yves Saint Laurent, ce jardin botanique est un véritable havre de paix au cœur de l'agitation de la ville. Ses couleurs vibrantes et sa végétation luxuriante en font un lieu incontournable.</p>
        <h3>4. Découvrez le Palais de la Bahia</h3>
        <p>Ce palais du XIXe siècle, construit pour abriter la favorite du grand vizir, est un chef-d'œuvre de l'architecture marocaine avec ses mosaïques et ses jardins. Une visite vous plongera dans l'opulence de l'époque.</p>
        <h3>5. Détendez-vous dans un hammam traditionnel</h3>
        <p>Faites l'expérience d'un bain marocain traditionnel dans un hammam local. C'est un moment de relaxation totale, parfait pour conclure une journée bien remplie.</p>
        <h2>Conseils pratiques pour votre visite</h2>
        <ul>
          <li>Préférez visiter en hiver ou au printemps pour éviter les chaleurs estivales.</li>
          <li>Portez des vêtements confortables et respectueux des traditions locales.</li>
          <li>Optez pour un riad traditionnel pour une immersion culturelle complète.</li>
        </ul>
        <h2>Marrakech : une destination magique</h2>
        <p>Avec son charme unique et son hospitalité légendaire, Marrakech est une destination qui restera gravée dans votre mémoire. Réservez votre voyage dès maintenant et laissez-vous transporter par la magie de cette ville marocaine emblématique.</p>
      `
    }
,    
{
  id: 2,
  title: 'Casablanca : Entre Modernité et Tradition',
  metaDescription: 'Casablanca, la capitale économique du Maroc, allie modernité et traditions. Voici ce que vous devez savoir avant de visiter cette ville dynamique.',
  h1: 'Casablanca : Entre Modernité et Tradition',

  description: 'Casablanca, la capitale économique du Maroc, allie modernité et traditions. Voici ce que vous devez savoir avant de visiter cette ville dynamique.',
  imageUrl: '../../assets/images/city-casablanca2.jpg',
  publishDate: 'Novembre 2024',
  author: 'Sara B.',
  quote: 'Casablanca incarne la rencontre parfaite entre le passé et le futur.',
  tags: ['Casablanca', 'Tourisme', 'Maroc', 'Culture', 'Modernité'],
  readMoreLink: '/casablanca-modernite-et-tradition',
  city: 'Casablanca',
  seoMetaDescription: 'Casablanca est une ville qui marie harmonieusement modernité et tradition. Découvrez les endroits à visiter et les attractions phares de cette ville cosmopolite.',
  seoKeywords: 'Casablanca, modernité, tradition, tourisme, Mosquée Hassan II, centre économique, plage de Ain Diab, architecture art déco',
  content: `
    <p>Casablanca, souvent surnommée Casa, est bien plus qu'une simple capitale économique. C'est une ville dynamique où se côtoient des gratte-ciels modernes, des quartiers historiques et des plages animées. Si vous cherchez à découvrir le Maroc sous un angle différent, Casablanca est faite pour vous.</p>
    <h2>Une ville à double visage</h2>
    <p>Casablanca est un parfait exemple de modernité et de tradition. D'un côté, vous avez des immeubles futuristes et des centres commerciaux ultramodernes, et de l'autre, des ruelles pittoresques, des marchés animés et des lieux chargés d'histoire.</p>
    <h3>Les incontournables de Casablanca</h3>
    <h4>1. La Mosquée Hassan II</h4>
    <p>Cette mosquée, l'une des plus grandes au monde, est une merveille architecturale construite au bord de l'océan Atlantique. Son minaret s'élève à 210 mètres, offrant une vue spectaculaire sur la ville. Une visite guidée vous permettra de découvrir ses mosaïques, ses sculptures et son histoire fascinante.</p>
    <h4>2. Le quartier des Habous</h4>
    <p>Aussi connu sous le nom de nouvelle médina, ce quartier combine le charme traditionnel marocain et des influences françaises. Vous y trouverez des boutiques artisanales, des pâtisseries locales et une ambiance authentique.</p>
    <h4>3. La Corniche</h4>
    <p>Idéal pour une promenade en bord de mer, la Corniche de Casablanca offre des vues imprenables, des restaurants de fruits de mer et des plages pour se détendre. C'est un lieu prisé par les habitants et les touristes.</p>
    <h4>4. L’architecture art déco</h4>
    <p>Les amateurs d'architecture apprécieront les bâtiments art déco du centre-ville, témoignages de l'époque coloniale française. Prenez le temps de flâner dans les rues pour admirer ces joyaux architecturaux.</p>
    <h2>Pourquoi choisir Casablanca ?</h2>
    <p>Que vous soyez en voyage d'affaires ou en quête de nouvelles expériences culturelles, Casablanca a de quoi vous séduire. Sa diversité et son énergie en font une destination incontournable pour découvrir un autre visage du Maroc.</p>
  `
}
,
{
  id: 3,
  title: 'Rabat, Capitale Historique du Maroc : À la Découverte de son Patrimoine',
  metaDescription: 'Rabat, la capitale administrative du Maroc, est une ville riche en histoire et en culture. Voici ce que vous devez savoir avant de visiter.',
  h1: 'Rabat, Capitale Historique du Maroc : À la Découverte de son Patrimoine',

  description: 'Rabat, la capitale administrative du Maroc, est une ville riche en histoire et en culture. Voici ce que vous devez savoir avant de visiter.',
  imageUrl: '../../assets/images/city-rabat.jpg',
  publishDate: 'Novembre 2024',
  author: 'Ali C.',
  readMoreLink: '/rabat-patrimoine-historique',
  city: 'Rabat',
  quote: 'Rabat, où l’histoire du Maroc s’écrit à chaque coin de rue.',
  tags: ['Rabat', 'Histoire', 'Patrimoine', 'Tourisme', 'Monuments'],
  seoMetaDescription: 'Rabat, capitale du Maroc, est un trésor de culture et d’histoire. Découvrez ses monuments, musées et attractions historiques.',
  seoKeywords: 'Rabat, patrimoine historique, tourisme, monuments, Kasbah des Oudayas, Tour Hassan, Chellah, Rabat Maroc',
  content: `
    <p>Rabat, la capitale administrative et politique du Maroc, est une ville où le passé et le présent cohabitent harmonieusement. Avec ses avenues modernes, ses jardins luxuriants et ses monuments historiques, Rabat offre une expérience unique aux visiteurs.</p>
    <h2>Un mélange d'histoire et de modernité</h2>
    <p>Rabat a été classée au patrimoine mondial de l'UNESCO grâce à son architecture exceptionnelle et son urbanisme qui reflète l'empreinte des différentes dynasties qui ont régné sur le Maroc. Elle est à la fois un centre historique et une ville moderne en pleine expansion.</p>
    <h3>Les sites emblématiques de Rabat</h3>
    <h4>1. La Kasbah des Oudayas</h4>
    <p>Ce quartier historique, perché au-dessus de l'embouchure du Bouregreg, offre des vues spectaculaires sur l'océan Atlantique. Avec ses ruelles blanchies à la chaux et ses portes ornées, c'est un lieu empreint de charme et de tranquillité.</p>
    <h4>2. La Tour Hassan</h4>
    <p>Vestige d'une mosquée inachevée construite sous le règne du sultan Yacoub El Mansour, la Tour Hassan est un symbole de Rabat. À côté, le Mausolée Mohammed V est un chef-d'œuvre d'architecture marocaine moderne.</p>
    <h4>3. Le Chellah</h4>
    <p>Le Chellah est une nécropole médiévale entourée de murailles. Ce site archéologique, qui date de l'époque romaine, est un lieu fascinant à explorer, avec ses jardins paisibles et ses cigognes qui nichent dans les ruines.</p>
    <h4>4. Les jardins exotiques de Rabat</h4>
    <p>Les jardins d'Essais et les jardins exotiques de Bouknadel sont parfaits pour une promenade relaxante. Ces espaces verts luxuriants reflètent la richesse botanique de la région.</p>
    <h2>Activités culturelles à ne pas manquer</h2>
    <p>Rabat abrite plusieurs musées, dont le Musée Mohammed VI d'art moderne et contemporain, qui expose des œuvres d'artistes marocains et internationaux. La ville accueille également des événements culturels tels que le Festival Mawazine, un rendez-vous incontournable pour les amateurs de musique.</p>
    <h2>Pourquoi visiter Rabat ?</h2>
    <p>Rabat est une ville qui séduit par son calme, sa propreté et son ambiance conviviale. Que vous soyez passionné d'histoire ou en quête de détente, Rabat a tout pour plaire. Explorez cette capitale et laissez-vous charmer par ses trésors cachés.</p>
  `
}
,
{
  id: 4,
  title: 'Tanger : Une Ville Entre Mer et Culture',
  metaDescription: 'Tangier est une ville où la mer rencontre la culture. Découvrez ce qui fait de Tangier une destination unique au Maroc.',
  h1: 'Tanger : Une Ville Entre Mer et Culture',

  description: 'Tangier est une ville où la mer rencontre la culture. Découvrez ce qui fait de Tangier une destination unique au Maroc.',
  imageUrl: '../../assets/images/city-tanger.jpg',
  publishDate: 'Novembre 2024',
  author: 'Laila D.',
  quote: 'Rabat, où l’histoire du Maroc s’écrit à chaque coin de rue.',
  tags: ['Rabat', 'Histoire', 'Patrimoine', 'Tourisme', 'Monuments'],
  readMoreLink: '/tangier-mer-et-culture',
  city: 'Tanger',
  seoMetaDescription: 'Tangier, située au bord de la mer Méditerranée, est une ville fascinante qui mélange culture et paysages spectaculaires. Découvrez cette destination marocaine incontournable.',
  seoKeywords: 'Tangier, mer, culture, tourisme, Kasbah de Tanger, Cap Spartel, grottes d’Hercule, Tanger Maroc',
  content: `
    <p>Située à la croisée de la Méditerranée et de l'océan Atlantique, Tanger est une ville au riche passé historique et culturel. Longtemps considérée comme une porte entre l'Europe et l'Afrique, cette ville portuaire est une destination incontournable pour les amateurs d'histoire, de culture et de nature.</p>
    <h2>Un mélange unique d'influences</h2>
    <p>Tanger a été un carrefour de civilisations pendant des siècles. Cette influence multiculturelle se reflète dans son architecture, sa cuisine et son ambiance cosmopolite. Aujourd'hui, Tanger est une ville dynamique qui conserve son charme bohème.</p>
    <h3>Les incontournables de Tanger</h3>
    <h4>1. La Kasbah de Tanger</h4>
    <p>Perchée sur une colline, la Kasbah offre une vue imprenable sur le détroit de Gibraltar. Ce quartier historique abrite également le Musée de la Kasbah, qui expose des artefacts retraçant l'histoire de la région.</p>
    <h4>2. Le Cap Spartel</h4>
    <p>À seulement quelques kilomètres de Tanger, le Cap Spartel est un lieu où l'océan Atlantique rencontre la Méditerranée. Son phare emblématique est un point de repère célèbre, parfait pour les amoureux de la nature.</p>
    <h4>3. Les grottes d’Hercule</h4>
    <p>Ces grottes légendaires, situées près de Tanger, sont un site incontournable pour leur beauté naturelle et leur lien mythologique avec Hercule. Ne manquez pas la célèbre ouverture en forme de carte d'Afrique.</p>
    <h4>4. La Médina de Tanger</h4>
    <p>Avec ses ruelles étroites, ses marchés animés et ses boutiques artisanales, la médina de Tanger est un endroit parfait pour découvrir l'authenticité marocaine. Prenez le temps de vous perdre dans ce labyrinthe vivant.</p>
    <h2>La vie culturelle de Tanger</h2>
    <p>Tanger est une source d'inspiration pour de nombreux artistes et écrivains. Des figures emblématiques comme Paul Bowles et Henri Matisse ont trouvé dans cette ville une source de créativité inépuisable. Aujourd'hui, des galeries d'art et des festivals célèbrent cet héritage artistique.</p>
    <h2>Conseils pour profiter pleinement de Tanger</h2>
    <ul>
      <li>Visitez Tanger au printemps ou en automne pour profiter d'un climat doux.</li>
      <li>Goûtez aux spécialités locales comme le poisson frais et le thé à la menthe.</li>
      <li>Prenez le temps d'explorer les plages environnantes pour une expérience relaxante.</li>
    </ul>
    <h2>Un voyage inoubliable</h2>
    <p>Avec sa beauté naturelle, son riche patrimoine et son ambiance accueillante, Tanger est une destination qui ne manquera pas de vous émerveiller. Préparez-vous à être séduit par cette perle du nord du Maroc.</p>
  `
},
{
  id: 5,
  title: 'Location de voiture à Marrakech : Guide Complet',
  metaDescription: 'Découvrez nos offres de location de voiture à Marrakech dès 7€/jour. Réservez en ligne et profitez d’un service rapide et fiable.',
  h1: 'Location de voitures à Marrakech : Tarifs imbattables',
  description: 'Tout ce que vous devez savoir pour louer une voiture à Marrakech. Conseils pratiques, meilleurs prix, et astuces pour voyager sereinement.',
  imageUrl: '../../assets/images/post7.webp',
  publishDate: 'Novembre 2024',
  author: 'BrfaCars',
  quote: 'Louer une voiture à Marrakech, c’est la liberté de découvrir le Maroc à votre rythme.',
  tags: ['location voiture', 'Marrakech', 'tourisme', 'conseils voyage'],
  readMoreLink: '/location-voiture-marrakech-guide',
  city: 'Marrakech',
  seoMetaDescription: 'Découvrez notre guide complet pour la location de voiture à Marrakech. Comparez les prix, découvrez les meilleures agences et suivez nos conseils pratiques.',
  seoKeywords: 'location voiture Marrakech, agence de location, voiture pas chère, louer voiture Maroc, conseils location, Marrakech voiture',
  content: `
    <h1>Location de voiture à Marrakech avec BrfaCars : Guide Complet</h1>
    <p>BrfaCars est l'agence de location de voiture à Marrakech qui vous offre des services flexibles et économiques pour explorer la ville et ses environs. Que ce soit pour un séjour professionnel ou touristique, louer une voiture avec BrfaCars vous permet de découvrir le Maroc à votre propre rythme, dans des véhicules modernes et bien entretenus.</p>

    <h2>Pourquoi choisir BrfaCars pour votre location de voiture à Marrakech ?</h2>
    <p>BrfaCars se distingue par sa capacité à répondre aux besoins spécifiques de chaque client. Voici pourquoi choisir notre agence pour votre <strong>location de voiture à Marrakech</strong> :</p>
    <ul>
      <li><strong>Véhicules de qualité</strong> : Nous proposons une flotte variée de voitures récentes, allant des citadines économiques aux véhicules plus spacieux pour les familles ou les groupes.</li>
      <li><strong>Prix compétitifs</strong> : Chez BrfaCars, nous vous offrons des tarifs transparents et sans surprises. Nos prix sont compétitifs et adaptés à votre budget.</li>
      <li><strong>Flexibilité et service personnalisé</strong> : Vous pouvez choisir entre des options de location flexibles, que ce soit pour quelques heures, une journée, ou plusieurs semaines. Nous proposons également des services personnalisés, comme la livraison de voiture à l'endroit de votre choix.</li>
    </ul>

    <h2>Comment louer une voiture à Marrakech avec BrfaCars ?</h2>
    <p>La location de voiture à Marrakech avec BrfaCars est simple et rapide. Suivez ces étapes pour réserver votre voiture :</p>
    <ol>
      <li><strong>Réservez en ligne</strong> : Visitez notre site web et choisissez le véhicule qui correspond à vos besoins. Vous pouvez également nous contacter par téléphone pour plus de renseignements.</li>
      <li><strong>Choisissez vos options</strong> : Optez pour des services supplémentaires tels que l'assurance, le GPS, ou le siège enfant pour une conduite plus sûre et confortable.</li>
      <li><strong>Récupérez votre voiture</strong> : Vous pouvez récupérer votre véhicule directement à notre agence ou nous vous livrons votre voiture où vous le souhaitez à Marrakech.</li>
    </ol>

    <h2>Conseils pratiques pour louer une voiture à Marrakech avec BrfaCars</h2>
    <ul>
      <li><strong>Permis de conduire</strong> : Assurez-vous d'avoir un permis de conduire valide, et si nécessaire, un permis de conduire international.</li>
      <li><strong>Inspection du véhicule</strong> : Avant de partir, vérifiez l'état du véhicule avec notre agent et signalez toute anomalie.</li>
      <li><strong>Assurance</strong> : Nous vous recommandons de choisir une assurance tous risques pour être couvert en cas d’incident.</li>
    </ul>

    <h2>Les meilleurs itinéraires à découvrir depuis Marrakech avec BrfaCars</h2>
    <h3>1. Les montagnes de l’Atlas</h3>
    <p>A seulement 90 minutes de route de Marrakech, les montagnes de l'Atlas offrent un cadre idéal pour une aventure en voiture. Partez à la découverte des villages berbères et des paysages époustouflants.</p>
    
    <h3>2. Essaouira</h3>
    <p>Essaouira, une magnifique ville côtière, est accessible en 3 heures de route depuis Marrakech. Profitez de son atmosphère unique, de ses plages et de sa médina classée au patrimoine mondial de l'UNESCO.</p>

    <h2>Conclusion</h2>
    <p>La <strong>location de voiture à Marrakech</strong> avec BrfaCars est la solution idéale pour découvrir cette ville fascinante et ses environs en toute liberté. Nous vous garantissons une expérience sans tracas, avec des véhicules modernes et un service à la hauteur de vos attentes. Réservez dès maintenant avec BrfaCars et partez à l’aventure !</p>

    <p><strong>Meta Description SEO</strong>: Louez une voiture avec BrfaCars à Marrakech pour découvrir la ville et ses environs à votre rythme. Profitez de véhicules de qualité, de prix compétitifs, et d'un service personnalisé.</p>
    <p><strong>SEO Keywords</strong>: location voiture Marrakech, louer une voiture Marrakech, BrfaCars, location voiture Marrakech pas cher, voiture de location Marrakech, BrfaCars Marrakech</p>
  `
}



  ];

  constructor() { }

  // Method to get all blogs
  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  // Method to get a blog by ID
  getBlogById(id: number): Observable<Blog | undefined> {
    const blog = this.blogs.find(b => b.id === id);
    return of(blog);
  }
}
