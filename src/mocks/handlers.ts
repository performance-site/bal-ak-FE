import { http, HttpResponse } from 'msw'

export const handlers = [
  // 1. 공연 정보 상세 조회
  http.get('**/performances/:performanceId', () => {
    return HttpResponse.json({
      "status": 200,
      "message": "성공",
      "data": {
        "performanceId": 1,
        "websiteName": "websiteName",
        "websiteDescription": "websiteDescription",
        "imageUrls": [
          "https://item.kakaocdn.net/do/fae86d24809f7b9d33dd4b9ac8e3cdf37154249a3890514a43687a85e6b6cc82",
          "https://yt3.ggpht.com/gZmUSQP9wdYLgdb6V_2HtmgJ9Esw9rV57t6SbA1j4rhw6xfdWIoWVmbpyiQG2j55gTKzCTmIHMmdZQg=s1024-c-fcrop64=1,000003a6ffffd072-nd-v1",
          "https://i.pinimg.com/236x/ee/65/62/ee6562b665719b5c623605756c11ba33.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnCNGYk4itqKhS20_Cm05OLelITZew5I2rw&s",
        ],
        "title": "PERFORMANCE TITLE",
        "subtitle": "PERFORMANCE SUBTITLE",
        "description": "description",
        "dateTime": "dateTime",
        "venue": "venue",
        "openchatUrl": "https://www.kakao.com/de",
        "posterUrls": [
          "https://i.pinimg.com/736x/51/28/1d/51281d3f4f12c6a9cf76dbe5880984f8.jpg",
          "https://i.pinimg.com/236x/3d/f0/f0/3df0f0b9e15cf85c55cd88985d90dc97.jpg"
        ],
        "currentSongTitle": "Drowning",
        "currentSongArtist": "WOODZ (우즈)",
        "currentSongAlbumUrl": "https://~~",
        "location": "location location location",
        "moreLinks": [
          {
            "type": "INSTAGRAM",
            "name": "인스타",
            "url": "https://www.instagram.com/deulbull_band"
          },
          {
            "type": "YOUTUBE",
            "name": "유튜브",
            "url": "https://www.youtube.com/@deulbull_official"
          },
          {
            "type": "GOODS",
            "name": "굿즈",
            "url": "https://notion.so/deulbull_goods"
          },
          {
            "type": "EVENT_NOTICE",
            "name": "이벤트 홍보",
            "url": "https://notion.so/deulbull_event"
          }
        ]
      }
    })
  }),

  // 2. 공연 셋리스트 조회
  http.get('**/performances/:performanceId/setlist', () => {
    return HttpResponse.json({
      status: 200,
      message: "성공",
      data: {
        "nowPlayingOrder": 1,
        "setlist": [
            {
                "order": 1,
                "performanceSongId": 13,
                "title": "첫번째 순서 곡 제목",
                "artist": "첫번째 순서 곡 가수"
            },
            {
                "order": 2,
                "performanceSongId": 14,
                "title": "두번째 순서 곡 제목",
                "artist": "김예나"
            },
            {
                "order": 3,
                "performanceSongId": 15,
                "title": "세번째 순서 곡 제목",
                "artist": "김예나"
            },
        ]
      }
    })
  }),

  // 3. 곡 정보 상세 조회
  http.get('**/tracks/:performanceSongId', () => {
    return HttpResponse.json({
      status: 200,
      message: "성공",
      data: {
        track: {
          likes: 100,
          title: "첫번째 곡",
          artist: "가수가수",
          album: "개쩌는 앨범",
          genre: "락",
          releaseDate: "2023-04-30",
          youtubeUrl: "https://youtu.be/ZSFhYQWXOIs?si=v88pF75qrTQQ3zoC",
          lyrics: "예나야 안녕 여기는 가사 들어 올 자리야",
          albumImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRawnuIyosVD5ha8yrgaicbDvLhbHDs5J1g&s"
        },
        team: [
          {
            session: "VOCAL",
            name: "최유성",
            instagramId: "@u.star"
          },
          {
            session: "DRUM",
            name: "김주호",
            instagramId: null
          }
        ]
      }
    });
  }),

  // 4. 곡 좋아요 추가/취소
  http.post('**/tracks/:performanceSongId/like', async ({ request }) => {
    const { liked } = await request.json() as { liked: boolean };
    return HttpResponse.json({
      status: 200,
      message: "성공",
      data: {
        likes: liked ? 101 : 100,
        liked: liked
      }
    })
  }),
];