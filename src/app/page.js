import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import defimage from '../../assets/indir.jpg';

export default function HomePage() {
  const popularMovies = [
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [27],
      "id": 1267245,
      "original_language": "de",
      "original_title": "Popular",
      "overview": "A remake of the director's earlier film \"A Popular Kill\" (2005)",
      "popularity": 0.198,
      "poster_path": "/3YakCB7o0469qO8qA08wJnvnJqB.jpg",
      "release_date": "2011-01-20",
      "title": "Maximum Violence",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/bKQchT36VDhaZlTezLUAHHHcdxZ.jpg",
      "genre_ids": [10751, 35, 878],
      "id": 1163029,
      "original_language": "en",
      "original_title": "Popular Theory",
      "overview": "Erwin, a girl genius, is the youngest student in high school. Unfortunately she struggles with social isolation. When she meets fellow science guru, Winston, they team up to invent a chemical that changes the high school hierarchy forever.",
      "popularity": 6.69,
      "poster_path": "/vN9MHehYsw5M5SoB4QQZNEmuaqH.jpg",
      "release_date": "2024-02-09",
      "title": "Popular Theory",
      "video": false,
      "vote_average": 7,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/wsQWCwnPV3HmKUU4LD6CEdlc3OE.jpg",
      "genre_ids": [35, 18],
      "id": 442,
      "original_language": "sv",
      "original_title": "Populärmusik från Vittula",
      "overview": "Matti and Niila, growing up in the mid-sixties in the harsh and conservative environment of a Finnish-speaking part of Tornedalen in Swedish Laponia, close to the Finnish border. Their big dream is to become rock stars. In the present the now grown-up Matti feels guilt for the death of his drug-addicted rock star friend Niila.",
      "popularity": 4.969,
      "poster_path": "/79nUxKn6kPagIOHcOMsev3UxT38.jpg",
      "release_date": "2004-10-01",
      "title": "Popular Music",
      "video": false,
      "vote_average": 6.273,
      "vote_count": 55
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [35],
      "id": 611591,
      "original_language": "ms",
      "original_title": "Pengantin Popular",
      "overview": "describing the artist's life at that time, the marital side besides the dispute between the old artist and the new artist.",
      "popularity": 0.605,
      "poster_path": null,
      "release_date": "1994-06-01",
      "title": "Popular Bride",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/uBZDInNPUQdDSBnvJagXzwOWLtV.jpg",
      "genre_ids": [18],
      "id": 669413,
      "original_language": "fa",
      "original_title": "عامه‌پسند",
      "overview": "A middle-aged housewife that is about to enter her sixties decides to become independent after realising her husband has cheated on her in a humiliating fashion.",
      "popularity": 1.21,
      "poster_path": "/qY3nGvAM2zDvI0z2im3FPxyvWHi.jpg",
      "release_date": "2023-11-08",
      "title": "Popular",
      "video": false,
      "vote_average": 2,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 941789,
      "original_language": "es",
      "original_title": "Por un orgasmo libre, colectivo y popular",
      "overview": "November 25th, 2011. Participants of a demonstration against violence on women talk about their issues.",
      "popularity": 0.001,
      "poster_path": null,
      "release_date": "",
      "title": "For a Free, Collective and Popular Orgasm",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/7JnS86sCkd8rdNEUOPRaQSiVzzh.jpg",
      "genre_ids": [99],
      "id": 80242,
      "original_language": "en",
      "original_title": "Stone Cold Steve Austin: The Bottom Line on the Most Popular Superstar of All Time",
      "overview": "He's one of the most popular Superstars in the history of sports-entertainment, with a resume that includes six WWE Championship reigns, three Royal Rumble victories, a King of the Ring Championship, and an unprecedented run of raising hell throughout WWE. Stone Cold Steve Austin continues to be both popular and controversial.",
      "popularity": 9.83,
      "poster_path": "/j4FmdmGJvRUatOnKZAh5WuUNC5O.jpg",
      "release_date": "2011-11-29",
      "title": "Stone Cold Steve Austin: The Bottom Line on the Most Popular Superstar of All Time",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 17
    },
    {
      "adult": false,
      "backdrop_path": "/4lxlmzYsaDsPJUmV5q9uDTej2wM.jpg",
      "genre_ids": [],
      "id": 482846,
      "original_language": "ja",
      "original_title": "世にも奇妙な物語 25周年スペシャル・春 ～人気マンガ家競演編～",
      "overview": "Commemorating the 25th anniversary of the series. In this work, we collaborate with five popular manga artists such as Go Nagai, Junji Ito, Eiichiro Oda, Kazuo Umezu and Masayuki Ishikawa.",
      "popularity": 0.713,
      "poster_path": "/cQX2IySzlfvrsQu52FBiq2rHaFy.jpg",
      "release_date": "2015-04-11",
      "title": "Tales of the Bizarre 25th Anniversary Spring Special: Popular Manga Artist Competition",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": "/amXV48GOp1L2Vza7V2je3nmFNYV.jpg",
      "genre_ids": [35],
      "id": 1038622,
      "original_language": "nl",
      "original_title": "Xander De Rycke - Bekend & Bescheiden",
      "overview": "Xander De Rycke's comedyshow, that acts as a prequel to Uitgerust & Immuun.",
      "popularity": 0.874,
      "poster_path": "/ayfPUV726iRrGs0lWQCNGRa5np8.jpg",
      "release_date": "2022-10-01",
      "title": "Xander De Rycke - Popular & Humble",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [99],
      "id": 593521,
      "original_language": "en",
      "original_title": "Poder Local, Poder Popular",
      "overview": "About the election in assembly of the President of the Poder Popular (Popular Power)",
      "popularity": 0.001,
      "poster_path": "/AsXJ2rP2J8xTjyk1SFjMkWLgv87.jpg",
      "release_date": "1970-01-01",
      "title": "Local Power, Popular Power",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [35],
      "id": 1281783,
      "original_language": "ms",
      "original_title": "Diva Popular",
      "overview": "Erna Teteyye (Umie Aida), is a popular actress who has been in the show business for a long time in Malaysia, and has won numerous awards for her performances. One day, her boyfriend, Faizal (Awie) is given the opportunity to direct a new film produced by Julie (Azean), but all is thrown into chaos when Julie selects the Malaysia Fantasia winner Tasha (Ezlynn) as the heroine of the movie over Erna. Heated words are traded between Erna and Tasha as a result. However, on the night of the Berita Harian's Most Popular Artist Awards, they are both selected as the finalists for the award. Question is: who will emerge the winner in this fight?",
      "popularity": 0.634,
      "poster_path": "/uYjq6A9rtyPChgaq9UodTo6ToRa.jpg",
      "release_date": "2004-10-24",
      "title": "Diva Popular",
      "video": false,
      "vote_average": 9,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [14],
      "id": 746079,
      "original_language": "ja",
      "original_title": "世にも奇妙な物語 20周年スペシャル・春 ～人気番組競演編～",
      "overview": "",
      "popularity": 0.784,
      "poster_path": "/vGw9CGmQEAcxjYsYxOfvvbNzL4c.jpg",
      "release_date": "2010-04-04",
      "title": "Tales of the Bizarre 20th Anniversary Spring Special: Popular Episode Competition",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/a8XgZR0ykgGWFnTiXVf8eRFWgZo.jpg",
      "genre_ids": [99, 10752, 36, 10770],
      "id": 751880,
      "original_language": "fr",
      "original_title": "Pétain, un héros si populaire",
      "overview": "On October 24, 1940, Philippe Pétain met Adolf Hitler in Montoire and led the French into collaboration with the Nazis. A black page in the history of France, written by a man whom many then considered a hero: the winner of Verdun.",
      "popularity": 0.38,
      "poster_path": "/10oCDvvNx3Sw4weDl8f1TRUg1Wi.jpg",
      "release_date": "2010-11-15",
      "title": "Pétain, such a popular hero",
      "video": false,
      "vote_average": 8,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 544329,
      "original_language": "de",
      "original_title": "Gassenhauer",
      "overview": "Film by Lupu Pick.",
      "popularity": 0.345,
      "poster_path": "/cCADhGYY8NjktYmKyrowEFMsaJw.jpg",
      "release_date": "1931-04-02",
      "title": "Popular Tune",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [14],
      "id": 746084,
      "original_language": "ja",
      "original_title": "世にも奇妙な物語 20周年スペシャル・秋 ～人気作家競演編～",
      "overview": "",
      "popularity": 1.42,
      "poster_path": "/rEAI1sQZAWB5uPSTZnaNMPdw4wW.jpg",
      "release_date": "2010-10-04",
      "title": "Tales of the Bizarre 20th Anniversary Fall Special: Popular Author Competition",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/3OtEVlaCWc63FQTE5RdafgwS7MA.jpg",
      "genre_ids": [16, 10751],
      "id": 474870,
      "original_language": "ja",
      "original_title": "それいけ！アンパンマン くろゆき姫とモテモテばいきんまん",
      "overview": "Baikinman is snatched by a black cloud inhabited by a princess who loves black, Kuroyuki-hime (Black Snow). She is immediately thrilled with him and starts making trouble with him, turning everything black. However, both Dokin-chan and Anpanman are determined to stop her.",
      "popularity": 0.898,
      "poster_path": "/wY5LweEnjHecxldZgQP1Hexl8ul.jpg",
      "release_date": "2005-07-16",
      "title": "Go! Anpanman: Princess Black-Snow and Popular Baikinman",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 864141,
      "original_language": "ja",
      "original_title": "昭和流行歌 ジェラシー",
      "overview": "International scholar Kenzo Ishikawa is calling for environmental protection and ecology awareness on a stage. However, the audience is small and the reaction is not good but one man called Haruo was listening enthusiastically. They both meet again at a bar where Ishikawa continues his ecology speech. Haruo wanted to hear more from Ishikawa and visited his house where they embrace after disposing of clothes they deemed harmful for the environment. To further protect the environment Haruo wants to blow up a disposible chopsticks factory and he prepares to make a bomb but Ishikawa doesn't agree with him.",
      "popularity": 0.327,
      "poster_path": "/86j9xjk1CiUZV6uomT2Mt8w9cTM.jpg",
      "release_date": "1991-05-02",
      "title": "Shôwa Popular Song: Jealousy",
      "video": false,
      "vote_average": 2,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [10751, 18, 35],
      "id": 491589,
      "original_language": "ko",
      "original_title": "소문난 고교생",
      "overview": "",
      "popularity": 0.324,
      "poster_path": "/h6PihctmeiCdGNfW9si0IjJCgIS.jpg",
      "release_date": "1977-08-25",
      "title": "The Popular Student",
      "video": true,
      "vote_average": 7,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [35],
      "id": 1155692,
      "original_language": "ko",
      "original_title": "남자는 안 팔려",
      "overview": "",
      "popularity": 2.121,
      "poster_path": "/AgbnNznIVBBepgyWhrYggljWMWX.jpg",
      "release_date": "1963-04-25",
      "title": "Man Is Not Popular",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [18],
      "id": 848495,
      "original_language": "zh",
      "original_title": "街上流行红裙子",
      "overview": "A Xiang, a country girl working at Dafeng cotton mill, purchases a red dress, in fashion on the streets of Shanghai. One day, she lends it to Xing'er, a model worker, and causes a drastic shift in her personality.",
      "popularity": 0.302,
      "poster_path": "/6I5IYYfEAD126jnQxf53lligRVL.jpg",
      "release_date": "1984-12-01",
      "title": "Red Skirt Popular in the Street",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Başlık */}
      <div className="bg-gray-800 p-8 shadow-lg mb-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-400">Popüler Filmler</h1>
        <p className="text-center text-gray-300 mt-2">
          En çok sevilen ve dikkat çeken filmleri keşfedin.
        </p>
      </div>
  
      {/* Arama Çubuğu */}
      <div className="my-2 mb-6 max-w-3xl mx-auto">
        <SearchBar />
      </div>
  
      {/* Film Kartları */}
      <div className="grid grid-cols-3 gap-8 px-6">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.overview || "Açıklama bulunamadı."}
            photo={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defimage
            }
          />
        ))}
      </div>
    </div>
  );
}  