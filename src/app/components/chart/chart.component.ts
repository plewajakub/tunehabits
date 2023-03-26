import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  ready = false;
  chartData: any[] = [];
  optionTable:any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPopularGenres().subscribe((topGenresData) => {
      const CHART_LIMIT = 5;
      for (let index = 0; index < topGenresData.length; index++) {
        const data: any = {
          datasets: [
            {
              data: [],
            },
          ],
          labels: [],
        };
        let dataCounts = [];
        let dataLabels = [];

        for (
          let genresInTable = 0;
          genresInTable < CHART_LIMIT && genresInTable < topGenresData[index].length;
          genresInTable++
        ) {
          dataCounts.push(topGenresData[index][genresInTable][1]);
          dataLabels.push(topGenresData[index][genresInTable][0]);
        }

        data.datasets = [
          {
            data: dataCounts,
          },
        ];
        data.labels = dataLabels;
        this.chartData.push(data);
      }
      console.log(this.chartData[0]);
      this.ready=true;
      for(let i=0; i<topGenresData.length; i++){
        let options = {
          plugins: { 
           title: {
           display: true,
              text: ''
            }
          }
        };
        this.optionTable.push(options);
      }
      this.optionTable[0].plugins.title.text = "Last 30 days";
      this.optionTable[1].plugins.title.text = "Last 6 months";
      this.optionTable[2].plugins.title.text = "All time";
    });
  }

  getPopularGenres(): Observable<any[]> {
    let fullGenreCount: any[] = [];
    return this.spotifyService.getUserTopArtists(50).pipe(
      map((data) => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          let genreCount: any = [];
          element.items.forEach((item: any) => {
            const genre = item.genres[0];
            if (genreCount[genre] && typeof genreCount[genre] === 'number') {
              genreCount[genre] += 1;
            } else {
              genreCount[genre] = 1;
            }
          });
          genreCount = Object.entries(genreCount).sort(
            (a: any, b: any) => b[1] - a[1]
          );
          fullGenreCount.push(genreCount);
        }
        return fullGenreCount;
      })
    );
  }
}