import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpWrapper } from '../../http-wrapper.service';
import { MatchDetails } from './match-details.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  private baseUrl: string;
  match: MatchDetails;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpWrapper) {
    this.baseUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];

      this.http
        .get<MatchDetails>(this.baseUrl + 'UserMapping/GetMatchByUserAccountId/' + userId)
        .subscribe(match => this.match = match);
    });
  }

  unmatch() {
    if (!this.match) {
      return;
    }

    this.http
      .get(this.baseUrl + 'UserMappping/DeleteMatchById/' + this.match.matchId)
      .subscribe();
  }
}
