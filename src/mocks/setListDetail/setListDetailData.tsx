import type { SetListDetail } from '../../types/setListDetail/setListDetail.type';

export const SetListDetailData: SetListDetail[] = [
  {
    track: {
      likes: 54,
      title: '첫번째 곡',
      artist: '가수가수',
      album: '개쩌는 앨범',
      genre: '락',
      releaseDate: '2023.04.30',
      albumImgUrl:
        'https://deulbull.s3.amazonaws.com/performance/1/setlist/1/image1.jpg',
    },
    song: {
      youtubeUrl: 'https://youtu.be/XD__iZhK4MM?si=4NjEoFnMOkvJvVAz',
      lyrics:
        "미치도록 사랑했던\n지겹도록 다투었던\n너가 먼저 떠나고\n여긴 온종일 비가 왔어\n금세 턱 끝까지 차올랐고\n숨이 막혀와\nOh 내 맘이란 추는 나를 더 깊게, 더 깊게 붙잡아\n\nOh, I'm drowning\nIt's raining all day\nYeah, I can't (yeah) breathe\nOh, oh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nYou're taking my life from me\n\n다 알면서 눈 감은 넌 왜\n다정한 말로 나를 죽여놓고\n날 누이고 너는 떠나갔지\nYou cut me bad, I'm still waiting for you\n너 떠나고 이곳은 잠겨 눈물로\n날 너무 사랑했던 넌\n어디로 흩어졌는지 (oh)\nOh 내 맘이란 추는 나를 더 깊게, 더 깊게 붙잡아\n\nOh, I'm drowning\nIt's raining all day\nYeah, I can't (yeah) breathe\nOh, oh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nYou're taking my life from me\n\n더 깊이 빠져 죽어도 되니까\n다시 한번만 돌아와 줄래?\n더 깊이 빠져 죽어도 되니까\n다시 한번만 (다시 한번만)\n\nOh, I'm drowning\nIt's raining all day\nYeah, I can't (yeah) breathe\nOh, oh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nOh, I'm drowning\nYou're taking my life from me",
    },
    team: [
      { session: 'VOCAL', name: '최유성', instagramId: '@u.star' },
      { session: 'DRUM', name: '김주호', instagramId: null },
      { session: 'GUITAR', name: '박기타', instagramId: '@guitar.park' },
      { session: 'BASS', name: '이베이스', instagramId: null },
      { session: 'KEYBOARD', name: '정건반', instagramId: '@keys_jung' },
    ],
  },
];
