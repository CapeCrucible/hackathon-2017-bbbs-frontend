import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpWrapper } from '../../http-wrapper.service';
import { Router } from '@angular/router';
import { ShallowMatchDetails } from '../match-details/match-details.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  private baseUrl: string;
  matches: ShallowMatchDetails[];

  constructor(private http: HttpWrapper, private router: Router) {
    this.baseUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.http.get<ShallowMatchDetails[]>(this.baseUrl + 'UserMapping/GetAllMatchesShallow')
      .subscribe(matches => this.matches = matches);
  }

  onMatchSelected(match: ShallowMatchDetails) {
    this.router.navigate(['matches', match.little.id]);
  }
}
