import { of } from 'rxjs';

export class VideoDetailServiceStub {
  getVideoByID(id: string) {
    return of([{
          media:[{
            title: "ʔEsgul Beŝ",
            artist: "Bella Alphonse",
            url: `https://datsan.openbroadcaster.pro/download.php?media_id=${id}`,
            comments: "...",
            id: id,
            lyrics: "fa la la"
          }]
      }]);
    }
}
